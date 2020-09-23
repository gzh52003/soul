const {
    MongoClient,
    ObjectId
} = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbname = 'soul';

async function connect() {
    const client = await MongoClient.connect(url, {
        useUnifiedTopology: true
    });
    const db = client.db(dbname);
    return {
        client,
        db,

    }
}


// 查找
async function find(colName, query, options) {
    query = query || {};
    options = options || {};
    const {
        client,
        db
    } = await connect();
    if (query)
        if (query._id) {
            if (Array.isArray(query._id)) {
                query._id = query._id.map((item) => {
                    return ObjectId(item);
                })
            } else {
                query._id = ObjectId(query._id);
            }
        }


    if (options.status) {
        query.status = {
            $eq: options.status * 1
        }
    }
    const opt = {};
    if (options.field) {
        opt.projection = options.field;
    }
    // 选择对应的集合
    const collection = db.collection(colName);
    let result
    
    if (Array.isArray(query._id)) {
        result = await collection.find({
            _id: {
                $in: query._id
            }
        })
    } else {
        result = collection.find(query, opt);
    }
    if (options.sort) {
        let sort = options.sort;

        sort = sort.split(",");
        let key = sort[0];
        let val;
        if (sort.length > 1) {
            val = sort[1] * 1;
        } else {
            val = -1;
        }
        result = result.sort({
            [key]: val
        })
    }

    if (options.skip) {
        result = result.skip(options.skip);
    }

    if (options.pagesize) {
        result = result.limit(options.pagesize);
    }
    result = await result.toArray();
    client.close();
    return result;
}
// 插入
async function insert(colName, query) {
    const {
        client,
        db
    } = await connect();
    const collection = db.collection(colName);
    // 添加一条数据只能用insetOne
    const result = await collection[query instanceof Array ? "insertMany" : "insertOne"](query);
    client.close();

    return result;
}
// 删除（健壮被删除）
async function remove(colName, id) {
    const {
        db,
        client
    } = await connect();
    let arr = [];
    let query = {};
    let queryArr = {};
    const collection = db.collection(colName);
    if (id) {
        if (id instanceof Array) {
            for (var i of id) {
                queryArr._id = ObjectId(i);
                arr.push(queryArr._id);
            }
            const result = await collection.deleteMany({
                _id: {
                    $in: arr
                }
            });
            client.close();
            return result;
        }
        if (typeof id === "string") {
            query._id = ObjectId(id);
            const result = await collection.deleteMany(query);
            client.close();
            return result
        }
    }
    // if (id && typeof id === 'string') {
    //     idArr = id.split(",");
    //     idArr.forEach(item => {
    //         let query = {};
    //         query._id = ObjectId(item);
    //         queryList.push(query)
    //     })
    //     console.log(queryList);
    //     const result = await collection.deleteMany(queryList);
    //     client.close();
    //     return result;
    // }
    client.close();
    return;
}


// 修改
async function updateById(colName, query, id) {
    const {
        db,
        client
    } = await connect();
    let data = {};
    if (id && typeof id === 'string') {
        data._id = ObjectId(id);
    }
    const collection = db.collection(colName);
    const result = await collection.updateMany(data, {
        $set: query
    })
    client.close();
    return result;
}

module.exports = {
    find,
    insert,
    remove,
    updateById,
}
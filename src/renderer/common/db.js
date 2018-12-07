const Nedb = require('nedb')

export default class Db {
    constructor(username){
        this.username = username
    }

    /**
     *  获取数据库对象
     * @param {string} table 
     */
    getDatastore(table) {
        return new Nedb({filename: 'data/' + this.username + '/' + table + '.db', autoload: true })
    }
    /**
     * 插入数据
     * @param {string} table 表名
     * @param {object} documents 文档；可为json数组或json对象
     */
    insertDocument(table, documents) {
        let number = 0
        const db = this.getDatastore(table)
        db.insert(documents, function(err, newDoc) {
           if(err === null){
                number = newDoc.length
           } else {
               throw err
           }
        })
        return number;
    }
    /**
     * 查找数据
     * get all data when the params is null
     * @param {string} table 
     * @param {object} params 
     */
    findDocument(table,params,callback){
        let docList = []
        const db = this.getDatastore(table)
        db.find(params,callback)
    }
}
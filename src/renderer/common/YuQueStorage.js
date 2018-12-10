const store = require('store');

export default class YuQueStorage{
    /**
     * 构造函数
     */
    constructor() {

    }
    /**
     * 缓存语雀的登录信息到本地
     * @param {string} param
     * @param {function} callback
     */
    async saveYuqueInfo(key, param, callback){
        await this.setYuqueStorage(key, param)
        callback && callback()
    }

    /**
     * 缓存信息到本地
     * @param {string} key 本地缓存key
     * @param {object} value 本地缓存value
     */
    setYuqueStorage(key, value) {
        return new Promise(function (resolve, reject) {
            try {
                store.set(key,value)
                resolve();
            } catch (error) {
                return reject(error)
            }
        })
    }
    /**
     * 
     * @param {string} key 
     */
    getYuqueStorage(key) {
        return store.get(key)
    }   
}
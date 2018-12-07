const storage = require('electron-json-storage');

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
                localStorage.setItem(key,value)
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
        return localStorage.getItem(key)
    }   
}
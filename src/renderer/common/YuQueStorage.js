const storage = require('electron-json-storage');
import Constant from '../common/constant'

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
    async saveYuqueInfo(param, callback){
        let params = {
            token : param.token,
            name : param.authParam
        }
        await this.setYuqueStorage(Constant.yuque.infoKey, params)
        callback && callback()
    }

    /**
     * 缓存信息到本地
     * @param {string} key 本地缓存key
     * @param {object} value 本地缓存value
     */
    setYuqueStorage(key, value) {
        return new Promise(function (resolve, reject) {
            storage.set(key, value, function(error){
                if (error) return reject(error);
                resolve();
            })
        })
    }   
}
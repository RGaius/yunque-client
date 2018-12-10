/**
 * 用户认证url
 * @param {string} name 
 */
export function getAuthUserUrl(name) {
    let authUserUrl = '';
    if (name != null && name.length > 0) {
        authUserUrl = 'users/' + name;
    }
    return authUserUrl;
}
/**
 * 获取用户仓库请求地址
 * @param {string} name
 * @returns {string} 仓库请求地址 
 */
export function getReposUrl(name) {
    let reposUrl = '';
    if (name != null && name.length > 0) {
        reposUrl = 'users/' + name + '/repos';
    }
    return reposUrl;
}
/**
 * 获取仓库文档列表地址
 * @param {number} reposId 
 */
export function getDocListUrl(reposId) {
    let reposUrl = '';
    if (reposId != null) {
        reposUrl = 'repos/' + reposId
    }
    return reposUrl;
}
/**
 * 获取文档详情
 * @param {string} docId 
 */
export function getDocDetailUrl(docId) {

}
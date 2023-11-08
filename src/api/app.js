// import request from './utils/request'
// import http from './utils/http'
// 參數命名 請求方式+功能或者内容+参数
// export function getConfigsByProductId(productId) {
//     return reques({
//         url: '/manager/getConfigsByProductId',
//         params: {
//             productId: productId
//         }
//     })
// }
export function getSellerInvoiceVerifyResult() {
    // 使用者發票驗證結果
    return request({
        url: '/liff/GetDataTable_SellerInvoiceVerifyResult/7978B4EB00EB4F77998CA206E06E5A5C',
        method: 'get'
    })
}
// export function addNewAndroidPlugin(data) {
//     return reques({
//         url: '/manager/addAndroidPlguin',
//         data: JSON.stringify(data)
//     })
// }
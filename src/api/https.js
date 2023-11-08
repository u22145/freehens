//第一步导入axios
import axios from 'axios'
import {
    Toast
} from 'vant';
//第二步 我们可以声明一个新的常量axios 我们可以配置一些基础 公共的路径配置   比如说baseURL timeout请求失败超时报错 withcookies...之类的东西
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL //如果配置了环境变量就可以直接写/api,
    withCredentials: true,
    timeout: 3000 //请求超时
})
//第三步 设置请求拦截
//新的常量axios service.拦截器.请求.使用===》 里头有两个参数 一个成功的回调函数  一个失败的回调函数
service.interceptors.request.use(config => {
    //每次发送请求要进行的公共操作  每次发送请求一般需要的操作一般都有 开启loading加载动画 token写在请求的头部 之类的
    //loading
    Toast.loading({
        message: '加载中...',
        forbidClick: true,
    });

    //最后的话一定要给他return出去 不return不执行
    return config
}, err => {
    //请求的时候如果发生错误了， 这边直接给它抛出错误就行
    // throw new Error(err)抛出的是一个红色的报错方便我们查看寻找
    throw new Error(err)

})
//第四步 设置响应拦截
service.interceptors.response.use(response => {
    //我们每次成功发送一个请求 它都会有响应的 参数也是两个
    //一般成功之后可以清除或关闭loading动画 还可以判断一些状态码
    //清除loading动画 
    Toast.clear()

    //判断状态码
    const res = response.data
    if (res.status && res.status !== 200) {
        // 登录超时,重新登录
        if (res.status === 401) {
            Toast.loading({
                message: '登录超时，请从新登录',
                forbidClick: true,
            });
        }
        return Promise.reject(res || 'error')
    } else {
        return res.data
    }

}, err => {
    return Promise.reject(err)
})


//导出  导出这个模块
export default service
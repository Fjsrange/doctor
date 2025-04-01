// 对axios进行二次封装
// 目的：统一处理请求，比如loading，错误提示，baseURL等
// 目的一：统一处理请求拦截器和响应拦截器
// 目的二：请求拦截器，一般可以再请求头中携带公共的参数：token等
// 目的三：响应拦截器，可以简化服务器返回的数据，处理http网络错误、token过期等问题
import axios from "axios";
import {ElMessage} from "element-plus"; // 引入element-plus的消息提示组件

// 利用axios.create方法创建一个axios实例：可以设置基础路径、超时的时间的设置
const request = axios.create({
  baseURL: "/api", // 请求的基础路径
  timeout: 5000, // 超时的时间设置
});

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    // config: 请求拦截器回调注入的对象（配置对象），配置及对象的身上最重要的属性就是请求头（header）
    // 可以通过请求头携带公共参数: token
    // this.$message.loading("加载中...");
    // ElMessage
    return config;
  },
  (error) => {
    // 错误处理
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    // 响应拦截器成功的回调
    return response.data;
  },
  (error) => {
    // 响应拦截器失败的回调，处理http网络错误、token过期等问题
    let status = error.response.status; // 获取响应的状态码
    switch (status) {
      case 404:
        // this.$message.error("请求的资源不存在");
        ElMessage.error({
          type: "error", // 提示类型
          message: error.message, // 提示的内容
          duration: 2000, // 提示的持续时间
        });
        break;
      case 500|501|502|503|504:
        ElMessage.error({
          type: "error", // 提示类型
          message: error.message, // 提示的内容
        });
        break;
      case 401:
        ElMessage.error({
          type: "error", // 提示类型
          message: '参数有误', // 提示的内容
        })
        break;
    }
    return Promise.reject(new Error(error.message));
  }
);

export default request;

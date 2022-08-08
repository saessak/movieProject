import axios from "axios";;

const api = axios.create({
    baseURL:"https://api.themoviedb.org/3", //기본 url 지정
    headers:{"Content-type": "application/json"} //json type
})

api.interceptors.request.use(function (config) { //interceptors : api함수를 호출할 때마다 인터셉트하여 실행하는 소스(설명을 위한 소스추가임.)
    // request를 보내기전 형태?
    console.log("request start", config);
    return config;
  }, function (error) {
    // erroe있을 경우?
    console.log("request error?", error);
    return Promise.reject(error);
  });

// Add a response interceptor
api.interceptors.response.use(function (response) {
    // response 결과?
    console.log("get responese", response);
    return response;
  }, function (error) {
    // erroe있을 경우?
    console.log("response error", error);
    return Promise.reject(error);
  });

  export default api; //api 수출
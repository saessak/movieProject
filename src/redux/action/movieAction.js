import api from "../api";

const API_KEY=process.env.REACT_APP_API_KEY //env파일내의 키값 가져오는 방법
function getMovies(){
    return async(dispatch) =>{
        const popularMovieApi = api.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
        const topRatedApi= api.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
        const upComingApi = api.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)

        let [popularMovies, topRatedMovies, upComingMovies] = await Promise.all([ //api 호출 동시 진행. 해당 api값이 다 호출될 때 까지만 기다린다.
            popularMovieApi, 
            topRatedApi, 
            upComingApi
        ]);

        dispatch({
            type: "GET_MOVIES_SUCCESS",
            payload: {
                popularMovies:popularMovies.data, 
                topRatedMovies: topRatedMovies.date, 
                upComingMovies:upComingMovies.data,
            }
        })

        console.log("popularMovieApi",popularMovieApi)
        console.log("topRatedApi",topRatedApi)
        console.log("upComingApi",upComingApi)
    }
}

export const movieAction = {
    getMovies, //movieAction에서 getMovies함수 수출
}
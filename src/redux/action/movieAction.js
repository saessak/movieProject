import api from "../api";

const API_KEY=process.env.REACT_APP_API_KEY //env파일내의 키값 가져오는 방법
function getMovies(){
    return async(dispatch) =>{
        try{
            dispatch({
                type:"GET_MOVIES_REQUEST",
            });

            const popularMovieApi = api.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
            const topRatedApi = api.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
            const upComingApi = api.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);
            const genreApi = api.get(`/genre/movie/list?api_key=${API_KEY}&language=en-US`);
    
            let [popularMovies, topRatedMovies, upComingMovies, genreList] = await Promise.all([ //api 호출 동시 진행. 해당 api값이 다 호출될 때 까지만 기다린다.
                popularMovieApi, 
                topRatedApi, 
                upComingApi,
                genreApi,
            ]);
    
    console.log("genreList?", genreList);
            dispatch({
                type: "GET_MOVIES_SUCCESS",
                payload: {
                    popularMovies:popularMovies.data, 
                    topRatedMovies: topRatedMovies.date, 
                    upComingMovies:upComingMovies.data,
                    genreList:genreApi.data.genres,
                }
            })   
        }catch(error){
            //에러 핸들링
            dispatch({
                type:"GET_MOVIES_FAILURE",
            })
        }

    }
}

export const movieAction = {
    getMovies, //movieAction에서 getMovies함수 수출
}
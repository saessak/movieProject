import React, {useEffect} from 'react'
import { movieAction } from '../redux/action/movieAction';
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../components/Banner';
import MovieSlide from '../components/MovieSlide';
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  const dispatch = useDispatch();
  const {popularMovies, topRatedMovies, upComingMovies, loading} = useSelector(
    (state) => state.movie
  );

  useEffect(()=>{
    dispatch(movieAction.getMovies());
  },[]);

  /*
    loading이 true면 loading스피너 노출, 
    loading이 false면 데이터노출

    ture : 데이터 도착 전
    false :데이터 도착 후, 에러가 났을 때.
  */


  if(loading){
    return <ClipLoader color="#fff" loading={loading} size={150} />;
  }

  return (
    <div>
      
      {/* 조건부 렌더링 popularMovies 데이터가 있으면 Banner 노출 : return 코드가 먼저 렌더링 되기 때문에*/}
      {/* {popularMovies.results && <Banner movie={popularMovies.results[0]} />}  */}
      <Banner movie={popularMovies.results[0]} />

      <h1>Popular Movie</h1>
      <MovieSlide movies={popularMovies}/>

      <h1>Top rated Movie</h1>
      <MovieSlide movies={topRatedMovies}/>

      <h1>Upcoming Movie</h1>
      <MovieSlide movies={upComingMovies}/>
    </div>
  );
}

export default Home;
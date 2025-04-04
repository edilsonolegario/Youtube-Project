import React, { useEffect } from 'react'
import GlobalAPI from '../../Services/GlobalAPI'
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original/'

function Slider() {
const [movieList, setMovieList] = React.useState([]);

    useEffect(() =>{
        getTrendingMovies(); 
    }, [])

    const getTrendingMovies = () => {
       GlobalAPI.getTrendingVideos().then(resp=>{
            console.log(resp.data.results);
            setMovieList(resp.data.results);
        })
    }
  return (
    <div className="relative w-full px-16 py-4">
    <div className="flex overflow-x-auto w-full scrollbar-hide 
    hide-scrollbar no-scrollbar" 
    style={{
      scrollbarWidth: 'none',
      msOverflowStyle: 'none'
    }}>
        {movieList.map((item, index) => (
            <img src={IMAGE_BASE_URL+item.backdrop_path} 
            className='min-w-full h-[310px] object-cover
            object-left-top mr-5 rounded-md'/>
        ))}
    </div>
    </div>
  )
}

export default Slider
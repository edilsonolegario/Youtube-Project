import React, { useEffect, useRef, useState} from 'react'
import GlobalAPI from '../../Services/GlobalAPI'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original/'

function Slider() {
const [movieList, setMovieList] = useState([]);
const elementRef = useRef();
    useEffect(() =>{
        getTrendingMovies(); 
    }, [])

    const getTrendingMovies = () => {
       GlobalAPI.getTrendingVideos().then(resp=>{
            console.log(resp.data.results);
            setMovieList(resp.data.results);
        })
    }

    const sliderRight = (element) => {
        element.scrollLeft+=800
    }
    const sliderLeft = (element) => {
        element.scrollLeft-=800
    }
  return (
    <div>
      <HiChevronLeft className="hidden md:block text-white text-[30px] absolute mx-8 mt-[155px] cursor-pointer" onClick={() => sliderLeft(elementRef.current)}/>
      <HiChevronRight className="hidden md:block text-white text-[30px] absolute mx-8 mt-[155px] cursor-pointer right-0" onClick={() => sliderRight(elementRef.current)}/>
    <div className="relative w-full px-16 py-4" >
    <div className="flex overflow-x-auto w-full scrollbar-hide 
    hide-scrollbar no-scrollbar" 
    ref={elementRef} 
    style={{
      scrollbarWidth: 'none',
      msOverflowStyle: 'none'
    }}>
        {movieList.map((item) => (
            <img src={IMAGE_BASE_URL+item.backdrop_path} 
            className='min-w-full md:h-[310px] object-cover
            object-left-top mr-5 rounded-md'/>
        ))}
    </div>
    </div>
    </div>
  )
}

export default Slider
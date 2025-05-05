import React, { useEffect } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import GlobalAPI from '../../Services/GlobalAPI'
import MovieCard from './MovieCard';

function MovieList({ genreId }) {
    const [movieList, setMovieList] = React.useState([]);
    const elementRef = React.useRef(null);
    const screenWidth = window.innerWidth;

    useEffect(() => {
        getMovieByGenreId();
    }, [genreId]);

    const getMovieByGenreId = () => {
        GlobalAPI.getMovieByGenreId(genreId).then((res) => {
            setMovieList(res.data.results);
        });
    };

    const sliderRight = () => {
        if (elementRef.current) {
            elementRef.current.scrollLeft += screenWidth - 110;
        }
    };

    const sliderLeft = () => {
        if (elementRef.current) {
            elementRef.current.scrollLeft -= screenWidth - 110;
        }
    };

    return (
        <div className="relative w-full px-16 py-4">
            <HiChevronLeft
                className="hidden md:block text-white text-[30px] absolute left-8 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
                onClick={sliderLeft}
            />
            <HiChevronRight
                className="hidden md:block text-white text-[30px] absolute right-8 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
                onClick={sliderRight}
            />

            <div
                className="flex overflow-x-auto w-full scrollbar-hide"
                ref={elementRef}
                style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                }}
            >
                <div className='flex gap-8 scrollbar-none scroll-smooth pt-4 px-3 pb-4'>
                    {movieList.map((item, index) => index<5&& (
                        <MovieCard key={index} movie={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MovieList;

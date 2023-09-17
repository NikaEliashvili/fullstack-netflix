import React from 'react'
import {BsFillPlayFill} from 'react-icons/bs'
import {BiChevronDown} from 'react-icons/bi'
import FavoriteButton from './FavoriteButton';
import { useRouter } from 'next/router';
import useInfoModal from '../hooks/useInfoModal';

interface MovieCardProps {
    data: Record<string, any>;
}

const MovieCard: React.FC<MovieCardProps> = ({data})=>{
    const {description, duration, genre, id, thumbnailUrl, title, videoUrl} = data
    const router = useRouter()
    const {openModal} = useInfoModal()


    return (
        <div className='group bg-zinc-900 col-span-1 relative h-[18vw] '>
            <img 
            className='
            cursor-pointer
            object-cover
            transition
            duration
            shadow-xl
            rounded-md
            group-focus:opacity-0
            sm:group-hover:opacity-0
            group-hover:opacity-90
            delay-300
            w-full
            h-[15vw]
            '
            src={thumbnailUrl} alt={title} />

            <div className='opacity-0 absolute top-0 transition ease-linear duration-350 z-10 visible
                 delay-300 w-full scale-0 group-hover:scale-110 sm:group-hover:-translate-y-[6vw]
                sm:group-hover:translate-x-[2vw] sm:group-hover:opacity-100
                group-hover:opacity-100
            '>
                <img src={thumbnailUrl} alt="Thumbnail" className='
                 cursor-pointer object-cover transition duration shadow-xl rounded-t-md
                w-full h-[12vw]
                ' />
                <div
                className='
                    z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md 
                '
                >
                    <div
                        className='
                            flex flex-row items-center gap-3 
                        '
                        >
                            <div
                             onClick={()=>{router.push(`/watch/${id}`)}}
                             className='cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300 '
                            >
                                <BsFillPlayFill size={30} className='ml-[2.5px]'/>
                            </div>
                            <FavoriteButton movieId={id}/>

                            <div 
                            onClick={()=> openModal(id)}
                            className='cursor-pointer ml-auto group/item w-6 h-6 lg:w-10 lg:h-10 border-2 border-white rounded-full flex justify-center items-center transition hover:border-neutral-300 '>
                                <BiChevronDown  className='text-white group-hover/item:text-neutral-300' size={30}/>
                            </div>
                    </div>
                    <p className='text-green-400 font-semibold mt-1'>
                        New <span className='text-white '>2023</span>
                    </p>

                    <div className='flex flex-row mt-1 gap-2 items-center'>
                        <p className='text-white text-[10px] lg:text-sm'>{duration}</p>
                    </div>
                    <div className='flex flex-row mt-1 gap-2 items-center'>
                        <p className='text-white text-[10px] lg:text-sm'>{genre}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MovieCard
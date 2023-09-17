import React, {useCallback, useEffect, useState} from 'react'
import {AiOutlineClose}  from 'react-icons/ai'

import PlayButton from './PlayButton'
import FavoriteButton from './FavoriteButton'
import useInfoModal from '../hooks/useInfoModal'
import useMovie from '../hooks/useMovie'
import { isEmpty } from 'lodash'


interface InfoModalProps {
    visible?: boolean;
    onClose: any;
}

const InfoModal: React.FC<InfoModalProps> = ({
    visible, onClose
})=>{
    const [isVisible, setIsVisible] = useState<boolean>(!!visible);
    const {movieId} = useInfoModal()
    const {data = {}} = useMovie(movieId as any)
    useEffect(() => {
        setIsVisible(!!visible);
    }, [visible])

    const handleClose = useCallback(()=>{
        setIsVisible(false);
        setTimeout(()=>{
            onClose();
        }, 300)
    },[onClose])

    if(!isVisible){
        return null
    }
    if(isEmpty(data)){
        return (
            <div
                className='
                z-50 transition 
                duration-300
                bg-black
                bg-opacity-80
                flex
                justify-center
                items-center
                overflow-x-hidden
                overflow-y-hidden
                fixed
                inset-0
                '
                >
                    <div 
                    className='
                        relative
                        w-auto
                        mx-auto
                        max-w-xl
                        rounded-md
                        overflow-hidden
                    '
                    >
                        <div 
                        className={`
                            ${isVisible ? 'scale-100' : 'scale-0'}
                            w-[50vw]
                            h-[50vw]
                            transform
                            duration-300
                            relative
                            flex-auto
                            bg-zinc-900
                            drop-shadow-md
                            flex
                            justify-center
                            items-center
                        `}
                        >
                            <div className='spinner'>

                            </div>
                        </div>
                    </div>
                </div>
        )
    }

    return (
        <div
        className='
        z-50 transition 
        duration-300
        bg-black
        bg-opacity-80
        flex
        justify-center
        items-center
        overflow-x-hidden
        overflow-y-hidden
        fixed
        inset-0
        '
        >
        <div 
         className='
            relative
            w-auto
            mx-auto
            max-w-xl
            rounded-md
            overflow-hidden
         '
        >
            <div 
            className={`
                ${isVisible ? 'scale-100' : 'scale-0'}
                transform
                duration-300
                relative
                flex-auto
                bg-zinc-900
                drop-shadow-md
            `}
            >
                <div className='relative h-50'>
                    <video
                    className='
                    w-full
                    brightness-[60%]
                    object-cover
                    h-full
                    ' 
                    autoPlay
                    muted
                    loop
                    poster={data?.thumbnailUrl}
                    src={data?.videoUrl}></video>
                    <div
                    className='
                    cursor-pointer
                    absolute
                    top-3
                    right-3
                    h-10
                    w-10
                    rounded-full
                    bg-black
                    bg-opacity-70
                    flex
                    items-center
                    justify-center
                    text-white
                    transition 
                    hover:text-red-700
                    '
                    onClick={handleClose}
                    >
                        <AiOutlineClose className='' size={20}/>
                    </div>
                    <div className='
                        absolute
                        bottom-[10%]
                        left-10

                    '>
                        <p className='text-white text-3xl md:text-4xl h-full lg:text-5xl font-bold mb-8'>
                            {data?.title}
                        </p>
                        <div className='flex flex-row gap-4 items-center'>
                            <PlayButton movieId={data?.id} />
                            <FavoriteButton movieId={data?.id} />
                        </div>
                    </div>
                </div>
                <div className='px-12 py-8'>
                    <p className='text-green-400 font-semibold text-lg'>
                        New
                    </p>
                    <p className='text-gray-300 font-light text-md' >
                        {data?.duration}
                    </p>
                    <p className='text-gray-300 font-light text-md' >
                        {data?.genre}
                    </p>
                    <p className='text-white text-lg' >
                        {data?.description}
                    </p>

                </div>
            </div>
        </div>

        </div>
    )




}

export default InfoModal
import React, { useState, useCallback } from "react";
import useBillboard from "../hooks/useBillboard";

import  {AiOutlineInfoCircle} from 'react-icons/ai'
import PlayButton from "./PlayButton";
import useInfoModal from "../hooks/useInfoModal";

const Billboard = ()=>{
    const {data} =useBillboard()
    const {openModal} = useInfoModal()
    const handleOpenModal = useCallback(()=>{
        openModal(data?.id)
    }, [openModal, data?.id])



    return(
        <div className="relative sm:h-[56.25vw] h-[70vw] w-full">
            {data ? 
            (<video 
            className="
                w-full
                sm:h-[56.25vw]
                h-[70vw]
                object-cover
                brightness-[60%]
            "
            autoPlay
            muted
            loop
            poster={data?.thumbnailUrl}
            src={data?.videoUrl}
            ></video>) 
            : <div
                className="
                    animate-pulse
                    w-full
                    sm:h-[56.25vw]
                    h-[70vw]
                    flex
                    flex-row
                    items-center
                    justify-start
                    transition
                    "
                >
                    <div className="
                        w-full 
                        sm:h-[56.25vw]
                        h-[70vw]
                        bg-gray-800 
                        flex
                        flex-row
                        items-center
                        justify-start
                        ">
                        <div className="absolute top-[35%] md:top-[40%] ml-4 md:md-16 
                        h-[2rem] 
                        w-full 
                        ">
                            <div className="
                            h-[2rem] 
                            w-[30%] 
                            md:h-[3rem]
                            lg:mt-4
                            drop-shadow-sm
                            bg-slate-700 
                            rounded
                            mt-1
                            ">
                            </div>
                            <div className="
                                h-[2rem] 
                                w-[70%] 
                                md:h-[3rem]
                                lg:mt-4
                                drop-shadow-sm
                                bg-slate-700 
                                rounded
                                mt-2
                            ">
                            </div>
                            
                            <div className="flex flex-row items-center mt-2 md:mt-4 gap-3 
                                    h-[1.7rem] 
                                    w-[5.5rem]
                                    md:h-[3rem] 
                                    lg:mt-4
                                    drop-shadow-sm
                                    bg-slate-700 
                                    rounded">
                            </div>

                        </div>
                    </div>
                </div>}
            <div className="absolute top-[35%] md:top-[40%] ml-4 md:md-16">
                <p className="
                text-white 
                text-2xl 
                md:text-5xl 
                h-full 
                w-[50%] 
                lg:text-6xl 
                font-bold 
                drop-shadow-xl
                ">
                  {data?.title}  
                </p>
                <p className="
                    text-white
                    text-[10px]
                    md:text-lg
                    mt-3
                    md:mt-8
                    w-[90%]
                    md:w-[80%]
                    lg:w-[50%]
                    drop-shadow-xl
                 ">
                    {data?.description}
                </p>
                
                { data && (<div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
                    <PlayButton movieId={data?.id} />
                    <button className="
                        bg-white
                        text-white
                        bg-opacity-30
                        rounded-md
                        py-1 md:py-2
                        px-2 md:px-4
                        w-auto
                        text-xs md:text-sm lg:text-lg
                        font-semibold
                        flex
                        flex-row
                        items-center
                        hover:bg-opacity-20
                        transition
                    "
                    onClick={handleOpenModal}
                    >
                        More Info
                        <AiOutlineInfoCircle 
                        size={20}
                        className="ml-1"/>
                    </button>
                </div>)}

            </div>
        </div>
    )
}
export default Billboard


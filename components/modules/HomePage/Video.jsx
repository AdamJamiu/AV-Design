import { Player } from 'video-react';
import { useState } from 'react';
import videoData from './data';
import Image from 'next/image';
import local from "../../../public/local1.png"


function VideoPlayer() {
    return (
        <div className='flex flex-col relative mb-28 pl-5 items-center justify-center w-[100%]'>
            <div className='sm:w-[96vw] mb-28 h-screen'>
                <Player
                    poster="../../../public/amapainoImage.png"
                    playsInline
                    src="https://www.youtube.com/watch?v=wwQeSdCyL6c"

                />

                <div className='w-[30%] absolute top-[25em] left-40'>
                    <h1 className='text-5xl text-white font-bold w-[100%]'>The Faith of a Christian Sister</h1>
                    <div className='flex flex-row justify-betwe gap-5 mt-10 items-center'>
                        <div className='bg-blackTransparent rounded-md p-3 cursor-pointer'>
                            <p className='text-md text-white font-bold'>Watch Now</p>
                        </div>
                        <div className='bg-blackTransparent rounded-md p-3 cursor-pointer'>
                            <p className='text-md text-white font-bold'>Watch Later</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default VideoPlayer;
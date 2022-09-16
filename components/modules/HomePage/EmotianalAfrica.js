import Image from 'next/image'
import local1 from "../../../public/local1.png"
import local2 from "../../../public/local2.png"
import local3 from "../../../public/local3.png"
import local4 from "../../../public/black.jpg"
import local5 from "../../../public/local5.jpg"
import local7 from "../../../public/local7.jpg"
import local6 from "../../../public/chief.jpg"


function EmotionalAfricaMovies() {
    return (

        <div className='font-[Poppins] flex flex-row flex-wrap gap-1 sm:gap-4'>
            <div className='flex flex-col cursor-pointer'>
                <Image className='rounded-md' src={local7} alt="movies" width={220} height={340} />
                <h1 className='text-white mt-3'>Black Panter</h1>
            </div>
            <div className='flex flex-col'>
                <Image src={local1} alt="movies" className='rounded-md' width={220} height={340} />
                <h1 className='text-white mt-3'>Black Panter</h1>
            </div>
            <div className='flex flex-col'>
                <Image src={local2} className='rounded-md' alt="movies" width={220} height={340} />
                <h1 className='text-white mt-3'>Black Panter</h1>
            </div>
            <div className='flex flex-col'>
                <Image src={local3} alt="movies" className='rounded-md' width={220} height={340} />
                <h1 className='text-white mt-3'>Black Panter</h1>
            </div>
            <div className='flex flex-col'>
                <Image src={local4} alt="movies" width={220} height={340} className='rounded-md' />
                <h1 className='text-white mt-3'>Black Panter</h1>
            </div>
            <div className='flex flex-col'>
                <Image src={local5} alt="movies" width={220} height={340} className='rounded-md' />
                <h1 className='text-white mt-3'>Black Panter</h1>
            </div>
            <div className='flex flex-col'>
                <Image src={local6} alt="movies" width={220} height={340} className='rounded-md' />
                <h1 className='text-white mt-3'>Black Panter</h1>
            </div>
            <div className='flex flex-col'>
                <Image src={local7} alt="movies" width={220} height={340} className='rounded-md' />
                <h1 className='text-white mt-3'>Black Panter</h1>
            </div>
            <div className='flex flex-col'>
                <Image src={local1} alt="movies" width={220} height={340} className='rounded-md' />
                <h1 className='text-white mt-3'>Black Panter</h1>
            </div>
            <div className='flex flex-col'>
                <Image src={local2} alt="movies" width={220} height={340} className='rounded-md' />
                <h1 className='text-white mt-3'>Black Panter</h1>
            </div>
            <div className='flex flex-col'>
                <Image src={local3} alt="movies" width={220} height={340} className='rounded-md' />
                <h1 className='text-white mt-3'>Black Panter</h1>
            </div>
            <div className='flex flex-col'>
                <Image src={local4} alt="movies" width={220} height={340} className='rounded-md' />
                <h1 className='text-white mt-3'>Black Panter</h1>
            </div>
            <div className='flex flex-col'>
                <Image src={local5} alt="movies" width={220} height={340} className='rounded-md' />
                <h1 className='text-white mt-3'>Black Panter</h1>
            </div>
            <div className='flex flex-col'>
                <Image src={local6} alt="movies" width={220} height={340} className='rounded-md' />
                <h1 className='text-white mt-3'>Black Panter</h1>
            </div>
            <div className='flex flex-col'>
                <Image src={local7} alt="movies" width={220} height={340} className='rounded-md' />
                <h1 className='text-white mt-3'>Black Panter</h1>
            </div>

        </div>
    )
}

export default EmotionalAfricaMovies;
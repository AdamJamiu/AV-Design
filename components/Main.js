import Image from 'next/image';
import Navbar from './navigations/Navbar';
import stack from "../public/assets/images/Stack.svg";
import copy from "../public/assets/images/Copy.svg";
import archive from "../public/assets/images/archive.svg";
import pentool from "../public/assets/images/Pen Tool.svg";
import Group15 from "../public/assets/images/Group15.png";
import Group25 from "../public/assets/images/Group 25.png";
import Group28 from "../public/assets/images/Group 28.png";
import Group42 from "../public/assets/images/Group 42.png";
import OverallSummary from './elements/Tables/OverallSum';
import MyRecentDesigns from './elements/Tables/MyRecentDes';


const Main = () => {
    return (
        <>
            <div className='flex flex-wrap flex-row items-center w-full gap-x-3 my-7'>

                {/* My projects */}
                <div className='hover:scale-110 w-[255px] bg-[rgba(242,48,48,0.25)] py-3 px-5 rounded-lg shadow-md'>
                    <div className=' flex-1 flex flex-row items-center w-full justify-between mb-2'>
                        <p className='font-bold text-[#0E0E2C]'>My Projects</p>
                        <Image className='text-[rgba(242,48,48,0.5)]' src={stack} width={30} height={30} />
                    </div>
                    <Image className='text-[rgba(242,48,48,0.5)]' src={Group42} width={35} height={35} />

                </div>
                {/* proposal */}

                <div className='hover:scale-110 w-[255px] bg-[rgba(141,8,245,0.25)] py-3 px-5 rounded-lg shadow-md'>
                    <div className='  flex-1 flex flex-row items-center w-full justify-between mb-2'>
                        <p className='font-bold text-[#0E0E2C]'>My Projects</p>
                        <Image className='text-[rgba(242,48,48,0.5)]' src={copy} width={30} height={30} />
                    </div>
                    <Image className='text-[rgba(242,48,48,0.5)]' src={Group25} width={35} height={35} />

                </div>

                {/* My designs */}

                <div className='hover:scale-110 w-[255px] bg-[rgba(61,191,145,0.25)] py-3 px-5 rounded-lg shadow-md'>
                    <div className='flex-1 flex flex-row items-center w-full justify-between mb-2'>
                        <p className='font-bold text-[#0E0E2C]'>My Projects</p>
                        <Image className='text-[rgba(242,48,48,0.5)]' src={archive} width={30} height={30} />
                    </div>
                    <Image className='text-[rgba(242,48,48,0.5)]' src={Group15} width={35} height={35} />

                </div>
                {/* My drawings */}

                <div className='hover:scale-110 w-[255px] bg-[rgba(255,102,0,0.25)] py-3 px-5 rounded-lg shadow-md'>
                    <div className='  flex-1 flex flex-row items-center w-full justify-between mb-2'>
                        <p className='font-bold text-[#0E0E2C] '>My Projects</p>
                        <Image className='text-[rgba(242,48,48,0.5)]' src={pentool} width={30} height={30} />
                    </div>
                    <Image className='text-[rgba(242,48,48,0.5)]' src={Group28} width={35} height={35} />

                </div>

            </div>

            {/* Tables */}
            <div className='flex flex-row justify-between items-center gap-x-5'>
                <OverallSummary />
                <MyRecentDesigns />
            </div>
        </>
    )
}

export default Main;
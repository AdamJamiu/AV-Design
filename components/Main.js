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
import RecentProjects from './elements/Tables/RecentProject';
import RecentProposals from './elements/Tables/RecentProposals';


const Main = () => {
    return (
        <div className='pb-4 h-[max-content]'>
            <div className='wrapper flex-wrap flex mobile:mb-10 mobile:flex-row flex-col justify-between items-center w-full gap-x-3 gap-y-5 mb-[5em] mt-7'>

                {/* My projects */}
                <div className='flex-1 cursor-pointer hover:scale-110 w-[100%] transition-all hover:transition-all bg-[rgba(242,48,48,0.25)] py-3 px-5 rounded-lg shadow-md'>
                    <div className=' flex flex-row items-center w-full justify-between mb-2'>
                        <p className='font-bold  text-[#0E0E2C]'>My Projects</p>
                        <Image className='text-[rgba(242,48,48,0.5)]' src={stack} width={30} height={30} />
                    </div>
                    <Image className='text-[rgba(242,48,48,0.5)]' src={Group42} width={35} height={35} />

                </div>
                {/* proposal */}

                <div className='flex-1 w-[100%] transition-all cursor-pointer hover:transition-all hover:scale-110 bg-[rgba(141,8,245,0.25)] py-3 px-5 rounded-lg shadow-md'>
                    <div className='flex flex-row items-center w-full justify-between mb-2'>
                        <p className='font-bold text-[#0E0E2C]'>My Proposals</p>
                        <Image className='text-[rgba(242,48,48,0.5)]' src={copy} width={30} height={30} />
                    </div>
                    <Image className='text-[rgba(242,48,48,0.5)]' src={Group25} width={35} height={35} />

                </div>

                {/* My designs */}

                <div className='flex-1 w-[100%] hover:scale-110 cursor-pointer transition-all hover:transition-all bg-[rgba(61,191,145,0.25)] py-3 px-5 rounded-lg shadow-md'>
                    <div className='flex flex-row items-center w-full justify-between mb-2'>
                        <p className='font-bold text-[#0E0E2C]'>My Designs</p>
                        <Image className='text-[rgba(242,48,48,0.5)]' src={archive} width={30} height={30} />
                    </div>
                    <Image className='text-[rgba(242,48,48,0.5)]' src={Group15} width={35} height={35} />

                </div>
                {/* My drawings */}

                <div className='flex-1 w-[100%] hover:scale-110 transition-all cursor-pointer hover:transition-all bg-[rgba(255,102,0,0.25)] py-3 px-5 rounded-lg shadow-md'>
                    <div className='flex flex-row items-center w-full justify-between mb-2'>
                        <p className='font-bold text-[#0E0E2C] '>My Drawings</p>
                        <Image className='text-[rgba(242,48,48,0.5)]' src={pentool} width={30} height={30} />
                    </div>
                    <Image className='text-[rgba(242,48,48,0.5)]' src={Group28} width={35} height={35} />

                </div>

            </div>

            {/* Tables */}
            <div className='flex flex-row flex-wrap justify-between items-stretch gap-5'>
                <OverallSummary />
                <MyRecentDesigns />
            </div>

            {/* second line table */}
            <div className='flex flex-row flex-wrap justify-between items-stretch gap-y-5 gap-5 mb-10 mt-10'>
                <RecentProjects />
                <RecentProposals />
            </div>

        </div>
    )
}

export default Main;
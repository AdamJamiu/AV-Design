import Image from 'next/image';
import React from 'react'
import AVlogo from "../../public/assets/images/AV DESIGNER.svg";
import dashIcon from "../../public/assets/images/dashboard.svg";
import clients from "../../public/assets/images/clients.svg";
import profile from "../../public/assets/images/profile.svg";
import contacts from "../../public/assets/images/contacts.svg";
import proposal from "../../public/assets/images/proposal.svg";
import stack from "../../public/assets/images/stack2.svg";
import book from "../../public/assets/images/book-open.svg";
import play from "../../public/assets/images/play.svg";
import sun from "../../public/assets/images/Sun.svg";
import dark from "../../public/assets/images/Dark mode.svg";

import { useState } from 'react';


const ResponsiveSidebar = () => {
    const [active, setActive] = useState("dashboard");

    return (
        <div className='w-[250px] h-full overflow-auto rounded flex flex-col items-center bgBlack'>

            <div className='px-7 w-full overflow-auto'>

                <div className='pb-7 pt-[3em]'>
                    <Image alt="logo" src={AVlogo} width={151} height={34} />
                </div>

                <div className='flex flex-col flex-nowrap'>

                    <div onClick={() => setActive("dashboard")} className={`${active === 'dashboard' ? 'bg-activeBg' : 'bg-silverBg'} gap-x-2 mb-6 cursor-pointer rounded py-3 px-5 flex flex-row justify-start items-center`}>
                        <Image alt="logo" src={dashIcon} width={25} height={25} />
                        <p className='text-white text-sm'>Dashboard</p>
                    </div>

                    <div onClick={() => setActive("create-project")} className={`${active === 'create-project' ? 'bg-activeBg' : 'bg-silverBg'} gap-x-2 mb-6 cursor-pointer rounded py-3 px-5 flex flex-row justify-start items-center`}>
                        <Image alt="logo" src={profile} width={25} height={25} />
                        <p className='text-white text-sm'>Create Project</p>
                    </div>

                    <div onClick={() => setActive("all-projects")} className={`${active === 'all-projects' ? 'bg-activeBg' : 'bg-silverBg'} gap-x-2 mb-6 cursor-pointer rounded py-3 px-5 flex flex-row justify-start items-center`}>
                        <Image alt="logo" src={stack} width={25} height={25} />
                        <p className='text-white text-sm'>All Projects</p>
                    </div>

                    <div onClick={() => setActive("proposals")} className={`${active === 'proposals' ? 'bg-activeBg' : 'bg-silverBg'} gap-x-2 mb-6 cursor-pointer rounded py-3 px-5 flex flex-row justify-start items-center`}>
                        <Image alt="logo" src={proposal} width={25} height={25} />
                        <p className='text-white text-sm'>Proposals</p>
                    </div>

                    <div onClick={() => setActive("clients")} className={`${active === 'clients' ? 'bg-activeBg' : 'bg-silverBg'} gap-x-2 mb-6 cursor-pointer rounded py-3 px-5 flex flex-row justify-start items-center`}>
                        <Image alt="logo" src={clients} width={25} height={25} />
                        <p className='text-white text-sm'>Clients</p>
                    </div>

                    <div onClick={() => setActive("all-contacts")} className={`${active === 'all-contacts' ? 'bg-activeBg' : 'bg-silverBg'} gap-x-2 mb-6 cursor-pointer rounded py-3 px-5 flex flex-row justify-start items-center`}>
                        <Image alt="logo" src={contacts} width={25} height={25} />
                        <p className='text-white text-sm'>All Contacts</p>
                    </div>

                </div>

                <hr className='mt-[5em] mb-[4em] w-[150px] bg-silverBg' />

                <div className='w-[max-content] gap-x-2 mb-6 cursor-pointer px-5 flex flex-row justify-start items-center'>
                    <Image alt="logo" src={book} width={20} height={20} />
                    <p className='text-white text-sm'>Learn AV Designer</p>
                </div>

                <div className='w-[max-content] gap-x-2 mb-6 cursor-pointer px-5 flex flex-row justify-start items-center'>
                    <Image alt="logo" src={play} width={15} height={15} />
                    <p className='text-white text-sm'>Tutorials</p>
                </div>

                <p className='mb-3 cursor-pointer text-white text-md'>Need Help?</p>

                <p className='w-[max-content] mb-3 cursor-pointer text-silverText text-md'>Get Support/Feedback</p>

                <div className=' gap-x-2 mb-6 cursor-pointer py-5 flex flex-row justify-center items-center'>
                    <Image alt="logo" src={sun} width={30} height={30} />
                    <Image alt="logo" src={dark} width={60} height={30} />

                </div>

            </div>
        </div>
    )
}

export default ResponsiveSidebar;
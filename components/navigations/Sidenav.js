import Image from 'next/image';
import React from 'react'
import AVlogo from "../../public/assets/images/AV DESIGNER.svg";
import dashIcon from "../../public/assets/images/dashboard.svg";
import clients from "../../public/assets/images/clients.svg";
import profile from "../../public/assets/images/profile.svg";
import contacts from "../../public/assets/images/contacts.svg";
import proposal from "../../public/assets/images/proposal.svg";
import stack from "../../public/assets/images/stack.svg";
import book from "../../public/assets/images/book-open.svg";
import play from "../../public/assets/images/play.svg";
import sun from "../../public/assets/images/Sun.svg";
import dark from "../../public/assets/images/Dark mode.svg";

import { useState } from 'react';


const SideNav = () => {
    const [active, setActive] = useState("dashboard");

    return (
        
            <div className='px-7 w-full overflow-y-scroll'>

                <div className=''>
                    <Image src={AVlogo} alt="logo" width={200} height={100} />
                </div>

                <div>


                    <div onClick={() => setActive("dashboard")} className={`${active === 'dashboard' ? 'bg-activeBg' : 'bg-silverBg'} gap-x-2 mb-6 cursor-pointer rounded py-3 px-5 flex flex-row justify-start items-center`}>
                        <Image src={dashIcon} width={30} height={30} />
                        <p className='text-white text-x'>Dashboard</p>
                    </div>

                    <div onClick={() => setActive("create-project")} className={`${active === 'create-project' ? 'bg-activeBg' : 'bg-silverBg'} gap-x-2 mb-6 cursor-pointer rounded py-3 px-5 flex flex-row justify-start items-center`}>
                        <Image src={profile} width={30} height={30} />
                        <p className='text-white text-x'>Create Project</p>
                    </div>

                    <div onClick={() => setActive("all-projects")} className={`${active === 'all-projects' ? 'bg-activeBg' : 'bg-silverBg'} gap-x-2 mb-6 cursor-pointer rounded py-3 px-5 flex flex-row justify-start items-center`}>
                        <Image src={stack} width={30} height={30} />
                        <p className='text-white text-x'>All Projects</p>
                    </div>

                    <div onClick={() => setActive("proposals")} className={`${active === 'proposals' ? 'bg-activeBg' : 'bg-silverBg'} gap-x-2 mb-6 cursor-pointer rounded py-3 px-5 flex flex-row justify-start items-center`}>
                        <Image src={proposal} width={30} height={30} />
                        <p className='text-white text-x'>Proposals</p>
                    </div>

                    <div onClick={() => setActive("clients")} className={`${active === 'clients' ? 'bg-activeBg' : 'bg-silverBg'} gap-x-2 mb-6 cursor-pointer rounded py-3 px-5 flex flex-row justify-start items-center`}>
                        <Image src={clients} width={30} height={30} />
                        <p className='text-white text-x'>Clients</p>
                    </div>

                    <div onClick={() => setActive("all-contacts")} className={`${active === 'all-contacts' ? 'bg-activeBg' : 'bg-silverBg'} gap-x-2 mb-6 cursor-pointer rounded py-3 px-5 flex flex-row justify-start items-center`}>
                        <Image src={contacts} width={30} height={30} />
                        <p className='text-white text-x'>All Contacts</p>
                    </div>

                </div>

                <hr className='mt-[10em] mb-[4em] w-[150px] bg-silverBg' />

                <div className=' gap-x-2 mb-6 cursor-pointer px-5 flex flex-row justify-start items-center'>
                    <Image src={book} width={20} height={20} />
                    <p className='text-white text-x'>Learn AV Designer</p>
                </div>

                <div className=' gap-x-2 mb-6 cursor-pointer px-5 flex flex-row justify-start items-center'>
                    <Image src={play} width={20} height={20} />
                    <p className='text-white text-x'>Tutorials</p>
                </div>

                <p className='mb-3 cursor-pointer text-white text-x'>Need Help?</p>


                <p className='mb-3 cursor-pointer text-silverText text-x'>Get Support/Feedback</p>


                <div className=' gap-x-2 mb-6 cursor-pointer py-5 flex flex-row justify-center items-center'>
                    <Image src={sun} width={30} height={45} />
                    <Image src={dark} width={60} height={50} />

                </div>

            </div>
    )
}

export default SideNav;
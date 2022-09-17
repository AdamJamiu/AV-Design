import React from 'react';
import Head from 'next/head';
import SideNav from '../components/navigations/Sidenav';
import Main from '../components/Main';
import Navbar from '../components/navigations/Navbar';

export default function Home() {

  const [isResponsive, setIsResponsive] = React.useState(false)

  return (
    <div>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="AV Designer sample dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid-container">

        <div className='sidenav w-[250px] h-full fixed left-0 top-0 z-10 rounded flex flex-col items-center bgBlack'>
          <SideNav />
        </div>

        <div className='py-[2em] px-[1em] w-[100%] bg-[#E8E8E8] laptop:ml-[251px] ml-0'>
          <Navbar setIsResponsive={setIsResponsive} />
          <Main />
        </div>
      </div>

    </div>
  )
}

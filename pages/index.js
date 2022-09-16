import Head from 'next/head';
import SideNav from '../components/navigations/Sidenav';
import Main from '../components/Main';
import Navbar from '../components/navigations/Navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="AV Designer sample dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid-container">

        <div className='sidenav w-[300px] h-full rounded left-0 top-0  flex flex-col items-center bgBlack'>
          <SideNav />
        </div>

        <div className='main'>
          <Navbar />
          <Main />
        </div>
      </div>

    </div>
  )
}

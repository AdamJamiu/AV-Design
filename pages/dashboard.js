import Head from 'next/head';
import SideNav from '../components/navigations/Sidenav';
import Main from '../components/Main';
import Navbar from '../components/navigations/Navbar';

export default function Dasboard() {
    return (
        <div>
            <Head>
                <title>Dashboard</title>
                <meta name="description" content="AV Designer sample dashboard" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <SideNav />

            <div className="grid-container">
                <div className='main'>
                    <Navbar />

                    <div className='main-grid'>

                        <div className='item1'>
                            <h1>Hello world</h1>
                        </div>

                        <div className='item2'>
                            <h1>Hello world</h1>
                        </div>

                        <div className='item3'>
                            <h1>Hello world</h1>

                        </div>

                    </div>
                </div>

            </div>

        </div >
    )
}

import { useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import userIcon from "../../../public/assets/images/userIcon.svg";
// import Chart from "react-google-charts";
import chartline from "../../../public/Vector.png";
import watchLaterIcon from "../../../public/assets/images/watch.svg"
import WatchLater from "../../elements/WatchLater";
import RecentlyPlayed from "../../elements/RecentlyPlayed";


const Home = () => {
  const [isHome, setIsHome] = useState('HOME');

  return <>  {isHome === 'HOME' && <HomeSection isHome setIsHome={setIsHome} />}
    {isHome === 'WATCH' && <WatchLater setIsHome={setIsHome} />}
    {isHome === 'RECENTLY' && <RecentlyPlayed setIsHome={setIsHome} />}

  </>

};

function HomeSection({ isHome, setIsHome }) {
  const data = [
    ["Year", "Sales", "Expenses"],
    ["2004", 1000, 400],
    ["2005", 1170, 460],
    ["2006", 660, 1120],
    ["2007", 1030, 540]
  ];
  const { user } = useSelector((state) => state.loggedReducer);
  return (

    <div className="">
      {/* User */}
      <h1 className="font-bold text-2xl">{`Hi, ${user.name}`}</h1>
      {/* Plan */}
      <div className="w-full flex flex-row flex-wrap gap-16 items-stretch py-10 justify-start">
        {/* Cards */}
        <div className="w-96 text-white bg-[#07092C] bg-snakeBg bg-no-repeat bg-bottom p-10 rounded-lg justify-between align-center">
          <div className="flex mb-5 flex-row justify-between align-center">
            <h1 className="font-bold">Current Plan</h1>
            <p className="">Kids</p>
          </div>
          <h1 className="font-bold">N2500</h1>
        </div>

        <div className="bg-[#492406] bg-snakeBg bg-no-repeat bg-bottom w-96 text-white p-10 rounded-lg">
          <div className="flex mb-5 flex-row  justify-between align-center">
            <h1 className="font-bold">Current Plan</h1>
            <p>Kids</p>
          </div>
          <h1 className="font-bold">N2500</h1>
        </div>

      </div>

      <div className="flex flex-wrap w-full mt-5 flex-row gap-10">
        <div className="w-[450px] mb-10 sm:mb-0">
          <h1 className="mb-6 text-xl font-bold">Premium</h1>

          <div className="bg-white w-[450px] mb-10 py-10 px-2 shadow-lg rounded-xl">
            <div className="flex flex-row px-5 items-center gap-10">
              <Image
                src={userIcon}
                alt={"userIcon"}
                width={50}
                height={50} />

              <div className="w-max">
                <span className="text-lg font-bold">2</span>
                <p className="text-lg">Active Users</p>
              </div>
            </div>

            <div className="w-full mt-5">
              <Image width={400} height={100} alt="chartline" src={chartline} />
            </div>
          </div>
        </div>

        <div className="w-[450px]">
          <h1 className="mb-5 text-xl font-bold" >My Library</h1>

          <div className="p-5 rounded-lg bg-[#E5E5E5]">

            <div onClick={() => setIsHome('WATCH')} className="flex flex-row gap-3 p-3 rounded-lg hover:cursor-pointer hover:bg-white items-center">
              <Image src={watchLaterIcon} width="50px" height="50px" alt="Recently Played Icon" />
              <h1 className="font-medium">Watch Later</h1>
            </div>

            <div onClick={() => setIsHome('RECENTLY')} className="flex flex-row gap-3 p-3 rounded-lg hover:cursor-pointer hover:bg-white items-center">
              <Image src={watchLaterIcon} width="50px" height="50px" alt="watchLater Icon" />
              <h1 className="font-medium">Recently Played</h1>
            </div>


            <div className="flex flex-row gap-3 p-3 rounded-lg hover:cursor-pointer hover:bg-white items-center">
              <Image src={watchLaterIcon} width="50px" height="50px" alt="watchLater Icon" />
              <h1 className="font-medium">Recently Played</h1>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
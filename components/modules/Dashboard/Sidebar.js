import SidebarItem from "../../elements/Dashboard/SidebarItem";
import { RiHomeSmile2Fill, RiSettingsFill } from "react-icons/ri";
import { AiFillCreditCard } from "react-icons/ai";
import { FiActivity } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import logo from "../../../public/assets/images/logo.png";
import { IoIosMenu } from "react-icons/io";
import {
  home,
  billing,
  activities,
  settings,
} from "../../../store/actions/section";
import Link from "next/link";
import Image from "next/image";
import { setClose } from "../../../store/actions/isSidebar";


const Sidebar = () => {
  const currentSection = useSelector((state) => state.sectionReducer);
  const isSidebarOpen = useSelector((state) => state.sidebarReducer);
  const dispatch = useDispatch();

  // Function to dispatch side responsive actions

  const handleClose = () => {
    dispatch(setClose());
  }


  // Functions to dispatch sidebar section actions
  const homeClick = () => {
    dispatch(home());
  };

  const billingClick = () => {
    dispatch(billing());
  };

  const activitiesClick = () => {
    dispatch(activities());
  };

  const settingsClick = () => {
    dispatch(settings())
  };

  return (
    <div className={`${isSidebarOpen === "open" ? "left-0 items-start justify-start" : "left-[-180px]"} euclid-circular duration-100 ease pt-7 h-[100vh] gap-5 bg-white pl-5 flex fixed left-0 top-0 z-[70] md:top-20 w-52 md:z-[30] md:left-0 flex-col`}>
      <div className="flex flex-row gap-5 md:hidden items-center">
        <IoIosMenu onClick={handleClose} size={30} className="cursor-pointer" />
        <Image src={logo} width={110} height={20} alt="logo" />
      </div>
      <Link href={"/dashboard"} passHref>
        <SidebarItem
          // Todo: implement this!
          className={`${isSidebarOpen === "open" ? "bg" : "bg"}`}

          onClick={() => { homeClick(); handleClose() }}
          customStyle={`row-start-2 group ${currentSection === "home" ? "bg-gray-50" : ""
            }`}
          text="Home"
          textCustomStyle={`${currentSection === "home" ? "text-[#07092C]" : "text-gray-500"
            }`}
        >
          <RiHomeSmile2Fill
            className={`text-2xl group-hover:text-[#07092C] ${currentSection === "home" ? "text-[#060825]" : "text-gray-500 "
              }`}
          />
        </SidebarItem>
      </Link>

      <Link href={"/dashboard/billing"} passHref>
        <SidebarItem
          onClick={() => { billingClick(); handleClose() }}
          customStyle={`row-start-2 group ${currentSection === "billing" ? "bg-gray-50" : ""
            }`}
          text="Billing"
          textCustomStyle={`${currentSection === "billing" ? "text-[#07092C]" : "text-gray-500"
            }`}
        >
          <AiFillCreditCard
            className={`text-2xl group-hover:text-[#07092C] ${currentSection === "billing" ? "text-[#060825]" : "text-gray-500"
              }`}
          />
        </SidebarItem>
      </Link>

      <Link href={"/dashboard/activities"} passHref>
        <SidebarItem
          onClick={() => { activitiesClick(); handleClose() }}
          customStyle={`row-start-2 group ${currentSection === "activities" ? "bg-gray-50" : ""
            }`}
          text="Activities"
          textCustomStyle={`${currentSection === "activities" ? "text-[#07092C]" : "text-gray-500"
            }`}
        >
          <FiActivity
            className={`text-2xl group-hover:text-[#07092C] ${currentSection === "activities"
              ? "text-[#060825]"
              : "text-gray-500"
              }`}
          />
        </SidebarItem>
      </Link>

      <Link href={"/dashboard/settings"} passHref>
        <SidebarItem

          onClick={() => { settingsClick(); handleClose() }}
          customStyle={`group ${currentSection === "settings" ? "bg-gray-50" : ""
            }`}
          text="Settings"
          textCustomStyle={`${currentSection === "settings" ? "text-[#07092C]" : "text-gray-500"
            }`}
        >
          <RiSettingsFill
            className={`text-2xl group-hover:text-[#07092C] ${currentSection === "settings" ? "text-[#060825]" : "text-gray-500"
              }`}
          />
        </SidebarItem>
      </Link>
    </div>
  );
};

export default Sidebar;

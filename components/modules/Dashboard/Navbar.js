// Navbar for landing page layout
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import logo from "../../../public/assets/images/logo.png";
import { IoMdNotificationsOutline, IoIosMenu } from "react-icons/io";
import NotifyDropDown from "../../elements/Dropdown/Notifications";
import ProfileDropDown from "../../elements/Dropdown/Profile";
import SignOutModal from "../../elements/Modal/SignOut";
import Link from "next/link";
import { setOpen } from "../../../store/actions/isSidebar";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [isState, setIsState] = useState(false);
  const [isSignOut, setIsSignOut] = useState(false);
  const { user } = useSelector((state) => state.loggedReducer);
  const dispatch = useDispatch();

  // Function to dispatch side responsive actions
  const handleOpen = () => {
    dispatch(setOpen());
  }

  return (
    <div className="fixed w-[100%] left-0 font-['Poppins'] z-[40] top-0 bg-white px-10">
      <div className="flex items-center justify-between py-5">
        <div className='flex flex-row gap-5 items-center'>
          <IoIosMenu onClick={handleOpen} size={30} className="block md:hidden cursor-pointer" />
          <Link href="/" passHref >
            <Image src={logo} alt="Afrik Web Logo" unoptimized className='cursor-pointer' />
          </Link>
        </div>
        <div className="flex items-center space-x-6">
          <div>
            <IoMdNotificationsOutline onClick={() => setIsState(isState => false)} className="text-4xl cursor-pointer" />
          </div>
          <div className="">
            <Image
              className="rounded-lg cursor-pointer"
              src={user.avatar}
              alt={"profile-pic"}
              width={40}
              height={40}
              onClick={() => { setIsActive(false); setIsState(isState => !isState) }} />
          </div>
        </div>
        {isActive ? <NotifyDropDown isActive setIsActive={setIsActive} /> : null}
        {isState ? <ProfileDropDown isState setIsState={setIsState} setIsSignOut={setIsSignOut} /> : null}
        {isSignOut ? <SignOutModal isSignOut setIsSignOut={setIsSignOut} /> : null}
      </div>
    </div>
  );
}

export default Navbar;

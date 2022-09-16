import React from "react";
import arrow from "../../../public/assets/images/arrow.svg"
import Image from "next/image";
import { useRouter } from "next/router";
import contact from "../../../public/assets/images/contact.png"
import arrowRight from "../../../public/assets/images/arrowRight.svg"
import { useState } from "react";
import ChangePasswordModal from "../../elements/Modal/ChangePassword";
import ParentalControl from "../../elements/ParentControl";
import AccountSettings from "../../AccountSettings";

const Settings = () => {
  const initial = "accountSetting";
  const [isOption, setIsOption] = useState(initial);
  const router = useRouter();
  return (
    <div className="flex flex-row sm:flex-nowrap flex-wrap">

      <div className="pr-5">

        <div className="mb-10 flex flex-row gap-2 items-center ">
          <Image src={arrow} onClick={() => { router.back() }} className="cursor-pointer" alt="arrow" width="25px" height="25px" />
          <p className="text-xl font-bold">Settings</p>
        </div>

        <div className="mb-10 w-96 text-white bg-[#07092C] p-8 rounded-lg justify-between align-center">
          <h1 className=" mb-5 font-bold text-lg"> Premium Subscribtion</h1>
          <p className="mb-8 font-thin">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
          <div className="w-full bg-white rounded-lg text-[#07092C] py-3 cursor-pointer text-center font-bold text-lg">Change Plan</div>
        </div>

        {/* Account settings link */}
        <div className="mb-5 flex flex-row flex-nowrap cursor-pointer justify-between border-b-2 pb-4 items-center hover:opacity-100 opacity-80">

          <div className="flex flex-row items-center gap-5">

            <div>
              <Image src={contact} width="40px" height="40px" alt="contact" />
            </div>

            <div>
              <h1 className="font-bold">Account Settings</h1>
              <p className="font-thin text-sm">Personal Information, Email</p>
            </div>

          </div>

          <div>
            <Image src={arrowRight} width="20px" height="20px" alt="arrow right" />
          </div>
        </div>
        {/* Account settings link */}
        <div className="mb-5 flex flex-row flex-nowrap cursor-pointer justify-between border-b-2 pb-4 items-center hover:opacity-100 opacity-80">

          <div className="flex flex-row items-center gap-5">

            <div>
              <Image src={contact} width="40px" height="40px" alt="contact" />
            </div>

            <div>
              <h1 className="font-bold">Account Settings</h1>
              <p className="font-thin text-sm">Personal Information, Email</p>
            </div>

          </div>

          <div>
            <Image src={arrowRight} width="20px" height="20px" alt="arrow right" />
          </div>
        </div>
        {/* Account settings link */}
        <div className="mb-5 flex flex-row flex-nowrap cursor-pointer justify-between border-b-2 pb-4 items-center hover:opacity-100 opacity-80">

          <div onClick={() => setIsOption(initial)} className="flex flex-row items-center gap-5">

            <div>
              <Image src={contact} width="40px" height="40px" alt="contact" />
            </div>

            <div>
              <h1 className="font-bold">Account Settings</h1>
              <p className="font-thin text-sm">Personal Information, Email</p>
            </div>

          </div>

          <div>
            <Image src={arrowRight} width="20px" height="20px" alt="arrow right" />
          </div>
        </div>
        {/* Account settings link */}
        <div className="mb-5 flex flex-row flex-nowrap cursor-pointer justify-between border-b-2 pb-4 items-center hover:opacity-100 opacity-80">

          <div onClick={() => setIsOption("parental")} className="flex flex-row items-center gap-5">

            <div>
              <Image src={contact} width="40px" height="40px" alt="contact" />
            </div>

            <div>
              <h1 className="font-bold">Parental Controls</h1>
              <p className="font-thin text-sm">Manage signed-in profiles</p>
            </div>

          </div>

          <div>
            <Image src={arrowRight} width="20px" height="20px" alt="arrow right" />
          </div>
        </div>
        {/* Account settings link */}
        <div className="mb-5 flex flex-row flex-nowrap cursor-pointer justify-between items-center hover:opacity-100 opacity-80">

          <div className="flex flex-row items-center gap-5">

            <div>
              <Image src={contact} width="40px" height="40px" alt="contact" />
            </div>

            <div>
              <h1 className="font-bold">Account Settings</h1>
              <p className="font-thin text-sm">Personal Information, Email</p>
            </div>

          </div>

          <div>
            <Image src={arrowRight} width="20px" height="20px" alt="arrow right" />
          </div>
        </div>


      </div>
      {/* Component to render according to option clicked by the user */}
      {isOption === 'parental' ? <ParentalControl /> : <AccountSettings />}

    </div>
  );
};

export default Settings;

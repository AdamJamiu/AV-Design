import { useState } from "react";
import arrow from "../../../public/assets/images/arrow.svg"
import Image from "next/image";
import { useRouter } from 'next/router'
import { useSelector } from "react-redux";
import AddNewCardModal from "../../elements/Modal/AddNewCard";

const Billing = () => {
  const [isOpen, setOpen] = useState(false);
  const { user } = useSelector((state) => state.loggedReducer);
  const router = useRouter();

  return (
    <div className="pb-12">
      <div className="flex flex-row mb-5 w-full justify-between">
        <div className="flex flex-row gap-2 items-center ">
          <Image src={arrow} onClick={() => { router.back() }} className="cursor-pointer" alt="arrow" width="25px" height="25px" />
          <p className="text-xl font-bold">Billings</p>
        </div>

        <div onClick={() => setOpen(isOpen => !isOpen)} className="px-2 py-3 rounded-lg cursor-pointer bg-greyColor">
          <p className="text-sm font-medium w-max " >Add Card</p>
        </div>
      </div>
      <p className="text-lg mb-5 font-medium">Active Cards</p>

      {isOpen ? <AddNewCardModal setOpen={setOpen} /> : null}

      {/* Card */}
      <div className="mb-10 w-96 text-white  bg-snakeBg bg-no-repeat bg-bottom bg-contain bg-[#07092C] px-14 py-10 rounded-lg justify-between align-center">
        <h1 className=" mb-5 text-lg">{user.name} Disu</h1>
        <h1 className="mb-5 tracking-widest text-2xl font-bold">12345*****90</h1>
        <h1 className="">04/22</h1>
      </div>

      <div>
        <h1 className="font-medium mb-7 text-lg">Pricing</h1>

        {/*Pricing Card */}
        <div className="flex flex-row w-full flex-wrap gap-10 justify-between items-center">
          <div className="w-48 text-center p-5 rounded-xl shadow-2xl">
            <h1 className="mb-2 text-xl font-bold">Normal</h1>
            <p className="font-medium text-[#050729]">N300</p>
            <p className="font-medium text-[#050729]">Per Month</p>
          </div>
          <div className="w-48 text-center p-5 rounded-xl shadow-2xl">
            <h1 className="mb-2 text-xl text-[#050729] font-bold">Normal</h1>
            <p className="font-medium text-[#050729]">N300</p>
            <p className="font-medium text-[#050729]">Per Month</p>
          </div>
          <div className="w-48 text-center p-5 rounded-xl shadow-2xl">
            <h1 className="mb-2 text-xl font-bold">Normal</h1>
            <p className="font-medium text-[#050729]">N300</p>
            <p className="font-medium text-[#050729]">Per Month</p>
          </div>


        </div>
      </div>

    </div>

  )
};

export default Billing;

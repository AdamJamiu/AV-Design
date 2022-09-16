import Image from 'next/image';
import filter from "../../../public/assets/images/filter.svg";


const OverallSummary = () => {
    return (
        <div className='flex-1'>
            <div className='flex flex-row justify-between bg-[#E1E1E1] shadow-4xl py-7 px-5'>
                <p className='font-bold text-[18px] text-[#242424]'>Overall Summary</p>

                <div className='cursor-pointer rounded-md border px-2 py-1 border-[#242424] w-32 flex justify-between items-center'>
                    <p className='text-sm text-[#242424]'>Annual</p>
                    <Image src={filter} width={15} height={15} />
                </div>
            </div>

            <div className=''>

            </div>
        </div>
    )
}

export default OverallSummary;
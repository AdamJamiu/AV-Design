import Image from 'next/image';
import filter from "../../../public/assets/images/filter.svg";
// import DonutChart from 'react-donut-chart';


const OverallSummary = () => {
    return (
        <div className='flex-1 w-[100%] shadow-4xl'>
            <div className='flex flex-row justify-between bg-[#E1E1E1] shadow-4xl p-5'>
                <p className='font-bold text-[18px] text-[#242424]'>Overall Summary</p>

                <div className='cursor-pointer rounded-md border px-2 py-1 border-[#242424] w-32 flex justify-between items-center'>
                    <p className='text-sm text-[#242424]'>Annual</p>
                    <Image alt="logo" src={filter} width={15} height={15} />
                </div>
            </div>

            <div className='pt-2 pl-2 h-[100%] align-center bg-white'>
                {/* <DonutChart
                    colors={["#8D08F5", "#3DBF91", "#1255B3", "#ff6600"]}
                    height={300}
                    width={460}
                    data={[
                        {
                            label: 'Completed project: $1.2m',
                            value: 60,
                        },
                        {
                            label: 'Total Revenue: $1.2m',
                            value: 10,

                        },
                        {
                            label: 'Pending Project: $1.2m',
                            value: 10,

                        },
                        {
                            label: 'Project Brief: $1.2m',
                            value: 10,

                        },
                        {
                            label: '',
                            value: "",
                            isEmpty: true

                        },

                    ]} */}
                
            </div>
        </div>
    )
}

export default OverallSummary;
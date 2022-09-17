const datas = [
    {
        projectName: 'Villa F25 Project',
        projectNo: 'P-101%',
        date: '12/01/2018',
        client: 'Your client name 1',
        budget: '$55,000',
    },
    {
        projectName: 'GMA Resident Project',
        projectNo: 'P-102',
        date: '22/01/2019',
        client: 'Your client name 2',
        budget: '$25,000',
    },
    {
        projectName: 'Banana Mansion Project',
        projectNo: 'P-103',
        date: '10/02/2020',
        client: 'Your client name 2',
        budget: '$65,000',
    },
]


const RecentProjects = () => {
    return (
        <div className='shadow-4xl flex-1 rounded'>
            <div className='flex flex-row justify-between bg-[#E1E1E1] shadow-4xl p-5'>
                <p className='font-bold text-[#242424] text-[18px]'>My Recent Projects</p>
            </div>

            <div className='bg-white h-[100%]'>
                <table className='w-full'>
                    <tr className='border-bottom border'>
                        <td className='text-[#242424] text-[14px] py-3 px-5'>Project Name</td>
                        <td className='text-[#242424] text-[14px] py-3 px-5'>Project No</td>
                        <td className='text-[#242424] text-[14px] py-3 px-5'>Date</td>
                        <td className='text-[#242424] text-[14px] py-3 px-5'>Client</td>
                        <td className='text-[#242424] text-[14px] py-3 px-5'>Budget</td>
                    </tr>
                    
                        {datas.map((data, index) => (
                            <tr key={index} className='border border-bottom'>
                                <td className='text-[#242424] text-[14px] py-3 px-5'>{data?.projectName}</td>
                                <td className='text-[#242424] text-[14px] py-3 px-5'>{data?.projectNo}</td>
                                <td className='text-[#242424] text-[14px] py-3 px-5'>{data?.date}</td>
                                <td className='text-[#242424] text-[14px] py-3 px-5'>{data?.client}</td>
                                <td className='text-[#242424] text-[14px] py-3 px-5'>{data?.budget}</td>
                            </tr>
                        ))}``
                    
                </table>

            </div>
        </div>
    )
}

export default RecentProjects;
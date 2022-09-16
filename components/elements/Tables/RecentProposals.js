const datas = [
    {
        proposalName: 'Villa F25 project proposal',
        budget: '$25,000,000'
    },
    {
        proposalName: 'GMA resident project proposal',
        budget: '$32,000,000'
    },
    {
        proposalName: 'Banana Mansion project proposal',
        budget: '$15,000,000'
    },

]


const RecentProposals = () => {
    return (
        <div className='shadow-4xl w-96 flex-1 rounded'>
            <div className='flex flex-row justify-between bg-[#E1E1E1] shadow-4xl p-5'>
                <p className='font-bold text-[#242424] text-[18px]'>My Recent Proposals</p>

            </div>

            <div className='bg-white h-[100%]'>
                <table className='w-full'>
                    <tr className='border-bottom border'>
                        <td className='text-[#242424] text-[14px] py-3 px-5'>Proposal Name</td>
                        <td className='text-[#242424] text-[14px] py-3 px-5'>Budget</td>
                    </tr>
                    <tbody>
                        {datas.map((data, index) => (
                            <tr key={index} className='border border-bottom'>
                                <td className='text-[#242424] text-[14px] py-3 px-5'>{data?.proposalName}</td>
                                <td className='text-[#242424] text-[14px] py-3 px-5'>{data?.budget}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default RecentProposals;
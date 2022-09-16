const datas = [
    {
        designName: 'Create BOM object',
        progress: '100%',
        estimate: 'N2,500,000'
    },
    {
        designName: 'Hausba CONFERENCE HALL',
        progress: '80%',
        estimate: 'N1,250,800'
    },
    {
        designName: 'New NASS AUDITORIOM',
        progress: '50%',
        estimate: 'N7,500,000'
    },
    {
        designName: 'UniAbuja Ultra Modern LECTURER HALL',
        progress: '100%',
        estimate: 'N5,500,000'
    },
    {
        designName: 'Kilimanjaro CAFETERIA',
        progress: '100%',
        estimate: 'N2,500,000'
    },
]


function MyRecentDesigns() {
    return (
        <div className='shadow-4xl flex-1'>
            <div className='flex flex-row justify-between bg-[#E1E1E1] shadow-4xl py-7 px-5'>
                <p className='font-bold text-[#242424] text-[18px]'>My Recenet Designs</p>

            </div>

            <div className='bg-white'>
                <table className='w-full'>
                    <tr className='border-bottom border'>
                        <td className='text-[#242424] font-bold text-[14px] py-3 px-5'>Design Name</td>
                        <td className='text-[#242424] font-bold text-[14px] py-3 px-5'>% Progress</td>
                        <td className='text-[#242424] font-bold text-[14px] py-3 px-5'>Etimate</td>
                    </tr>
                    <tbody>
                        {datas.map((data, index) => (
                            <tr key={index} className=''>
                                <td className='text-[#242424] text-[14px] py-3 px-5'>{data.designName}</td>
                                <td className='text-[#242424] text-[14px] py-3 px-5'>{data.progress}</td>
                                <td className='text-[#242424] text-[14px] py-3 px-5'>{data.estimate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default MyRecentDesigns
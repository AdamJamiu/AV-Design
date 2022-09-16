import Image from 'next/image';
import avatar from "../../public/assets/images/avatar.svg";
import arrow from "../../public/assets/images/arrow.svg";
import { ThemeProvider, createTheme, TextField, InputAdornment, Badge } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search"
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';


const theme = createTheme({
    palette: {
        custom: {
            light: '#ffa726',
            main: '#FF6600',
            dark: '#ef6c00',
            contrastText: '#fff',
        }
    },
})
const Navbar = () => {
    return (
        <ThemeProvider theme={theme}>

            <div className='flex flex-row justify-between w-[100%] items-center gap-x-4'>

                <i className="fa-solid fa-bars block desktop:hidden"></i>

                <div className='flex-1'>
                    {/* <i class="fa-solid fa-magnifying-glass search-icon absolute text-x left-5 top-4"></i> */}

                    <TextField
                        fullWidth
                        sx={{ background: "#fff", }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position='end'>
                                    {/* <SearchIcon onClick={() => alert("yes")}/> */}
                                    <i className="text-sm fa-solid fa-x cursor-pointer"></i>

                                </InputAdornment>
                            )
                        }}
                    // variant="standard"
                    />
                </div>

                <div className=' flex-2 flex flex-row gap-x-4 items-center'>
                    <div className="bg-white h-full rounded-full p-2">
                        <Badge color="custom" badgeContent={2}>
                            <NotificationsOutlinedIcon fontSize="medium" />
                        </Badge>
                    </div>

                    <div className='flex gap-x-2  flex-row  rounded-md items-center bg-white px-3 cursor-pointer'>
                        <Image src={avatar} height={50} width={40} />
                        <p className=''>Chibuzo</p>
                        <Image src={arrow} width={8} height={15} />
                    </div>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default Navbar
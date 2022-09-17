import React from "react"
import Image from 'next/image';
import avatar from "../../public/assets/images/avatar.svg";
import arrow from "../../public/assets/images/arrow.svg";
import {
    Menu,
    ThemeProvider,
    createTheme,
    TextField,
    InputAdornment,
    Badge,
    Drawer,
    Divider,

} from '@mui/material';

import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SearchIcon from "@mui/icons-material/Search"
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ResponsiveSidebar from "./AppBar";


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
const Navbar = ({ setIsResponsive }) => {

    const [searchValue, setSearchValue] = React.useState("")

    const handleReset = () => {
        setSearchValue("");
    }
    const handleChange = (e) => {
        setSearchValue(e.target.value);
    }


    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorNotification, setAnchorNotification] = React.useState(null);
    const open = Boolean(anchorEl);
    const isNotify = Boolean(anchorNotification)

    const handleOpen = (event) => {
        setAnchorNotification(event.currentTarget)
    }

    const closeNotfication = () => {
        setAnchorNotification(null)
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    // const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <ThemeProvider theme={theme}>

            <div className='flex flex-row justify-between w-[100%] items-center gap-x-4'>

                <i className="fa-solid cursor-pointer fa-bars block desktop:hidden" onClick={handleDrawerToggle}></i>
                <Drawer
                
                    variant="temporary"
                    open={mobileOpen}
                    anchor="left"
                    onClose={handleDrawerToggle}
                >
                    <div onClick={handleDrawerToggle}>

                    <ResponsiveSidebar />
                    </div>

                </Drawer>

                <div className='flex-1'>

                    <TextField
                        value={searchValue}
                        onChange={handleChange}
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
                                    <i onClick={handleReset} className="text-sm fa-solid fa-x cursor-pointer"></i>

                                </InputAdornment>
                            )
                        }}
                    />
                </div>

                <div className='flex-2 flex flex-row gap-x-4 items-center'>
                    <div
                        aria-controls={isNotify ? 'notification' : undefined}
                        aria-haspopup="true"
                        aria-expanded={isNotify ? 'true' : undefined}
                        onClick={handleOpen}
                        className="bg-white cursor-pointer h-full rounded-full p-2">
                        <Badge color="custom" badgeContent={2}>
                            <NotificationsOutlinedIcon fontSize="medium" />
                        </Badge>
                    </div>

                    {/* Notification dropdown */}
                    <div className="shadow-4xl">

                        <Menu
                            id="notification"
                            anchorEl={anchorNotification}
                            open={isNotify}
                            onClose={closeNotfication}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}

                        >
                            <div className="w-[290px] text-[#242424] p-3 rounded" onClick={closeNotfication}>
                                <p className="mb-2">Notifications</p>
                                <Divider />

                                <div className="my-3 grid grid-cols-1 divide-y gap-y-3">
                                    <p className="text-sm">
                                        Dear Chibuzo, you have not verify your Email. Please click the link on the verification email sent to you.
                                        <a href="#" className="text-[#1255B3]">Click here</a> to resend verification link.
                                    </p>
                                    <p className="text-sm pt-2">
                                        Dear Chibuzo, you have not verify your Email. Please click the link on the verification email sent to you.
                                        <a href="#" className="text-[#1255B3]">Click here</a> to resend verification link.
                                    </p>
                                </div>

                            </div>
                        </Menu>
                    </div>

                    <div
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        className='flex gap-x-2 flex-row rounded-md items-center bg-white px-3 cursor-pointer'
                    >
                        <Image alt="logo" src={avatar} height={50} width={40} />
                        <p className=''>Chibuzo</p>
                        <Image alt="logo" src={arrow} width={8} height={15} />
                    </div>

                    {/* Menu dropdown */}
                    <div className="shadow-4xl">

                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}

                        >
                            <div className="w-[290px] text-[#242424] p-3 rounded">
                                <p className="mb-2">User Profiles</p>

                                <Divider />

                                {/* user card */}
                                <div
                                    onClick={handleClose}
                                    className="w-full hover:bg-[rgba(255,102,0,0.25)] cursor-pointer flex flex-row my-2 px-3 py-2 rounded-md items-center justify-start gap-x-3">
                                    <Image alt="logo" src={avatar} height={50} width={40} />
                                    <div>
                                        <p className="">Chibuzo Michael</p>
                                        <p className="text-sm">System Designer</p>
                                    </div>
                                </div>

                                {/* Profile */}
                                <div
                                    onClick={handleClose}
                                    className="hover:bg-[rgba(255,102,0,0.25)] cursor-pointer flex flex-row my-2 px-3 py-2 rounded-md items-center justify-start gap-x-3">
                                    <PersonOutlinedIcon />
                                    <p>Profile</p>
                                </div>

                                {/* Team Management */}
                                <div
                                    onClick={handleClose}
                                    className="w-full hover:bg-[rgba(255,102,0,0.25)] cursor-pointer flex flex-row my-2 px-3 py-2 rounded-md items-center justify-start gap-x-3">
                                    <GroupOutlinedIcon />
                                    <p>Team Management</p>
                                </div>

                                {/* Settings */}
                                <div
                                    onClick={handleClose}
                                    className="w-full hover:bg-[rgba(255,102,0,0.25)] cursor-pointer flex flex-row my-2 px-3 py-2 rounded-md items-center justify-start gap-x-3">
                                    <SettingsOutlinedIcon />
                                    <p>Settings</p>
                                </div>

                                {/* Help */}
                                <div
                                    onClick={handleClose}
                                    className="w-full hover:bg-[rgba(255,102,0,0.25)] cursor-pointer flex flex-row my-2 px-3 py-2 rounded-md items-center justify-start gap-x-3">
                                    <HelpOutlineIcon />
                                    <p>Need help?</p>
                                </div>

                                {/* log out buttom */}
                                <div
                                    onClick={handleClose}
                                    className="border w-full text-center hover:bg-[rgba(255,102,0,0.25)] cursor-pointer flex flex-row my-2 px-3 py-2 rounded-md items-center justify-center gap-x-3">
                                    <LogoutIcon />
                                    <p>Log out?</p>
                                </div>


                            </div>

                        </Menu>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default Navbar
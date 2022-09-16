import React from "react"
import Image from 'next/image';
import avatar from "../../public/assets/images/avatar.svg";
import arrow from "../../public/assets/images/arrow.svg";
import SettingsIcon from '@mui/icons-material/Settings';
import {
    Menu,
    ThemeProvider,
    createTheme,
    TextField,
    InputAdornment,
    Badge,
    List,
    ListSubheader,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Divider,

} from '@mui/material';

import SearchIcon from "@mui/icons-material/Search"
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';


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

    return (
        <ThemeProvider theme={theme}>

            <div className='flex flex-row justify-between w-[100%] items-center gap-x-4'>

                <i className="fa-solid cursor-pointer fa-bars block desktop:hidden"></i>

                <div className='flex-1'>

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
                    />
                </div>

                <div className='flex-2 flex flex-row gap-x-4 items-center'>
                    <div
                        aria-controls={isNotify ? 'notification' : undefined}
                        aria-haspopup="true"
                        aria-expanded={isNotify ? 'true' : undefined}
                        onClick={handleOpen}
                        className="bg-white h-full rounded-full p-2">
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
                                horizontal: 'center',
                            }}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}

                        >
                            <div onClick={closeNotfication}>
                                <p className="mb-2">Notification</p>

                                <Divider />
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
                        <Image src={avatar} height={50} width={40} />
                        <p className=''>Chibuzo</p>
                        <Image src={arrow} width={8} height={15} />
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

                                {/* Profile */}
                                <div
                                    onClick={handleClose}
                                    className="hover:bg-[rgba(255,102,0,0.25)] cursor-pointer flex flex-row my-2 px-3 py-2 rounded-md items-start justify-start gap-x-3">
                                    <PersonIcon />
                                    <p>Profile</p>
                                </div>

                                {/* Team Management */}
                                <div
                                    onClick={handleClose}
                                    className="w-full hover:bg-[rgba(255,102,0,0.25)] cursor-pointer flex flex-row my-2 px-3 py-2 rounded-md items-start justify-start gap-x-3">
                                    <GroupIcon />
                                    <p>Team Management</p>
                                </div>

                                {/* Settings */}
                                <div
                                    onClick={handleClose}
                                    className="w-full hover:bg-[rgba(255,102,0,0.25)] cursor-pointer flex flex-row my-2 px-3 py-2 rounded-md items-start justify-start gap-x-3">
                                    <SettingsIcon />
                                    <p>Settings</p>
                                </div>

                                {/* Help */}
                                <div
                                    onClick={handleClose}
                                    className="w-full hover:bg-[rgba(255,102,0,0.25)] cursor-pointer flex flex-row my-2 px-3 py-2 rounded-md items-start justify-start gap-x-3">
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
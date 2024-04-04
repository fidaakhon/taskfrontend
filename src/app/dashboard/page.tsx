"use client";
import React from "react";
import styles from "./Dashboard.module.css";
import Image from "next/image";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AppsIcon from '@mui/icons-material/Apps';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function Dashboard() {

    return (
        <div className="bg-white w-screen h-screen">
            <div className="header flex flex-row flex-wrap border border-gray-300 justify-between  px-4 pb-3  ">
                <div className="logos flex gap-8">
                    <div className=" flex gap-0  mt-2">
                        <Image src="/image.png" width={20} height={10} alt="Logo" />
                        <h2 className='text-xl font-bold mt-2'>Streamed</h2>
                    </div>
                    <div className="homeLogo mt-3 flex gap-2">
                        <Image src="/home.png" width={150} height={70} alt="Logo" />
                        <ExpandMoreIcon />
                    </div>
                </div>
                <div className="searcharea mt-2 px-4 flex flex-wrap  gap-4">
                    <div className="search border border-gray-400 p-1 text-xs w-52 rounded ">
                        <SearchIcon />
                        <input type="text" placeholder="Search" />
                    </div>
                    <div className="line w-0 border border-gray-400"></div>
                    <div className="settingIcons gap-3 flex mt-1">
                        <NotificationsNoneIcon />
                        <HelpOutlineIcon />
                        <SettingsApplicationsIcon />
                    </div>
                    <div className="line w-0 border border-gray-400"></div>
                    <div className="bar_profileImage flex gap-2 mt-1">
                        <AppsIcon />
                        <Image src="/avatar.png" width={30} height={30} alt="Logo" />
                    </div>
                </div>
            </div>
            <div className={styles.counting}>
                <div className={styles.tasks}>
                    <p>Total project <span className="text-green-500 text-sm"><ArrowDropUpIcon />2 </span></p>
                    <h1 className="font-bold text-2xl">7</h1>
                </div>
                <div className={styles.tasks}>
                    <p>Total Tasks<span className="text-green-500 text-sm"><ArrowDropUpIcon />4 </span></p>
                    <h1 className="font-bold text-2xl">49</h1>
                </div>
                <div className={styles.tasks}>
                    <p>Assigned Tasks<span className="text-red-500 text-sm"><ArrowDropDownIcon />3 </span></p>
                    <h1 className="font-bold text-2xl">12</h1>
                </div>
                <div className={styles.tasks}>
                    <p>Total project <span className="text-green-500 text-sm"><ArrowDropUpIcon />1 </span></p>
                    <h1 className="font-bold text-2xl">6</h1>
                </div>
                <div className={styles.tasks}>
                    <p>Total project <span className="text-green-500 text-sm"><ArrowDropUpIcon />2 </span></p>
                    <h1 className="font-bold text-2xl">3</h1>
                </div>
            </div>
        </div>
    )
}
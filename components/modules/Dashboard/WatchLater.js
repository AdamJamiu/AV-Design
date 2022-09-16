import React from "react";
import Image from "next/image";
import local from "../../../public/local1.png";
// import Link from "next/link";


const WatchLaterComponent = () => {

    return (
        <div className="flex flex-row justify-between">
            <div className="w-full rounded-lg">
            <Image src={local} width="60px" height="100px" alt="local1" /> 
            </div>

        </div>
    )
}

export default WatchLaterComponent;

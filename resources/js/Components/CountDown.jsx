import React from "react";
import { useTimer } from "react-timer-hook";
import Digit from "./Digit";
import { Typography } from "@mui/material";

export default function CountDown({ expiryTimestamp, onExpireFn }) {
    const { seconds, minutes, hours,} =
        useTimer({
            expiryTimestamp,
            onExpire: () => onExpireFn(),
        });

    return (
        <div className="flex flex-col gap-5 items-center">
            <Typography variant="h5">Remaining Time </Typography>
            <div className="text-5xl flex justify-center items-center ">
                {hours > 0 && <span><Digit value={minutes} title={"Hours"} />:</span>}
                <span className="">
                    <Digit value={minutes} title={"Minutes"} />
                </span>
                :
                <span>
                    <Digit value={seconds} title={"seconds"} />
                </span>
            </div>
        </div>
    );
}


import styles from "./TimerWidget.module.css";
import React, { useEffect, useState } from 'react';
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";

function TimerWidget() {
    const [totalSeconds, setTotalSeconds] = useState(50);
    const [isRunning, setIsRunning] = useState(false);
    const HOURS_STEP=3600;
    const MIN_STEP=60;
    const SEC_STEP=1;

    const parseTime = (totalSeconds) => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        return { hours, minutes, seconds };
    };

    useEffect(()=>{
        if(isRunning){
            const interval=setInterval(()=>{
                setTotalSeconds((totalSeconds)=>{
                    if(totalSeconds > 0)
                        return totalSeconds-1;
                    else{
                        setIsRunning(false);
                        return 0;
                    }
                })
            },1000);
            return ()=>clearInterval(interval);
        }
    })
    const { hours, minutes, seconds } = parseTime(totalSeconds);

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                {totalSeconds}
            </div>
            <div className={styles.right}>
                <div className={styles.configure}>
                    <div className={styles.cell}>
                        <p>Hours</p>
                        <IoIosArrowDropup
                        onClick={()=>setTotalSeconds(totalSeconds+HOURS_STEP)}
                        />
                        {parseTime(totalSeconds).hours}
                        <IoIosArrowDropdown
                        onClick={()=>setTotalSeconds(totalSeconds-HOURS_STEP>0?totalSeconds-HOURS_STEP:0)}/>
                    </div>
                    <div className={styles.cell}>
                        <p>min</p>
                        <IoIosArrowDropup
                        onClick={()=>setTotalSeconds(totalSeconds+MIN_STEP)}/>
                        {parseTime(totalSeconds).minutes}
                        <IoIosArrowDropdown
                        onClick={()=>setTotalSeconds(totalSeconds-MIN_STEP>0?totalSeconds-MIN_STEP:0)}/>
                    </div>
                    <div className={styles.cell}>
                        <p>sec</p>
                        <IoIosArrowDropup
                        onClick={()=>setTotalSeconds(totalSeconds+SEC_STEP)}/>
                        {parseTime(totalSeconds).seconds}
                        <IoIosArrowDropdown 
                        onClick={()=>setTotalSeconds(totalSeconds-SEC_STEP>0?totalSeconds-SEC_STEP:0)}/>

                    </div>
                </div>
                <button onClick={()=>{
                    setIsRunning(!isRunning)
                }}>
                    {isRunning?"stop":"start"}
                </button>
            </div>
        </div>

    );
}

export default TimerWidget;

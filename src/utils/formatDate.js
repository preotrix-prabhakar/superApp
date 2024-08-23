import React from "react";

const formatDate = () => {
    const newDate = new Date();
    const curr_date = newDate.toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
    });
    const curr_time = newDate.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second:"numeric",
        hour12: true,
    });
    
    return {
        time: curr_time,
        date: curr_date,
    };
};
export default formatDate;
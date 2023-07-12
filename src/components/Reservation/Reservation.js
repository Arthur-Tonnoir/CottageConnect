import React, { useState, useEffect } from "react";

function Reservation(props){
    return (
        <div>
            <div>{props.id}</div>
            <div>{props.created_at}</div>
            <div>{props.date_start}</div>
            <div>{props.date_end}</div>
            <div>{props.duration}</div>
            <div>{props.nombre_personnes}</div>
            <div>{props.total}</div>
        </div>
    )
}

export default Reservation;
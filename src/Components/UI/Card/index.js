import React from 'react';
import "./style.css";
export default function Card(props) {
    return (
        <div className="card" style={{width: props.width? props.width: "100%" }} {...props}>
            {props.children} 
        </div>
    )
}

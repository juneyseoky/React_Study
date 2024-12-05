import React from "react";

function Elixirs(props) {

    return (
        <div id="elixirsArea">
            <img src={`${props.src}`} alt="#" />
            <p>{`${props.title}`}</p>
            <span>{`${props.content}`}</span>
        </div>
    )
}

export default Elixirs
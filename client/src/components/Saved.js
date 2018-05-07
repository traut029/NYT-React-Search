import React from "react";

export const Saved = props => (
    <div>
        <p><a href={props.url}>{props.title}</a></p>
        <p>{props.date}</p>
        {/* <button onClick={() => props.clickSave(props.id)}>Delete</button> */}
    </div>
);

export default Saved;
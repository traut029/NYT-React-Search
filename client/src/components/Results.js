import React from "react";

export const Results = props => (
    <div>
        <p><a href={props.url}>{props.title}</a></p>
        <p>{props.date}</p>
        <button onClick={() => props.clickSave(props.id)}>Save</button>
    </div>
);
export default Results;
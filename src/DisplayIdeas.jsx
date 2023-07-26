import React, { useState } from "react"

function DisplayIdeas (props) {
    return(
        <div>
            <ul>
                {props.ideas.map((idea, index) => 
                <li key={index}>
                    {idea}</li>
                )}
            </ul>
        </div>
    )
}

export default DisplayIdeas
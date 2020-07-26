import React from "react"
import {Link} from "react-router-dom"

export const Alert = ({alert}) => {

    return (
        <div
            className={`alert alert-${alert.type || 'secondary'} alert-dismissible`}
            role="alert"
        >
            {alert.text}
            <button type="button" className="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}
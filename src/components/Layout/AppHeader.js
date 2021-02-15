import React from "react";
import logo from './logo.svg'

function AppHeader () {
    return (
        <div className={'container-fluid'}>
            <div className={'row'}>
                <div className="App w-100">
                    <div className="App-header py-3 mb-3">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h2>HW-3 «React Form Validation Demo»</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppHeader

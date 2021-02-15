import React from "react";
import github from './github.svg'

function Footer () {
    return (
        <footer className="footer mt-auto py-3">
            <div className="container">
                <div className="text-center">
                    <a className="App-link" href="https://github.com/romankupchak93" target="_blank" rel="noopener noreferrer">
                        <img src={github} className="github-logo mb-3" alt="logo" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer

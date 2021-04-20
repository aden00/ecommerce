import React from "react";
import Directory from "../../components/directory/directory";
import './homepage.scss'
const HomePage = () => {
    return(
        <div className="homepage">
            <div className='directory-menu'>
                <Directory/>
            </div>
        </div>
    )
}

export default HomePage
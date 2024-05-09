import React from 'react';
import { Link } from 'react-router-dom';

const HomeCard = ({ Icon, title, description, url, btn }) => {
    return (
        <div className="card-wrapper">

            <div className="icon"><Icon /></div>
            <div>
                <div>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
                <Link to={url} className='btn'>
                    {btn}
                </Link>
            </div>
        </div>
    )
}

export default HomeCard
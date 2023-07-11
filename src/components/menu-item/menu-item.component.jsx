import React from "react";
import { useNavigate } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(linkUrl)
    }
    return (
        < div className={`${size} menu-item`} onClick={handleClick} >
            <div className="background-image" style={{
                backgroundImage: `url(${imageUrl})`
            }} />
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div >
    )
}
export default MenuItem;
// export default withRouter(MenuItem); We will pass MenuItem component into  withRouter and withRouter will return a super-powered MenuItem component with access to history, location, match props 
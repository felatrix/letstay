import React from 'react'

import Button from 'elements/Button/Button'
import BrandLogo from 'parts/BrandLogo'

const Header = (props) => {
    const getNavLinkClass = (path)=>{
        return props.location.pathname === path ? "active" : ""
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent ">
            <div className="container d-flex flex-row justify-content-between">
                <BrandLogo></BrandLogo>
                <div className="navbar-collapse collapse flex-grow-0" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className={`nav-item ${getNavLinkClass('/')}`}>
                            <Button className="nav-link text-custome-white font-weight-normal" type="link" href="#">Home</Button>
                        </li>
                        <li className={`nav-item ${getNavLinkClass('/category')}`}>
                        <Button className="nav-link text-custome-white font-weight-normal" type="link" href="#">Category</Button>
                        </li>
                        <li className={`nav-item ${getNavLinkClass('/testimony')}`}>
                        <Button className="nav-link text-custome-white font-weight-normal" type="link" href="#">Testimony</Button>
                        </li>
                        <li className={`nav-item ${getNavLinkClass('/agents')}`}>
                        <Button className="nav-link text-custome-white font-weight-normal" type="link" href="#">Agents</Button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header
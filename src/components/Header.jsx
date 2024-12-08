import React from 'react'
import logo from "../assets/images/logo2.png"
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {

    let navigate = useNavigate()

    const goGit = () => {
        window.open('https://github.com/Naveed786Ahmed/DevDocket', '_blank')
    } 

    function goDocs() {
        navigate("/docs")
    }

    function goHome() {
        navigate("/")
    }

    return (
        <>
            <div className="headerCont">
                <div className="navLogo">
                    <img src={logo} alt="" width={"80%"} height={"100%"} />
                </div>
                <div className="navItem">
                    <ul className='navItems' >
                        <li onClick={goHome}>Home</li>
                        <li onClick={goDocs}>Docs</li>
                        <li><Link to={"#"} className='gitLinks' onClick={goGit}>Github</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header
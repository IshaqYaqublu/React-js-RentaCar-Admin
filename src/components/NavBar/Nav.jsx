import React, { useState } from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'
import Logo from "img/RentaCar.png"
import Vuska from "img/Vuska.jpeg"

function Nav() {

    const [resp, setResp] = useState("")
    const [nav, setNav] = useState("navs")

    return (
        <>
            <i onClick={() => {
                nav === "nav" ? setNav("rp-nav") : setNav("nav")
                resp === "" ? setResp("show-nv") : setResp("")
            }} className="fa-solid fa-bars"></i>
            <div className={`${nav}`}>
                <div className={`  ${resp}`}>
                    <div className="nav-img">
                        <img  src={Logo} alt="" />
                        <i onClick={() => {

                            nav === "nav" ? setNav("rp-nav") : setNav("nav")
                            resp === "" ? setResp("show-nv") : setResp("")

                        }} className="fa-solid fa-xmark"></i>
                    </div>
                </div>
                <div className='profil'><div className='profil-img'><img className='img img-fluid' src={Vuska} alt="" /></div> <div className='profil-name'><h1>Vusal Imanov</h1> <p>admin</p></div></div>
                <Link to='/home' className='sidel'><span></span>Dashboard</Link>
                <Link to='/sliders' className='sidel'><span></span>Sliders</Link>
                <Link to='/users' className='sidel'><span></span>Users</Link>
                <Link to='/categories' className='sidel'><span></span>Categories</Link>
                <Link to='/brands' className='sidel'><span></span>Brands</Link>
                <Link to='/products' className='sidel'><span></span>Products</Link>
            </div>

        </>
    )
}

export default Nav

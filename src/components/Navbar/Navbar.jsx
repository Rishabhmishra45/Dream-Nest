import React, { useState } from 'react'
import './Navbar.css'
import favicon1 from "../../assets/favicon1.png"
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { MdOutlineWhatshot } from "react-icons/md";
import { GiFamilyHouse } from "react-icons/gi";
import { MdBedroomParent } from "react-icons/md";
import { PiFarm } from "react-icons/pi";
import { MdOutlinePool } from "react-icons/md";
import { LuTentTree } from "react-icons/lu";
import { GiWoodCabin } from "react-icons/gi";
import { GiShop } from "react-icons/gi";
import { GiForestCamp } from "react-icons/gi";
import { Link, NavLink } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";   // ⬅️ Cross icon import

const Navbar = () => {
    let [visible, setvisible] = useState(false)

    return (
        <div id='Nav'>

            {/* ========== HAMBURGER DROPDOWN ========== */}
            {visible ? (
                <div className="hamburger">
                    <Link to={"/Login"}>
                        <div className="ham1">Login</div>
                    </Link>
                    <Link to={"/Signup"}>
                        <div className="ham1">Sign Up</div>
                    </Link>
                    <Link to={"/Listing"}>
                        <div className="ham1">List your home</div>
                    </Link>
                    <div className="ham1">Help center</div>
                </div>
            ) : null}

            {/* ========== TOP NAVBAR (LOGO + SEARCH + BUTTONS) ========== */}
            <div className='nav1'>
                {/* ---- LOGO ---- */}
                <Link to={""}>
                    <div className="logo">
                        <img id='favicon' src={favicon1} alt="" width="110px" />
                    </div>
                </Link>

                {/* ---- SEARCH BAR ---- */}
                <div className="search">
                    <input type="text" placeholder='Search Destination' />
                    <button>
                        <IoSearch />
                        <span>Search</span>
                    </button>
                </div>

                {/* ---- RIGHT SIDE BUTTONS ---- */}
                <div className='ham'>
                    <Link to={"/Listing"}>
                        <button id='btn1'>List Your Home</button>
                    </Link>

                    <button id='btn2' onClick={() => setvisible(prev => !prev)}>
                        {visible ? (
                            // Agar menu open hai to CROSS dikhana hai
                            <RxCross2 id='svgCross' />
                        ) : (
                            // Agar menu band hai to hamburger + profile dikhana hai
                            <>
                                <GiHamburgerMenu id='svg1' />
                                <CgProfile id='svg2' />
                            </>
                        )}
                    </button>
                </div>
            </div>

            {/* ========== SECOND NAVBAR (CATEGORIES) ========== */}
            <div className='nav2'>
                <NavLink to={""}>
                    <div className="svg11">
                        <MdOutlineWhatshot />
                        <h3>Trending</h3>
                    </div>
                </NavLink>
                <div className="svg11"><GiFamilyHouse /><h3>Houses</h3></div>
                <div className="svg11"><MdBedroomParent /><h3>Rooms</h3></div>
                <div className="svg11"><PiFarm /><h3>Farm Houses</h3></div>
                <div className="svg11"><MdOutlinePool /><h3>Pool Houses</h3></div>
                <div className="svg11"><LuTentTree /><h3>Tent Houses</h3></div>
                <div className="svg11"><GiWoodCabin /><h3>Cabins</h3></div>
                <div className="svg11"><GiShop /><h3>Shops</h3></div>
                <div className="svg11"><GiForestCamp /><h3>Forest Houses</h3></div>
            </div>
        </div>
    )
}

export default Navbar

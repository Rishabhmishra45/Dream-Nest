import React from 'react'
import './Listing.css'
import { IoIosAddCircleOutline } from "react-icons/io";

const Listing = () => {
    return (
        <div id='Listing'>
            <form >
                <span id='listingtitle'>Add Your Listing</span>

                <div className="list">
                    <label htmlFor="title">Tittle</label>
                    <input placeholder='_BHK______ in location' type="text" id='title' required />
                </div>

                <div className="list">
                    <label htmlFor="description">Description</label>
                    <textarea placeholder='About Listing' id="description"></textarea>
                </div>

                <div className="list">
                    <label htmlFor="img1">Image URL 1</label>
                    <input type="file" id='img1' required />
                </div>

                <div className="list">
                    <label htmlFor="img2">Image URL 2</label>
                    <input type="file" id='img2' required />
                </div>

                <div className="list">
                    <label htmlFor="img3">Image URL 3</label>
                    <input type="file" id='img3' required />
                </div>

                <div className="list">
                    <label htmlFor="price">Price</label>
                    <input placeholder='00,000/Month' type="number" id='price' required />
                </div>

                <div className="list">
                    <label htmlFor="location">Location</label>
                    <input placeholder='City/Country' type="text" id='location' />
                </div>

                <button id="addbtn" type="submit">
                    Add Now <IoIosAddCircleOutline />
                </button>
            </form>
        </div>
    )
}

export default Listing

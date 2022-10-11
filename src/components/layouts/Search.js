import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Search = () => {

    // const navigate = useNavigate();

    // const [keyword, setKeyword] = useState("");

    // const searchHandler = (e) => {
    //     e.preventDefault()

    //     if (keyword.trim()) {
    //         navigate(`/search/${keyword}`)
    //     } else {
    //         navigate('/')
    //     }
    // }

    return (
        <form className="d-flex ms-auto" role="search">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <input
                                      
                    className="form-control me-2"
                    type="search"
                    placeholder=""
                    aria-label="Search"
                    style={{ width: "400px", borderColor: "#111" }}
                />
                <button className="btn-56" type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
            </div>            
        </form>
    )
}

export default Search

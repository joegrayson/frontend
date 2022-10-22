import React, { Fragment } from 'react'
import { Route, Link } from 'react-router-dom'

import Search from './Search'

import '../../App.css'

const Header = () => {
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg">
                <div className="container-md">
                    <Link to="/"><a className="navbar-brand" href="/#">MARGAUX</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </Link>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <Route render={({ history }) => <Search history={history} />} />
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">LOGIN</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default Header

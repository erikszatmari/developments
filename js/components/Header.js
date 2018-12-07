import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (

    <nav className='navbar navbar-expand-sm navbar-inverse'>

        <div className='container-fluid'>
            <ul className='nav navbar-nav'>
                <li>
                    <Link className='navbar-brand' to='/'>Webshop</Link>
                </li>
                <li>
                    <Link className='navbar-brand' to='/products'>Termékek</Link>
                </li>
                <li>
                    <Link className='navbar-brand' to='/cart'>Kosár<span id='item-number'></span></Link>
                </li>
            </ul>
        </div>

    </nav>
)

export default Header
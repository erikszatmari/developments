import React from 'react'
import {showProducts, showCart} from '../../../public/js/cart'

class Products extends React.Component{

    componentDidMount(){

        console.log(showProducts())

    }

render (){

    return (
        <div className='container'>

            <div className='container-fluid'>

                <main>

                    <h2>Termékek</h2>

                    <div className="container">

                        <section id="products"></section>

                    </div>

                    <div className="container">

                            <section id="cart"></section>

                    </div>

                </main>
                
            </div>

        </div>
    )
    }
}

export default Products
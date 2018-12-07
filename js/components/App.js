import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Products from './Products'
import Cart from './Cart'

class App extends Component {

  /*constructor(props) {
    super(props);
    this.state ={
      products: []
    };
  }

  componentDidMount(){
    let url = "https://raw.githubusercontent.com/erikszatmari/shoppingDatabase/master/products.json?"
    
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data =>{
        let products =data.map((product) => {
          return (
            <div className='products'>

              <div className='card'>
              
                <div className='card-header'>
                  <h3>{product.title}</h3>
                </div>
                <div className='card-body'>
                  {product.desc}
                </div>
                <hr />
                <div className='product-price'>
                  ${product.price}
                </div>
                <div className='card-footer'>
                  <div className='product-btn'><button type='button' className='btn btn-primary' data-id={product.id}>Hozzáad</button></div>
                </div>

              </div>

            </div>
          )
        })
        this.setState({products: products})
      })
      .catch(error => console.log(error))
  }*/
  
  render () {

    return (
      <div >

      <Header />
      <BrowserRouter>
          <Route path='/products' component={Products} />
          <Route path='/cart' component={Cart} />
      </BrowserRouter>
      </div>
    )
    
  }

}

ReactDOM.render(<App />, document.getElementById('app'))
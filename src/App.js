import React, { useState, useEffect } from 'react';
import { Navbar, Products} from './component'
import {commerce} from './lib/commerce';


const App = () => {

    const [products, setproducts] = useState([]);
    const fetchProducts = async() => {
        const {data} = await commerce.products.list();
        setproducts(data);
        
    }

    useEffect(() => {
        fetchProducts();
    }, []);
    console.log(products);
    return (
        <div>
            <Navbar />
            <Products products={products} />
        </div>
    )
}

export default App


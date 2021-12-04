import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const ShowProducts = () => {

    const [ products, setProducts ] = useState([])

    useEffect(() => {
        const getProductsData = async () => {
            const { data } = await axios.get('/api/products/allProducts')
            console.log(data)
        }
        getProductsData()
    }, [])


    return (
        <div>
            <h1>All products</h1>
        </div>
    )
}


export default ShowProducts
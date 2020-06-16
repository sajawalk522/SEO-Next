import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { data } from '../../data';
const App = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        setProducts(data)
    });
    return (
        <div>
            <div className="porduct">
                <div>
                    {products.map((post) => (
                        <div className="item-select" key={post.id}>
                            <Link href={"/product?id=" + post.id}>
                                <div>
                                    <img src={post.image} alt="product image"/>
                                    <p>{post.productName}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default App;
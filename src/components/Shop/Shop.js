import  React  from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products] = useState(first10);
    return (
        <div>
           <h1>this is shop</h1>
           <h3>{products.length}</h3> 
        </div>
    );
};

export default Shop;
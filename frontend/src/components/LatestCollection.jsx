import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Tittle'
import { useEffect } from 'react'
import ProductItem from './ProductItem'

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = React.useState([]);
    useEffect(()=>{
        setLatestProducts(products.slice(0,10));
    },[products]);
  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl '>
            <Title text1={'Latest'} text2={'Collection'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio earum modi amet animi corporis quod. Dolorem cupiditate adipisci voluptatibus eum quaerat ullam, harum nihil? Accusantium at incidunt esse praesentium necessitatibus!
            </p>
        </div>
        <div className='mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            
              { latestProducts.map((product , index)=>(
                    <ProductItem key={index} id={product.id} name={product.name} price={product.price} image={product.image}/>
              ))
}
           
        </div>
      
    </div>
  )
}

export default LatestCollection;

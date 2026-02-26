import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Tittle'
import ProductItem from './ProductItem'
const BestSeller = () => {
    const {products} = useContext(ShopContext);
    const [bestSeller , setbestseller] = useState([]);
    useEffect(()=>{
      const bestProduct = products.filter((item)=>(item.bestseller));
      setbestseller(bestProduct.slice(0,5));
    },[products]);
    console.log(bestSeller);
  return (
    <div className='my-10' >
    <div className='text-center text-3xl py-8'  >
     <Title text1={'BEST'} text2={'SELLERS'}/>
     <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-grey-600'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laborum, nisi, rerum quisquam eos ut doloribus id fugiat impedit magni architecto quasi ducimus maiores, laboriosam dolorum illum quo dolores non!
     </p>
    </div>
      <div className='mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        { bestSeller.map((product , index)=>(
                    <ProductItem key={index} id={product.id} name={product.name} price={product.price} image={product.image}/>
              ))
}
      </div>
    </div>
  )
}

export default BestSeller

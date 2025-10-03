
import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import ProductDescription from '../Components/ProductDescription/ProductDescription';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();

  const product = all_product.find((e) => e.id === Number(productId));

  if (!product) {
    return <p>⚠️ Product not found</p>;  // <-- prevents the error
  }

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <ProductDescription/>
      <RelatedProducts/>

    </div>
  );
}

export default Product;

















// import React, { useContext } from 'react'
// import { ShopContext } from '../Context/ShopContent'
// import { useParams } from 'react-router-dom'
// import Breadcrum from '../Components/Breadcrums/Breadcrum';

// const Product = () => {
//   const {all_product}=useContext(ShopContext);
//   const {productId}=useParams();
//   const product = all_product.find((e)=>e.id === Number(productId) )
//   return (
//     <div>
//       <Breadcrum product={product}/>
//     </div>
//   )
// }

// export default Product

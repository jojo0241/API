import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

import { useSelector } from 'react-redux'
import ProductCard from './ProductCard';
import { useDispatch } from 'react-redux';
import { addProducts } from './features/products/productSlice';
import { useEffect } from 'react';
import axios from 'axios';



const Presentation = () => {


  const products = useSelector((state) => state.products.products)
  const dispatch = useDispatch()

  useEffect( ()=> {


    axios.get('http://localhost:3000/products')
    .then(res => {
      dispatch(addProducts(res.data))
      console.log(res.data)
    })
    .catch(err => console.log(err))
    
  }, [])

    return (
      <>
        
       <b><font color="white" style={{ fontFamily : 'GROBOLD', }}><h1>Users</h1></font></b>
       <h4>Voici un apercu de nos produits</h4><br /><br />

<Container>

  <div style={{ display: 'flex' , flexWrap : 'wrap', justifyContent : 'space-between', alignContent : 'space-around', }}> 

  {products && products.length >0 && products.map((product, key) => (
				<div key={key} style={{width:"30%", marginTop : '20px'}}>
					<ProductCard product={product} />
				</div>
			))}



    </div>

</Container>
      


        
      </>
    );
  }
  
  export default Presentation;
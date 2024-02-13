import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addProduct } from './features/products/productSlice';



const ProductAdd = () => {

    const dispatch = useDispatch()
  
    const [form, setForm] = useState({
      Nom : "",
      Quantite : "",
      image: "",
      id: ""
    })
  
    function handleSubmit(e){

        e.preventDefault();
    if(form && form.Nom && form.Quantite && form.image){
      dispatch(addProduct({name : form.Nom , quantity : form.Quantite, image : form.image}))
    }
    setForm({
      Nom: "",
      Quantite: "",
      image: ""
    })
    alert("Produit ajouté !")
    console.log(form)
      
    }
  
    return (
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nom </Form.Label>
            <Form.Control value={form.Nom} onChange={(e)=>setForm({...form, Nom: e.target.value})} type="text" placeholder="nom du produit..." />
          </Form.Group>
          <Form.Group className="mb-3" controlId="eexampleForm.ControlInput1">
            <Form.Label>Prenom</Form.Label>
            <Form.Control onChange={(e)=>setForm({...form, Quantite: e.target.value})} value={form.Quantite} type="Number" placeholder='1'/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>email</Form.Label>
          <Form.Control onChange={(e)=>setForm({...form, image: e.target.value})} value={form.image} type="text" placeholder="image du produit..." />
        </Form.Group>
          
          <Button variant="primary" onClick={handleSubmit}>Enregistrer le produit</Button>{' '}
        </Form> 
      </Container>

    );
  }
  
  export default ProductAdd;
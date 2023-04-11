import React, { useEffect, useState } from 'react'
import { Button, Col, Row, Table } from 'react-bootstrap'
import { useForm,SubmitHandler , FieldValues, SetFieldValue} from "react-hook-form";
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import { toast } from 'react-toastify';



type Props = {}
const BASE_URL="https://crudcrud.com/api/843f9835f8124287ad5d3f31d88b8773/products"

type Product={
    _id:string,
    name:string,
    price:string
}
function Products({}: Props) {

 

    const [filteredProducts,setFilteredProducts]=useState([])
    const [products, setProducts]=useState<Product[]>([])
    const [updateProductMode, setUpdateProductMode]=useState(false)
    const [addUpdateLoading,setAddEditLoading]=useState(false);
    const [productId, setProductId]=useState<string >("")
    const [searchQuery, setSearchQuery]=useState("")
    const[loading, setLoading]=useState(false)
  useEffect(() => {
  fetchAllProducts()
  }, [])


    const fetchAllProducts=()=>{
        setLoading(true)
        axios.get(BASE_URL).then((response)=>{
            setLoading(false)

            setProducts(response.data)
            console.log(response.data)
        }).catch(e=>{
            setLoading(false)
            toast.error('An error occured while trying to fetch the products')
            console.log(e)})
    }


    const deleteProduct=(id:string)=>{

        if(confirm("Are you sure you want to delete the product?")==true){
            setAddEditLoading(true)

            axios.delete(BASE_URL+`/${id}`).then(response=>{
                setAddEditLoading(false)

                toast.success("Product deleted succesfully")
                fetchAllProducts()
            }).catch(e=>{
                setAddEditLoading(false)

                console.log(e)
                toast.error("There was a problem when deleting the product")
            }) 
        }
    }

    const { register, handleSubmit, watch, formState: { errors },reset } = useForm();
    const onSubmit: SubmitHandler<FieldValues> = data => {

        
        setAddEditLoading(true)
        if(!updateProductMode){
            axios.post(BASE_URL,{
                ...data
            }).then(response=>{
                toast.success("Product added succesfully")
                setAddEditLoading(false)
                fetchAllProducts()
                console.log(response)
            }).catch(e=>{
                toast.error("An error occured while trying to Add the product")
                setAddEditLoading(false)

                console.log(e)})
        }else{
             axios.put(BASE_URL+`/${productId}`,{
                 name:data.name,
                 price:data.price
             }).then(response=>{
                 toast.success("Product Updated succesfully")
                 setAddEditLoading(false)
                 fetchAllProducts()
                 console.log(response)
             }).catch(e=>{
                 setAddEditLoading(false)
                 setUpdateProductMode(false)

    
                 toast.error("An error occured while trying to update the product")
    
                 console.log(e)})
        }


    };

    const filteredData = products.filter((item) => {
        const itemName = item.name.toLowerCase();
        const search = searchQuery.toLowerCase();
        return itemName.includes(search) || item.price.toString().includes(search);
      });
  return (
      <div>
              <div className='container-full'>
      <Row>
      <Col md="3">
          <h1>Products</h1>
          </Col>
          <Col md="3">
          <input onChange={(e)=>setSearchQuery(e.target.value)} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          </Col>

      </Row>
      <Row>
      <Col md="6">
          {
              loading?(<div>Loading...</div>
              ):(
                <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                      {
                          filteredData.map((item,index)=>(
                              <tr key={item._id}>
                              <td>{item.name}</td>
                              <td>{item.price}</td>
                              <td><Button onClick={()=>{
                                  setUpdateProductMode(true)
                                  setProductId(item._id)
                                  reset(item)
                              }} variant="dark">Edit</Button> <Button onClick={()=>deleteProduct(item._id)} variant="outline-dark">Delete</Button></td>
                              </tr>
                          ))
                      }
                  
          
                </tbody>
              </Table>
              )
          }
          </Col>
          <Col md="6" >
              <Form className='add-edit-container p-3 ' onSubmit={handleSubmit(onSubmit)}>
              <h5>{updateProductMode?'Update':'Add'} Product</h5>
              <p> {updateProductMode?'Update':'Add new'} product with the provided fields</p>
              <Form.Group className="mb-3">
        <Form.Control  placeholder="Name" {...register("name") } required/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control type='number' placeholder="Price" {...register("price")} required/>
      </Form.Group>

      <Button disabled={addUpdateLoading} type="submit" variant='dark'>
          {
              addUpdateLoading?'loading...':updateProductMode?'Edit Product':'Add Product'
          }
      </Button>
              </Form>
          </Col>
      </Row>
      <Row className='py-3'>
            <Col className='py-3' md="4">
                <div className='right-container d-flex justify-content-end'>

                </div>
            </Col>
            <Col className='py-3 justify-content-flex-end' md="4">
                <h4>Header Text</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti a aut odio! Eum, facere possimus eaque quo illum ex, facilis totam, ad exercitationem fugiat perferendis rerum. Incidunt dicta animi totam.</p>
                <Button variant="dark">Call to Action</Button> 
            </Col>
        </Row>
    </div>
    
      </div>
  )
}

export default Products
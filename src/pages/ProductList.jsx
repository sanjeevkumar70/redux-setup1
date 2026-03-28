import React, { use, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap'
import swal from 'sweetalert'

const ProuctList = () => {
  const [product, setProduct] = useState([])
  const [refresh, setRefresh] = useState(null)

  const [modal, setModal] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [id, setId] = useState(null)

  const [item, setItem] = useState({
    p_code: '',
    p_name: '',
    p_price: '',
    p_description: '',
    rating: '',
    dimension: '',
    quantity: 0,
    p_image: ''
  })

  const [formdata, setFormData] = useState({
    p_code: '',
    p_name: '',
    p_price: '',
    p_description: '',
    rating: '',
    dimension: '',
    quantity: 0,
    p_image: ''
  })
  // console.log(formdata, '---------FORM DATA--------')
  const toggle = () => setModal(!modal)

  const { token } = useSelector(state => state.loginReducer)

  useEffect(() => {
    async function fetched() {
      const res = await fetch(
        'https://enterprise-admin-backend.onrender.com/api/products',
        {
          headers: {
            method: 'GET',
            Authorization: `Bearer ${token}`
          }
        }
      )
      const product_data = await res.json()
      setProduct(product_data.data)
      // console.log(product_data.data, '=======DATA===========')
    }
    fetched()
  }, [refresh])

  const handleDeleteClick = async param => {
    const res = await fetch(
      `https://enterprise-admin-backend.onrender.com/api/products/${param}`,
      {
        method: 'DELETE', // ✅ correct place
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    )
    const product_data = await res.json()
    setRefresh(Math.random() + new Date())
    swal({
      title: product_data.message,
      icon: 'success',
      draggable: true
    })
    // console.log(product_data, '====deleted======')
  }

  const handleEditClick = product => {
    setSelectedProduct(product)
    setModal(true)
    setFormData({
      p_code: product?.p_code,
      p_name: product?.p_name,
      p_price: product?.p_price,
      p_description: product?.p_description,
      rating: product?.rating,
      dimension: product?.dimension,
      quantity: product?.quantity,
      p_image: product?.p_image
    })
    setId(product._id)
  }
  const handleChange = e => {
    setFormData({ ...formdata, [e.target.name]: e.target.value })
  }
  const handleSave = async () => {
    const response = await fetch(
      `https://enterprise-admin-backend.onrender.com/api/products/${id}`,
      {
        method: 'PUT', // ✅ correct place
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formdata)
      }
    )
    const data = await response.json()
    swal({
      title: data.message,
      icon: 'success',
      draggable: true
    })
    setFormData({
      p_code: '',
      p_name: '',
      p_price: '',
      p_description: '',
      rating: '',
      dimension: '',
      quantity: 0,
      p_image: ''
    })
    setRefresh(Math.random() + new Date())
    setModal(false)
    // console.log(data, '=======Edit data========')
  }
  const handleAddItem = product => {
    setItem(product)
    setModal(true)
  }

  const handleAdd = e => {
    setItem({ ...item, [e.target.name]: e.target.value })
  }
  const handleSaveProduct = async () => {
    const e = await fetch(
      `https://enterprise-admin-backend.onrender.com/api/products`,
      {
        method: 'POST', // ✅ correct place
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
      }
    )

    const p_data = await e.json()
    swal({
      title: p_data.message,
      icon: 'success',
      draggable: true
    })
    setItem({
      p_code: '',
      p_name: '',
      p_price: '',
      p_description: '',
      rating: '',
      dimension: '',
      quantity: 0,
      p_image: ''
    })
    setRefresh(Math.random() + new Date())
    setModal(false)
  }
  return (
    <>
      <div>
        <Button
          className='btn btn-primary d-flex flex-end my-4 mx-5'
          onClick={() => handleAddItem(product)}
        >
          ADD PRODUCT
        </Button>
        <Table responsive className=''>
          <thead>
            <tr>
              <th>SL_NO</th>
              <th>Product Code</th>
              <th>Product Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {product.map((item, index) => (
              <tr key={item._id}>
                <th scope='row'>{index + 1}</th>
                <td>{item.p_code}</td>
                <td>{item.p_name}</td>
                <td>
                  <Button onClick={() => handleDeleteClick(item._id)}>
                    Delete
                  </Button>
                  <Button onClick={() => handleEditClick(item)}>Edit</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        {/* EDIT BUTTON  */}
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Edit Product</ModalHeader>
          <ModalBody>
            <input
              value={formdata.p_code}
              type='text'
              name='p_code'
              placeholder='code'
              onChange={e => handleChange(e)}
            />
            <input
              value={formdata.p_name}
              type='text'
              name='p_name'
              placeholder='name'
              onChange={e => handleChange(e)}
            />
            <input
              value={formdata.p_price}
              type='text'
              name='p_price'
              placeholder='price'
              onChange={e => handleChange(e)}
            />
            <input
              value={formdata.p_description}
              type='text'
              name='p_description'
              placeholder='des'
              onChange={e => handleChange(e)}
            />
            <input
              value={formdata.rating}
              type='text'
              name='rating'
              placeholder='rating'
              onChange={e => handleChange(e)}
            />
            <input
              value={formdata.dimension}
              type='text'
              name='dimension'
              placeholder='dim'
              onChange={e => handleChange(e)}
            />
            <input
              value={formdata.quantity}
              type='text'
              name='quantity'
              placeholder='quantity'
              onChange={e => handleChange(e)}
            />
            <input
              value={formdata.p_image}
              type='text'
              name='p_image'
              placeholder='image'
              onChange={e => handleChange(e)}
            />
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={handleSave}>
              Save
            </Button>
            <Button color='secondary' onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>

        {/* ADD PRUDUCT */}
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>ADD Product</ModalHeader>

          <ModalBody>
            <input
              type='text'
              name='p_code'
              placeholder='code'
              onChange={e => handleAdd()}
            />

            <input
              type='text'
              name='p_name'
              placeholder='name'
              onChange={e => handleAdd()}
            />

            <input
              type='text'
              name='p_price'
              placeholder='price'
              onChange={e => handleAdd(e)}
            />

            <input
              type='text'
              name='p_description'
              placeholder='des'
              onChange={e => handleAdd(e)}
            />

            <input
              type='text'
              name='rating'
              placeholder='rating'
              onChange={e => handleAdd(e)}
            />

            <input
              type='text'
              name='dimension'
              placeholder='dim'
              onChange={e => handleAdd(e)}
            />

            <input
              type='text'
              name='quantity'
              placeholder='quantity'
              onChange={e => handleAdd(e)}
            />

            <input
              type='text'
              name='p_image'
              placeholder='image'
              onChange={e => handleAdd(e)}
            />
          </ModalBody>

          <ModalFooter>
            <Button color='primary' onClick={handleSaveProduct}>
              Save
            </Button>
            <Button color='secondary' onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  )
}
export default ProuctList
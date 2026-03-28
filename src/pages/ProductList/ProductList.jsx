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

  const [editModal, setEditModal] = useState(false);
  const [addModal, setAddModal] = useState(false);

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
  const addToggle = () => setAddModal(!addModal)
  const editToggle = () => setEditModal(!editModal)

  const { token } = useSelector(state => state.loginReducer)


  //product list api call
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
    }
    fetched()
  }, [refresh])


  const handleEditClick = (product) => {
    setSelectedProduct(product)
    setEditModal(true)
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

  const handleEditChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value })
  }

  const handleEditSave = async () => {
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
    setEditModal(false)
  }

  const handleAddClick = product => {
    setItem(product)
    setAddModal(true)
  }

  const handleAddChange = e => {
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
    setAddModal(false)
  }

  const handleDeleteClick = async (id) => {
    const res = await fetch(
      `https://enterprise-admin-backend.onrender.com/api/products/${id}`,
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
  }

  const handleAddWishList = async id => {
    const wish = await fetch(
      `https://enterprise-admin-backend.onrender.com/api/wishlist/${id}`,
      {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    const s_data = await wish.json()
    setRefresh(Math.random() + new Date())
  }
  return (
    <>
      <div>
        <Button
          className='btn btn-primary d-flex flex-end my-4 mx-5'
          onClick={() => handleAddClick(product)}
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
            {product?.map((item, index) => (
              <tr key={item._id}>
                <th scope='row'>{index + 1}</th>
                <td>{item.p_code}</td>
                <td>{item.p_name}</td>
                <td>
                  <Button onClick={() => handleDeleteClick(item._id)}>
                    Delete
                  </Button>
                  &nbsp;
                  <Button onClick={() => handleEditClick(item)}>Edit</Button>
                  &nbsp;
                  <Button onClick={() => handleAddWishList(item._id)}>
                    {item.wishlist ? 'wishlist' : 'not wishlist'}
                  </Button>
                  &nbsp;
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        {/* EDIT BUTTON  */}
        <Modal isOpen={editModal} toggle={editToggle}>
          <ModalHeader toggle={editToggle}>Edit Product</ModalHeader>
          <ModalBody>
            <input
              value={formdata.p_code}
              type='text'
              name='p_code'
              placeholder='code'
              onChange={(e) => handleEditChange(e)}
            />
            <input
              value={formdata.p_name}
              type='text'
              name='p_name'
              placeholder='name'
              onChange={(e) => handleEditChange(e)}
            />
            <input
              value={formdata.p_price}
              type='text'
              name='p_price'
              placeholder='price'
              onChange={(e) => handleEditChange(e)}
            />
            <input
              value={formdata.p_description}
              type='text'
              name='p_description'
              placeholder='des'
              onChange={(e) => handleEditChange(e)}
            />
            <input
              value={formdata.rating}
              type='text'
              name='rating'
              placeholder='rating'
              onChange={(e) => handleEditChange(e)}
            />
            <input
              value={formdata.dimension}
              type='text'
              name='dimension'
              placeholder='dim'
              onChange={(e) => handleEditChange(e)}
            />
            <input
              value={formdata.quantity}
              type='text'
              name='quantity'
              placeholder='quantity'
              onChange={(e) => handleEditChange(e)}
            />
            <input
              value={formdata.p_image}
              type='text'
              name='p_image'
              placeholder='image'
              onChange={(e) => handleEditChange(e)}
            />
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={handleEditSave}>
              Save
            </Button>
            <Button color='secondary' onClick={editToggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>

        {/* ADD PRUDUCT */}
        <Modal isOpen={addModal} toggle={addToggle}>
          <ModalHeader toggle={addToggle}>ADD Product</ModalHeader>

          <ModalBody>
            <input
              type='text'
              name='p_code'
              placeholder='code'
              onChange={handleAddChange}
            />

            <input
              type='text'
              name='p_name'
              placeholder='name'
              onChange={handleAddChange}
            />

            <input
              type='text'
              name='p_price'
              placeholder='price'
              onChange={handleAddChange}
            />

            <input
              type='text'
              name='p_description'
              placeholder='des'
              onChange={handleAddChange}
            />

            <input
              type='text'
              name='rating'
              placeholder='rating'
              onChange={handleAddChange}
            />

            <input
              type='text'
              name='dimension'
              placeholder='dim'
              onChange={handleAddChange}
            />

            <input
              type='text'
              name='quantity'
              placeholder='quantity'
              onChange={handleAddChange}
            />

            <input
              type='text'
              name='p_image'
              placeholder='image'
              onChange={handleAddChange}
            />
          </ModalBody>

          <ModalFooter>
            <Button color='primary' onClick={handleSaveProduct}>
              Save
            </Button>
            <Button color='secondary' onClick={addToggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  )
}
export default ProuctList

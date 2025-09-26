import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [updatedProduct, setUpdatedProduct] = useState({
    name: { en: "", am: "", ti: "" },
    description: { en: "", am: "", ti: "" },
    image: null,
    available: true,
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const { data } = await axios.get('/api/products', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setUpdatedProduct({
      name: product.name || { en: "", am: "", ti: "" },
      description: product.description || { en: "", am: "", ti: "" },
      image: null,
      available: product.available !== undefined ? product.available : true,
    });
    setShowEditModal(true);
  };

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", JSON.stringify(updatedProduct.name));
    formData.append("description", JSON.stringify(updatedProduct.description));
    formData.append("available", updatedProduct.available);
    if (updatedProduct.image) {
      formData.append("image", updatedProduct.image);
    }
    try {
      const token = localStorage.getItem('adminToken');
      await axios.put(`/api/admin/products/${editingProduct._id}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setShowEditModal(false);
      fetchProducts();
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const handleInputChange = (e, field, lang) => {
    setUpdatedProduct({
      ...updatedProduct,
      [field]: { ...updatedProduct[field], [lang]: e.target.value },
    });
  };

  return (
    <Container>
      <h1>Admin Dashboard - Products</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name (EN)</th>
            <th>Description (EN)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.name?.en}</td>
              <td>{product.description?.en}</td>
              <td>
                <Button variant="primary" onClick={() => handleEdit(product)}>
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUpdateProduct}>
            <Form.Group>
              <Form.Label>Name (EN)</Form.Label>
              <Form.Control
                type="text"
                value={updatedProduct.name.en}
                onChange={(e) => handleInputChange(e, 'name', 'en')}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Name (AM)</Form.Label>
              <Form.Control
                type="text"
                value={updatedProduct.name.am}
                onChange={(e) => handleInputChange(e, 'name', 'am')}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Name (TI)</Form.Label>
              <Form.Control
                type="text"
                value={updatedProduct.name.ti}
                onChange={(e) => handleInputChange(e, 'name', 'ti')}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description (EN)</Form.Label>
              <Form.Control
                as="textarea"
                value={updatedProduct.description.en}
                onChange={(e) => handleInputChange(e, 'description', 'en')}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description (AM)</Form.Label>
              <Form.Control
                as="textarea"
                value={updatedProduct.description.am}
                onChange={(e) => handleInputChange(e, 'description', 'am')}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description (TI)</Form.Label>
              <Form.Control
                as="textarea"
                value={updatedProduct.description.ti}
                onChange={(e) => handleInputChange(e, 'description', 'ti')}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.files[0] })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Check
                type="checkbox"
                label="Available"
                checked={updatedProduct.available}
                onChange={(e) => setUpdatedProduct({ ...updatedProduct, available: e.target.checked })}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default AdminDashboard;
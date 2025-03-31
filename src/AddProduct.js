import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    title: "",
    image: "",
    price: "",
    description: "",
    likes: 0, // Default value
    date_created: "",
    date_updated: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch("http://localhost:8000/api/products/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((newProduct) => {
        console.log("Product created:", newProduct);
        navigate("/products"); // Redirect to product list
      })
      .catch((error) => {
        console.error("Error adding product:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="container">
      <h4>Add New Product</h4>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <input type="text" name="title" value={product.title} onChange={handleChange} required />
          <label className="active">Title</label>
        </div>

        <div className="input-field">
          <input type="text" name="image" value={product.image} onChange={handleChange} />
          <label className="active">Image URL</label>
        </div>

        <div className="input-field">
          <input type="number" name="price" value={product.price} onChange={handleChange} required />
          <label className="active">Price</label>
        </div>

        <div className="input-field">
          <textarea name="description" className="materialize-textarea" value={product.description} onChange={handleChange} required></textarea>
          <label className="active">Description</label>
        </div>

        <div className="input-field">
            <input type="date" name="date_created" value={product.date_created} onChange={handleChange} required />
            <label className="active">Cretaed At</label>
        </div>

        <div className="input-field">
            <input type="date" name="date_updated" value={product.date_updated} onChange={handleChange} required />
            <label className="active">Cretaed At</label>
        </div>

        <button type="submit" className="btn blue darken-1" disabled={loading}>
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;

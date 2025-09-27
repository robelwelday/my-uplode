import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

function AdminDashboard() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newProduct, setNewProduct] = useState({
    name: { en: "", am: "", ti: "" },
    description: { en: "", am: "", ti: "" },
    price: "",
    image: null,
  });
  const [newNews, setNewNews] = useState({
    title: {},
    content: {},
    coverImage: null,
  });
  const [editingProduct, setEditingProduct] = useState(null); // Track the product being edited
  const [updatedProduct, setUpdatedProduct] = useState(null); // State for edited product fields
  const [editingNews, setEditingNews] = useState(null); // Track the news being edited
  const [updatedNews, setUpdatedNews] = useState(null); // State for edited news fields

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/admin/login");
      return;
    }

    setLoading(true);
    setError(null);
    Promise.all([
      api.get("/api/products").then((res) => setProducts(res.data)).catch((err) => { throw new Error('Failed to load products'); }),
      api.get("/api/news").then((res) => setNews(res.data)).catch((err) => { throw new Error('Failed to load news'); })
    ]).catch((err) => {
      setError(err.message);
    }).finally(() => setLoading(false));
  }, [navigate]);

  const handleDeleteProduct = async (id) => {
    try {
      const token = localStorage.getItem("adminToken"); // Retrieve the token
      await api.delete(`/api/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` }, // Include the token in the headers
      });
      setProducts((prev) => prev.filter((p) => p._id !== id)); // Update state correctly
    } catch (err) {
      console.error("Failed to delete product:", err);
    }
  };

  const handleDeleteNews = async (id) => {
    try {
      const token = localStorage.getItem("adminToken"); // Retrieve the token
      await api.delete(`/api/news/${id}`, {
        headers: { Authorization: `Bearer ${token}` }, // Include the token in the headers
      });
      setNews((prev) => prev.filter((n) => n._id !== id)); // Update state correctly
    } catch (err) {
      console.error("Failed to delete news:", err);
    }
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", JSON.stringify(newProduct.name)); // Stringify the name object
    formData.append("description", JSON.stringify(newProduct.description)); // Stringify the description object
    formData.append("price", newProduct.price);
    if (newProduct.image) {
      formData.append("image", newProduct.image); // Ensure image is appended
    }

    console.log("FormData for product:", Object.fromEntries(formData)); // Debugging: Log FormData

    try {
      const token = localStorage.getItem("adminToken"); // Ensure token is included
      const res = await api.post("/api/products", formData, {
        headers: {
          Authorization: `Bearer ${token}`, // Include Authorization header
        },
      });
      setProducts((prev) => [...prev, res.data]); // Update state correctly
      setNewProduct({
        name: { en: "", am: "", ti: "" },
        description: { en: "", am: "", ti: "" },
        price: "",
        image: null,
      });
      e.target.reset(); // Reset the form
    } catch (err) {
      console.error("Failed to add product:", err.response?.data || err.message);
    }
  };

  const handleAddNews = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", JSON.stringify(newNews.title)); // Stringify the title object
    formData.append("content", JSON.stringify(newNews.content)); // Stringify the content object
    if (newNews.coverImage) {
      formData.append("coverImage", newNews.coverImage); // Ensure coverImage is appended
    }

    console.log("FormData for news:", Object.fromEntries(formData)); // Debugging: Log FormData

    try {
      const token = localStorage.getItem("adminToken"); // Ensure token is included
      const res = await api.post("/api/news", formData, {
        headers: {
          Authorization: `Bearer ${token}`, // Include Authorization header
        },
      });
      setNews((prev) => [...prev, res.data]); // Update state correctly
      setNewNews({
        title: {},
        content: {},
        coverImage: null,
      });
      e.target.reset(); // Reset the form
    } catch (err) {
      console.error("Failed to add news:", err.response?.data || err.message);
    }
  };

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    if (!editingProduct) return;

    const formData = new FormData();
    formData.append("name", JSON.stringify(updatedProduct.name));
    formData.append("description", JSON.stringify(updatedProduct.description));
    if (updatedProduct.image instanceof File) {
      formData.append("image", updatedProduct.image);
    }

    try {
      const token = localStorage.getItem("adminToken");
      const res = await api.patch(
        `/api/products/${editingProduct._id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setProducts((prev) =>
        prev.map((p) => (p._id === editingProduct._id ? res.data : p))
      );
      setEditingProduct(null);
      setUpdatedProduct(null);
    } catch (err) {
      console.error("Failed to update product:", err.response?.data || err.message);
    }
  };

  const handleUpdateNews = async (e) => {
    e.preventDefault();
    if (!editingNews) return;

    const formData = new FormData();
    formData.append("title", JSON.stringify(updatedNews.title));
    formData.append("content", JSON.stringify(updatedNews.content));
    if (updatedNews.coverImage instanceof File) {
      formData.append("coverImage", updatedNews.coverImage);
    }

    try {
      const token = localStorage.getItem("adminToken");
      const res = await api.patch(`/api/news/${editingNews._id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      setNews((prev) =>
        prev.map((n) => (n._id === editingNews._id ? res.data : n))
      );
      setEditingNews(null);
      setUpdatedNews(null);
    } catch (err) {
      console.error("Failed to update news:", err.response?.data || err.message);
    }
  };

  const handleToggleAvailability = async (id, currentStatus) => {
    try {
      const token = localStorage.getItem("adminToken");
      const res = await api.put(
        `/api/products/${id}/toggle-availability`,
        { available: !currentStatus },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setProducts((prev) =>
        prev.map((p) => (p._id === id ? { ...p, available: res.data.available } : p))
      );
    } catch (err) {
      console.error("Failed to toggle availability:", err.response?.data || err.message);
    }
  };

  if (loading) return <p className="text-center text-lg text-gray-600 animate-pulse">Loading...</p>;
  if (error) return <p className="text-center text-red-500 text-lg bg-red-100 p-4 rounded-lg shadow-md">{error}</p>;

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-8 text-center">Admin Dashboard</h2>

      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Manage Products</h3>
        <form onSubmit={handleAddProduct} className="bg-white p-6 rounded shadow mb-6">
          <h4 className="text-xl font-bold mb-4">Add New Product</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Name (English)"
              onChange={(e) => setNewProduct({ ...newProduct, name: { ...newProduct.name, en: e.target.value } })}
              required
              className="p-3 border rounded"
            />
            <input
              type="text"
              placeholder="Name (Amharic)"
              onChange={(e) => setNewProduct({ ...newProduct, name: { ...newProduct.name, am: e.target.value } })}
              required
              className="p-3 border rounded"
            />
            <input
              type="text"
              placeholder="Name (Tigrinya)"
              onChange={(e) => setNewProduct({ ...newProduct, name: { ...newProduct.name, ti: e.target.value } })}
              required
              className="p-3 border rounded"
            />
            <textarea
              placeholder="Description (English)"
              onChange={(e) => setNewProduct({ ...newProduct, description: { ...newProduct.description, en: e.target.value } })}
              required
              className="p-3 border rounded md:col-span-3"
            ></textarea>
            <textarea
              placeholder="Description (Amharic)"
              onChange={(e) => setNewProduct({ ...newProduct, description: { ...newProduct.description, am: e.target.value } })}
              required
              className="p-3 border rounded md:col-span-3"
            ></textarea>
            <textarea
              placeholder="Description (Tigrinya)"
              onChange={(e) => setNewProduct({ ...newProduct, description: { ...newProduct.description, ti: e.target.value } })}
              required
              className="p-3 border rounded md:col-span-3"
            ></textarea>
            <input
              type="number"
              placeholder="Price"
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
              required
              className="p-3 border rounded"
            />
            <input
              type="file"
              onChange={(e) => setNewProduct({ ...newProduct, image: e.target.files[0] })}
              required
              className="p-3 border rounded md:col-span-2"
            />
          </div>
          <button type="submit" className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Add Product</button>
        </form>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product._id} className="bg-white p-4 rounded shadow">
              <h4 className="text-lg font-bold break-words whitespace-pre-wrap">
                {product.name?.en || "Unnamed Product"}
              </h4>
              <p className="text-gray-600">Price: Birr {product.price || "N/A"}</p>
              <p className={`mt-2 text-sm font-bold ${product.available ? "text-green-500" : "text-red-500"}`}>
                {product.available ? "Available" : "Unavailable"}
              </p>
              <div className="flex space-x-2 mt-2">
                <button
                  onClick={() => handleToggleAvailability(product._id, product.available)}
                  className="text-blue-600 hover:underline"
                >
                  Toggle Availability
                </button>
                <button
                  onClick={() => {
                    setEditingProduct(product);
                    setUpdatedProduct({ ...product });
                  }}
                  className="text-green-600 hover:underline"
                >
                  Edit
                </button>
                <button onClick={() => handleDeleteProduct(product._id)} className="text-red-600 hover:underline">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Edit Product Form */}
        {editingProduct && updatedProduct && (
          <form
            onSubmit={handleUpdateProduct}
            className="bg-white p-6 rounded shadow my-6"
          >
            <h4 className="text-xl font-bold mb-4">Edit Product: {editingProduct.name?.en}</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Name inputs */}
              <input type="text" value={updatedProduct.name.en} onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: { ...updatedProduct.name, en: e.target.value } })} className="p-3 border rounded" placeholder="Name (English)" />
              <input type="text" value={updatedProduct.name.am} onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: { ...updatedProduct.name, am: e.target.value } })} className="p-3 border rounded" placeholder="Name (Amharic)" />
              <input type="text" value={updatedProduct.name.ti} onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: { ...updatedProduct.name, ti: e.target.value } })} className="p-3 border rounded" placeholder="Name (Tigrinya)" />
              {/* Description inputs */}
              <textarea value={updatedProduct.description.en} onChange={(e) => setUpdatedProduct({ ...updatedProduct, description: { ...updatedProduct.description, en: e.target.value } })} className="p-3 border rounded md:col-span-3" placeholder="Description (English)"></textarea>
              <textarea value={updatedProduct.description.am} onChange={(e) => setUpdatedProduct({ ...updatedProduct, description: { ...updatedProduct.description, am: e.target.value } })} className="p-3 border rounded md:col-span-3" placeholder="Description (Amharic)"></textarea>
              <textarea value={updatedProduct.description.ti} onChange={(e) => setUpdatedProduct({ ...updatedProduct, description: { ...updatedProduct.description, ti: e.target.value } })} className="p-3 border rounded md:col-span-3" placeholder="Description (Tigrinya)"></textarea>
              {/* Image input */}
              <input type="file" onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.files[0] })} className="p-3 border rounded md:col-span-3" />
            </div>
            <div className="mt-4 flex space-x-4">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                Update Product
              </button>
              <button
                type="button"
                onClick={() => {
                  setEditingProduct(null);
                  setUpdatedProduct(null);
                }}
                className="bg-gray-300 px-6 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Manage News</h3>
        <form onSubmit={handleAddNews} className="bg-white p-6 rounded shadow mb-6">
          <h4 className="text-xl font-bold mb-4">Add New News</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Title (English)"
              onChange={(e) => setNewNews({ ...newNews, title: { ...newNews.title, en: e.target.value } })}
              required
              className="p-3 border rounded"
            />
            <input
              type="text"
              placeholder="Title (Amharic)"
              onChange={(e) => setNewNews({ ...newNews, title: { ...newNews.title, am: e.target.value } })}
              required
              className="p-3 border rounded"
            />
            <input
              type="text"
              placeholder="Title (Tigrinya)"
              onChange={(e) => setNewNews({ ...newNews, title: { ...newNews.title, ti: e.target.value } })}
              required
              className="p-3 border rounded"
            />
            <textarea
              placeholder="Content (English)"
              onChange={(e) => setNewNews({ ...newNews, content: { ...newNews.content, en: e.target.value } })}
              required
              className="p-3 border rounded md:col-span-3"
            ></textarea>
            <textarea
              placeholder="Content (Amharic)"
              onChange={(e) => setNewNews({ ...newNews, content: { ...newNews.content, am: e.target.value } })}
              required
              className="p-3 border rounded md:col-span-3"
            ></textarea>
            <textarea
              placeholder="Content (Tigrinya)"
              onChange={(e) => setNewNews({ ...newNews, content: { ...newNews.content, ti: e.target.value } })}
              required
              className="p-3 border rounded md:col-span-3"
            ></textarea>
            <input
              type="file"
              onChange={(e) => setNewNews({ ...newNews, coverImage: e.target.files[0] })}
              required
              className="p-3 border rounded md:col-span-3"
            />
          </div>
          <button type="submit" className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Add News</button>
        </form>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <div key={item._id} className="bg-white p-4 rounded shadow">
              <h4 className="text-lg font-bold break-words whitespace-pre-wrap">
                {item.title?.en || "Untitled News"}
              </h4>
              <div className="flex space-x-2 mt-2">
                <button
                  onClick={() => {
                    setEditingNews(item);
                    setUpdatedNews({ ...item });
                  }}
                  className="text-green-600 hover:underline"
                >
                  Edit
                </button>
                <button onClick={() => handleDeleteNews(item._id)} className="mt-2 text-red-600 hover:underline">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Edit News Form */}
        {editingNews && updatedNews && (
          <form
            onSubmit={handleUpdateNews}
            className="bg-white p-6 rounded shadow my-6"
          >
            <h4 className="text-xl font-bold mb-4">Edit News: {editingNews.title?.en}</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Title inputs */}
              <input type="text" value={updatedNews.title.en || ''} onChange={(e) => setUpdatedNews({ ...updatedNews, title: { ...updatedNews.title, en: e.target.value } })} className="p-3 border rounded" placeholder="Title (English)" />
              <input type="text" value={updatedNews.title.am || ''} onChange={(e) => setUpdatedNews({ ...updatedNews, title: { ...updatedNews.title, am: e.target.value } })} className="p-3 border rounded" placeholder="Title (Amharic)" />
              <input type="text" value={updatedNews.title.ti || ''} onChange={(e) => setUpdatedNews({ ...updatedNews, title: { ...updatedNews.title, ti: e.target.value } })} className="p-3 border rounded" placeholder="Title (Tigrinya)" />
              {/* Content inputs */}
              <textarea value={updatedNews.content.en || ''} onChange={(e) => setUpdatedNews({ ...updatedNews, content: { ...updatedNews.content, en: e.target.value } })} className="p-3 border rounded md:col-span-3" placeholder="Content (English)"></textarea>
              <textarea value={updatedNews.content.am || ''} onChange={(e) => setUpdatedNews({ ...updatedNews, content: { ...updatedNews.content, am: e.target.value } })} className="p-3 border rounded md:col-span-3" placeholder="Content (Amharic)"></textarea>
              <textarea value={updatedNews.content.ti || ''} onChange={(e) => setUpdatedNews({ ...updatedNews, content: { ...updatedNews.content, ti: e.target.value } })} className="p-3 border rounded md:col-span-3" placeholder="Content (Tigrinya)"></textarea>
              {/* Image input */}
              <input type="file" onChange={(e) => setUpdatedNews({ ...updatedNews, coverImage: e.target.files[0] })} className="p-3 border rounded md:col-span-3" />
            </div>
            <div className="mt-4 flex space-x-4">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                Update News
              </button>
              <button
                type="button"
                onClick={() => {
                  setEditingNews(null);
                  setUpdatedNews(null);
                }}
                className="bg-gray-300 px-6 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </section>
    </div>
  );
}

export default AdminDashboard;

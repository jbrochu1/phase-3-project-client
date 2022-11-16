import { useState } from "resct"
constProductForm = ({ onAddProduct }) => {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        category: "",
        price: "",
        img: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) => ({ ...formData, [name]: value }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({ ...formData })
        };
        fetch("http://localhost:9292/products", configObj)
            .then((resp) => resp.json())
            .then((product) => {
                onAddProduct(product);
                setFormData({
                    name: "",
                    description: "",
                    category: "",
                    price: "",
                    img: ""
                });
            });
    };
    return (
        <section>
            <form className="form" autoComplete="off" onSubmit={handleSubmit}>
                <h3>Add New Product</h3>

                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                />

                <label htmlFor="description">Description</label>
                <textarea
                    name="description"
                    onChange={handleChange}
                    value={formData.description} />

                <label htmlFor="category">Category</label>
                <select
                    name="category"
                    onChange={handleChange}
                    value={formData.type}
                >
                    <option value="">Type of Category</option>
                    <option value="1">Sprinkler</option>
                    <option value="2">Valve</option>
                    <option value="3">Pipe</option>
                </select>

                <label htmlFor="price">Price</label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    onChange={handleChange}
                    value={formData.price}
                />
                <label htmlFor="image">Image</label>
                <input
                    type="text"
                    id="image"
                    name="image"
                    onChange={handleChange}
                    value={formData.image} />

                <button type="submit">Add Wine</button>
            </form>
        </section>
    );
};

export default ProductFormAdd;

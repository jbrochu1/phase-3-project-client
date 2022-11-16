import React , { useState } from "react"
import ProductCard from "./ProductCard"


function AddProductForm ( { shown , setShown , allItems , setAllItems } ) {

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        category: "",
        price: "",
        img: ""
    })

    const shownCards = shown.map((item) =>{
        return (
                <ProductCard key={item.id} item={item} cart={false} admin={true} shown={shown} setShown={setShown} allItems={allItems} setAllItems={setAllItems}></ProductCard>
        )
     })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) => ({ ...formData, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:9292/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({ ...formData })
        })
            .then((r) => r.json())
                setAllItems([...allItems , formData])
                setShown([...shown , formData])
                setFormData({
                    name: "",
                    description: "",
                    category: "",
                    price: "",
                    img: ""
                });
    };

    return (
        <>
            <div id="inputForm">
                <form className="form" autoComplete="off" onSubmit={handleSubmit}>
                    <h3>Add New Product</h3>

                    <label htmlFor="name">Name</label><br></br>
                    <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        value={formData.name}
                    />
                    <br></br>

                    <label htmlFor="description">Description</label><br></br>
                    <input
                    type="text"
                    name="description"
                    onChange={handleChange}
                    value={formData.descrption}
                    />
                    <br></br>

                    <label htmlFor="category">Category</label><br></br>
                    <select
                        name="category"
                        onChange={handleChange}
                        value={formData.type}
                    >
                        <option value=""></option>
                        <option value="Sprinkler">Sprinkler</option>
                        <option value="Valve">Valve</option>
                        <option value="Pipe">Pipe</option>
                        <option value="Other">Other</option>
                    </select>
                    <br></br>

                    <label htmlFor="price">Price</label><br></br>
                    <input
                        type="number"
                        name="price"
                        onChange={handleChange}
                        value={formData.price}
                    />
                    <br></br>

                    <label htmlFor="image">Image</label><br></br>
                    <input
                        type="text"
                        name="img"
                        onChange={handleChange}
                        value={formData.img} />
                        <br></br><br></br>

                    <button type="submit">Add Product</button>
                    <br></br><br></br>
                </form>
            </div>
            {shownCards}
        </>
    );
};

export default AddProductForm;


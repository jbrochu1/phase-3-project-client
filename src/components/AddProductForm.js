import React , { useState } from "react"
import ProductCard from "./ProductCard"


function AddProductForm ( { shown , setShown , allItems , setAllItems , cartItems , setCartItems} ) {

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        category: "",
        price: "",
        img: ""
    })

    const shownCards = shown.map((item) =>{
        return (
                <ProductCard key={item.id} item={item} cartItems={cartItems} setCartItems={setCartItems} admin={true} shown={shown} setShown={setShown} allItems={allItems} setAllItems={setAllItems}></ProductCard>
        )
     })

    function handleChange (e) {
        const { name, value } = e.target;
        setFormData((formData) => ({ ...formData, [name]: value }));
    }

    function handleSubmit (e) {
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
        <div>
            <div className="flex flex-col justify-center items-center" id="inputForm">
                <form className="border border-red w-1/2 " autoComplete="off" onSubmit={handleSubmit}>
                    <h3 className="text-xl text-center">Add New Product</h3>

                    <label className="ml-10" htmlFor="name">Name</label><br></br>
                    <input
                        className="appearance-none w-3/4 bg-gray-200 text-gray-700 border border-red-500 rounded py-1 px-10 mb-2 ml-10 leading-tight focus:outline-none focus:bg-white"
                        type="text"
                        name="name"
                        onChange={handleChange}
                        value={formData.name}
                    />
                    <br></br>

                    <label className="ml-10" htmlFor="description">Description</label><br></br>
                    <input
                        className="appearance-none w-3/4 bg-gray-200 text-gray-700 border border-red-500 rounded py-1 px-10 mb-2 ml-10 leading-tight focus:outline-none focus:bg-white"
                        type="text"
                        name="description"
                        onChange={handleChange}
                        value={formData.descrption}
                    />
                    <br></br>

                    <label className="ml-10" htmlFor="category">Category</label><br></br>
                    <select
                        className="border bg-gray-200 w-1/4 border-red-500 rounded py-1 px-10 mb-2 ml-10"
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

                    <label className="ml-10" htmlFor="price">Price</label><br></br>
                    <input
                        className="appearance-none w-3/4 bg-gray-200 text-gray-700 border border-red-500 rounded py-1 px-2 mb-2 ml-10 leading-tight focus:outline-none focus:bg-white"
                        type="number"
                        name="price"
                        onChange={handleChange}
                        value={formData.price}
                    />
                    <br></br>

                    <label className="ml-10" htmlFor="image">Image</label><br></br>
                    <input
                        className="appearance-none w-3/4 bg-gray-200 text-gray-700 border border-red-500 rounded py-1 px-2 mb-2 ml-10 leading-tight focus:outline-none focus:bg-white"
                        type="text"
                        name="img"
                        onChange={handleChange}
                        value={formData.img} />
                        <br></br><br></br>

                    <div className="flex flex-col items-center">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Add Product</button>
                    </div>
                    <br></br><br></br>
                </form>
            </div>
            <div className="p-10">
                {shownCards}
            </div>
        </div>
    );
};

export default AddProductForm;


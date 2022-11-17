import React , { useState , useEffect } from "react"
import { Link } from "react-router-dom"


function NavBar( { allItems , setShown , cartItems , allUsers , currentUser , setCurrentUser } ) {

    const [search, setSearch] = useState("")

    function handleChange(e) {
        setCurrentUser({
            name: `${e.target.value}`,
            id: allUsers.find((user) => user.name === e.target.value).id,
            admin: allUsers.find((user) => user.name === e.target.value).admin?true:false
        })
    }
    
    function handleInput(e) {
        setSearch(e.target.value)
    }

    useEffect(() => {
        setShown(allItems.filter((item) => {
            return (
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.description.toLowerCase().includes(search.toLowerCase())
            )
        }))
        }, [search])

        let Logo = require('../flatiron-fire-supplies-high-resolution-color-logo.png');

return(
 <>
    <div id="navBar">
        <div class="inline-block relative w-64">
            <Link to="/" ><img id="homeImage" alt="home" src={Logo}/></Link>
                <select onChange={handleChange} class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
{allUsers.map((user) => (
                    <option key={user.name} multiple={true} value={user.name}>
                            {user.name}
                        </option>
                        ))}
                </select>

                <input type="text" className="searchBar" onChange={handleInput} placeholder="Search..."/>
                <Link to="/orderhistory"> Order History </Link>
                         
                         <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                         <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
                    <form class="w-full max-w-sm">
                        <div class="text-center border-b border-teal-500 py-2">
                        <input type="text" className="searchBar" onChange={handleInput} class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none text-center" placeholder="Search..." aria-label="Full name">
                         </input>
                    </div>
                </form>
                <Link className="floatRight" to="/cart"> Cart ({cartItems.length})</Link>
                {currentUser.admin ? <><Link to="/admin-inventory" className="floatRight"> Manage Inventory </Link> <br></br> </> : null}
            </div>
        </>
    )
}

export default NavBar
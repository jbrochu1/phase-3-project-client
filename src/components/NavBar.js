import React , { useState , useEffect } from "react"
import { Link } from "react-router-dom"

function NavBar( { allItems , setShown , cartItems , allUsers , currentUser , setCurrentUser } ) {

    const [search, setSearch] = useState("")

    function handleChange(e) {
        setCurrentUser({
            name: `${e.target.value}`,
            admin: (e.target.value ==="admin") ///needs rewriting eventually
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


    return(
        <>
            <div id="navBar">

                <Link to="/" ><img id="homeImage" alt="home" src="https://upload.wikimedia.org/wikipedia/commons/6/61/FS_wiki.png"/></Link>

                <select onChange={handleChange}>
                    {allUsers.map((user) => (
                        <option key={user.name} multiple={true} value={user.name}>
                            {user.name}
                        </option>
                        ))}
                </select>

                <input type="text" className="searchBar" onChange={handleInput} placeholder="Search..."/>

                <Link className="floatRight" to="/cart"> Cart ({cartItems.length})</Link>

                {currentUser.admin ? <><Link to="/admin-inventory" className="floatRight"> Manage Inventory </Link> <br></br> </> : null}

            </div>
        </>
    )


}

export default NavBar
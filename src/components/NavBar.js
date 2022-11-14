import React , { useState , useEffect } from "react"
import { Link } from "react-router-dom"

function NavBar( { allItems , setShown } ) {

    const [search, setSearch] = useState("")

    function handleInput(e) {
        setSearch(e.target.value)
    }

    useEffect(() =>{
        setShown(allItems.filter((item) => (
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.description.toLowerCase().includes(search.toLowerCase())
             )))
        }, [search])


    return(
        <>
            <div id="navBar">
                <Link to="/" ><img id="homeImage" src="https://upload.wikimedia.org/wikipedia/commons/6/61/FS_wiki.png"/></Link>

                <input type="text" className="searchBar" onChange={handleInput} placeholder="Search..."/>

                <Link className="floatRight" to="/cart"> Cart </Link>
            </div>
        </>
    )


}

export default NavBar
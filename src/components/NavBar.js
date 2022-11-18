import React , { useState , useEffect } from "react"
import { Link } from "react-router-dom"


export default function NavBar( { allItems , setShown , cartItems , allUsers , currentUser , setCurrentUser, admin } ) {

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
        
        return (

            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li><a><Link to="/orderhistory"> Order History</Link></a></li>
        <li><a><Link className="floatRight" to="/cart"> Cart ({cartItems.length})</Link></a></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
  <div className="dropdown">
  <label tabIndex={0} className="btn m-1">Choose User</label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <select onChange={handleChange}>
        {allUsers.map((user) => (
                           <option key={user.name} multiple={true} value={user.name}>
                                   {user.name}
                               </option>
                               ))}
                       </select>
                       {currentUser.admin ? <><Link to="/admin-inventory" className="floatRight"> Manage Inventory </Link> <br></br> </> : null}
  </ul>
</div>
    <a><Link to="/"className="btn btn-ghost normal-case color Red">Flatiron Fire Supplies</Link></a> 
  </div>
  <div className="navbar-end">
    <button className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      <input type="text" className="searchBar" onChange={handleInput} placeholder="Search..."/>
    </button>
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
  </div>
</div>
)}
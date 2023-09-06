import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "../index.css";

export function Header() {
    const [showMenu, setMenu] = useState(false);
    const [isLogin, setLogin] = useState(false);
    const navigate = useNavigate()
    function handleProfileMenu() {
        setMenu(pre => !pre)
    }
    function checkLogin(e) {
        if (localStorage.getItem('token')) {
            setLogin(val => true)
        } else {
            e.preventDefault()
            alert('please login first');
            navigate('/')
        }
    }
    function handleLogout() {
        localStorage.removeItem('userDetails')
        localStorage.removeItem('token')
        localStorage.removeItem('products')

    }
    function handleHome() {
        console.log("HI handle home");
    }
    return (

        <div>
            <nav className="navbar navbar-inverse" style={{ backgroundColor: 'palegoldenrod' }}>
                <div className="container-fluid">
                    <div className="navbar-header">
                        Book Store
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><Link to={'/dashboard'} onClick={checkLogin}> Home </Link></li>
                        {/* <li> <Link to={'/menu'}>Menu</Link></li> */}
                        {/* <li>  <Link to={'/about'}>About</Link></li> */}
                        <li><Link to={'/contact'} onClick={checkLogin}>Contact</Link></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li> Cart</li>
                        <li><Link to={'/'} onClick={handleLogout}>Logout</Link></li>
                    </ul>
                </div>
            </nav >

        </div >


    )
}
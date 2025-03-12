import { Link } from "react-router-dom"
const Header = () => {
    return (
        <header>
            <div className="logo">
                <span>Цт-31 (ЦТ-21 с.т.)</span>
            </div>
            <nav>
                {/* <a href="#">Home</a>
                <a href="#">About</a> */}
                <Link to="/"> Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contacts">Contacts</Link>
            </nav>

        </header>
    )
}
export default Header;
import { Link } from "react-router-dom";
import FieldCounter from "./counters/FieldCounter";
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
                <Link to="/counter">Counter Context</Link>
                <Link to="/contacts">Contacts</Link>
                <Link to="/books">books</Link>
            </nav>
            <div>COUNT: <FieldCounter/> </div>

        </header>
    )
}
export default Header;
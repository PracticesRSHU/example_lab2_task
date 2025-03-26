import "./css/books.css";
import { Link, useOutletContext } from "react-router-dom";
const BooksList = () => {
    const [books, setBooks]=useOutletContext();
    return (
        <div className="books">
            <Link to="newbook">New Book</Link>
            <table className="book-tables">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>pages</th>
                        <th>imegas</th>
                        <th>edit</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map((b)=>(
                                <tr>
                                    <td>{b.id}</td>
                                    <td><Link to={`${b.id}`}>{b.title}</Link></td>
                                    <td>{b.pages}</td>
                                    <td><img style={{ width: "100px" }} src={b.path} /></td>
                                    <td><Link to={`edit/${b.id}`}>Edit</Link></td>
                                    <td>delete</td>

                                </tr>
                            )
                        )
                        // books.map(function (b) {
                        //     return (
                        //         <tr>
                        //             <td>{b.id}</td>
                        //             <td>{b.title}</td>
                        //             <td>{b.pages}</td>
                        //             <td><img style={{ width: "100px" }} src={b.path} /></td>
                        //         </tr>
                        //     );
                        // }
                        // )
                    }

                </tbody>
            </table>
        </div>
    );
}
export default BooksList;
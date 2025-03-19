import { useOutletContext, useParams, Link } from "react-router-dom";
export default function Book() {
    // console.log(useParams());
    //parsing  dynamic URL
    let { id } = useParams();
    const [books, setBooks] = useOutletContext();
    // const book={
    //     id: 1,
    //     title: "Harry Potter",
    //     pages: 675,
    //     path: "https://static.yakaboo.ua/media/catalog/product/4/1/41_1_131.jpg"
    // }
    const book = books.find(b => b.id === parseInt(id));
    return (<>
        <div className="card-book">
            <h3>{book.id} {book.title}</h3>
            <p> {book.pages} pages</p>
            <img style={{ width: "200px" }} src={book.path} />
            <p><Link to="..">Назад</Link></p>
        </div>

    </>);
}
import { useNavigate, useOutletContext } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
const EditBook = () => {
    const { id } = useParams();
    const [books, setBooks] = useOutletContext();
    const navigate = useNavigate();
    const book = books.find(b => b.id === parseInt(id));
    // ===========================3. using react hook form => useForm============
    const { register, handleSubmit } = useForm({
        defaultValues: {
            id: book.id,
            title: book.title,
            pages: book.pages,
            path: book.path
        }
    });

    const onSubmited = (updateBook) => {
        console.log(updateBook)
        let updateBooks = books.map(book => {
            if (parseInt(updateBook.id) === book.id) return updateBook;
            return book;
        })
        setBooks(updateBooks);
        console.log(updateBooks);
        navigate('/books');

    }

    return (
        <div className="form-newbook">
            <form onSubmit={handleSubmit(onSubmited)}>
                <div className="container-input">
                    <label>Id:
                        <input  {...register("id")} id="id" type="text" name="id" disabled />
                    </label>
                </div>
                <div className="container-input">
                    <label>Title:
                        <input  {...register("title")} id="title" type="text" name="title" required />
                    </label>
                </div>
                <div className="container-input">
                    <label>Pages:
                        <input {...register("pages")} id="number" type="number" name="pages" />
                    </label>
                </div>
                <div className="container-input">
                    <label>Path:
                        <input {...register("path")} id="path" type="text" name="path" />
                    </label>
                </div>
                <div className="container-button">
                    <input type="submit" value="Add Book" />
                </div>
            </form>

        </div>

    );
}

export default EditBook;
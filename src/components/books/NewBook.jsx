import { useRef } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useForm } from "react-hook-form";
const NewBook = () => {
    const navigate=useNavigate();
    const [books, setBooks] = useOutletContext();
    console.log(books);
    let newBook = {
        id: 4,
        title: "",
        pages: 0,
        path: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"
    };

// ===========1. using  onChange event
    // const handle_Submit=(event)=>{
    //     //скасування реакції оброблювача за замовчуванням
    //     event.preventDefault();
    //     let inTitle=document.getElementById("title");
    //     console.dir(inTitle);
    //     console.log(inTitle.value);
    //     console.log(newBook);
    //     newBook.id=books.length+1;
    //     // const newBooks=[...books,newBook];
    //     setBooks([...books,newBook]);
    // }

    const titleChange=(event)=>{
        console.log(event.target.value);
        newBook.title=event.target.value;
    }

    const pagesChange=(event)=>{
        console.log(event.target.value);
        newBook.pages=event.target.value;
    }
    const pathChange=(event)=>{
        console.log(event.target.value);
        newBook.path=event.target.value;
    }

    // ======================2. ref binding to input====
    // let titleRef=useRef("TitleTest");
    // let pagesRef=useRef(0);
    // let pathRef=useRef("https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png");
    // console.log(titleRef.current);
    // console.log(pagesRef.current);
    // const handle_Submit=(event)=>{
    //     //скасування реакції оброблювача за замовчуванням
    //     event.preventDefault();
    //     //read ref data
    //     newBook.id=books.length+1;
    //     console.dir(titleRef.current);
    //     newBook.title=titleRef.current.value;
    //     newBook.pages=pagesRef.current.value;
    //     newBook.path=pathRef.current.value;
    //     console.log(newBook);
    //    const newBooks=[...books,newBook];
    //     setBooks([...books,newBook]);
    // }
// ===========================3. using react hook form => useForm============
const {register,handleSubmit}=useForm();
// const onSubmited=(newBook1)=>{
//     console.dir({...register("title")});
//     console.log(newBook1)
//     newBook.id=books.length+1;
//     newBook.title=newBook1.title;
//     newBook.pages=newBook1.pages;
//     newBook.path=newBook1.path;
//     console.log(newBook);
//     setBooks([...books,newBook]);
// }

const onSubmited=(newBook)=>{
    console.dir({...register("title")});
    console.log(newBook)
    newBook.id=books.length+1;
    console.log(newBook);
    setBooks([...books,newBook]);
    navigate("/books");

}

    return (
        <div className="form-newbook">
            {/* <form  onSubmit={handle_Submit}> */}
            <form  onSubmit={handleSubmit(onSubmited)}>
            <div className="container-input">
                <label>Title: 
                    {/* <input id="title" type="text" name="title" onChange={titleChange} required/> */}
                    {/* <input  ref={titleRef} id="title" type="text" name="title" required/> */}
                    <input  {...register("title")} id="title" type="text" name="title" required/>
                </label>
            </div>
            <div className="container-input">
                <label>Pages: 
                    {/* <input id="number" type="number" name="pages"  onChange={pagesChange} /> */}
                    {/* <input ref={pagesRef} id="number" type="number" name="pages" /> */}
                    <input {...register("pages")} id="number" type="number" name="pages" />
                </label>
            </div>
            <div className="container-input">
                <label>Path: 
                    {/* <input id="path" type="text" name="path" onChange={pathChange}/> */}
                    {/* <input ref={pathRef} id="path" type="text" name="path"/> */}
                    <input {...register("path")} id="path" type="text" name="path"/>
                </label>
            </div>
            <div className="container-button">
                    <input type="submit" value="Add Book"/>
            </div>
            </form>

        </div>

    );
}

export default NewBook;
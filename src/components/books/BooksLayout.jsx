import { Outlet } from "react-router-dom";
import { useState } from "react";
const BooksLayout = () => {
    const booksArrays = [
        {
            id: 1,
            title: "Harry Potter",
            pages: 675,
            path: "https://static.yakaboo.ua/media/catalog/product/4/1/41_1_131.jpg"
        },
        {
            id: 2,
            title: "Harry Potter 2",
            pages: 567,
            path: "https://static.yakaboo.ua/media/catalog/product/4/2/42_1_302.jpg"
        },
        {
            id: 3,
            title: "Harry Potter 3",
            pages: 456,
            path: "https://static.yakaboo.ua/media/catalog/product/1/2/128_1_4.jpg"
        }
    ]
    let [books, setBooks]=useState(booksArrays);

    return (
        <>
        <Outlet context={[books,setBooks]} />
        </>);
}


export default BooksLayout;

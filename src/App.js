
import './App.css';
import Header from './components/Header';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import { About } from './components/About';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import Contacts from './components/Contacts';
import News from './components/News';
import Book from './components/books/Book';
import BooksList from './components/books/BooksList';
import BooksLayout from './components/books/BooksLayout';
import NewBook from './components/books/NewBook';
import EditBook from './components/books/EditBook';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className='main-context'>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            
              {/* 
              <Route path="/books" element={<BooksList />} />
              <Route path="/books/:id" element={<Book />} />
               OR  =====*/}
               {/* /books/id */}
               {/* /books/newbook */}
               {/* /books/edit/id */}
              <Route path="/books" element={<BooksLayout/>}>
                <Route index element={<BooksList />} />
                <Route path=":id" element={<Book/>} />
                <Route path="newbook" element={<NewBook/>} />
                <Route path="edit/:id" element={<EditBook/>} />
              </Route>
              <Route path="/contacts" element={<Contacts />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <aside>
            <Routes location="/">
              <Route path="/" element={<News />} />
              {/* <Route  path="contacts" element={<Contacts/>} /> */}
            </Routes>
          </aside>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;


import './App.css';
import Header from './components/Header';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import { About } from './components/About';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import Contacts from './components/Contacts';
import News from './components/News';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className='main-context'>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contacts" element={<Contacts/>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <aside>
           <Routes>
              <Route path="*" element={<News/>} />
              <Route path="contacts" element={<Contacts/>} />
            </Routes>
          </aside>
        </div>
      <Footer/>  
      </BrowserRouter>
    </>
  );
}

export default App;

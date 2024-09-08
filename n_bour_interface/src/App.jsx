import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Home from './components/Home';
import Products from './components/Products';
import Lease from './components/lease';
const App =()=>{

  return(
    <div className='h-screen '>
      <Router>
      <header className=' bg-emerald-400 flex align-bottom w-screen text-white  h-8 md:h-12 lg:h-14 justify-between'>
        <div className="logo px-4 flex align-center text-center ">logo</div>
        <nav className=' px-12 flex ml-3 justify-evenly gap-4  md:text-xl '>
          <Link to="/" className="navbar hover:bg-green-100 hover:rounded  px-1py-6">home</Link>
          <Link to="/products" className="navbar hover:bg-green-100 hover:rounded  px-1py-6">products</Link>
          <Link to="/lease" className="navbar hover:bg-green-100 hover:rounded  px-1py-6">lease</Link>
        </nav>
      </header>
      <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/products' element={<Products />}/>
              <Route path="/lease" element={<Lease />} />
      </Routes>
    </Router>
      </div>

  )
}
export default App;

import './App.css';
import ShowProductos from './components/ShowProductos';
import EditProducto from './components/EditProducto';
import Home from './components/Home';
import NavBar from './Estructura/Nabvar';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBar />}>
            <Route index element={<Home />}></Route>
            <Route path='/productos' element={<ShowProductos />}></Route>

            <Route path='*' element={<Navigate replace to="/" />}></Route>
          </Route>
          <Route path='/editar/:id' element={<EditProducto />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


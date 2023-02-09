import './App.css';
import ShowProductos from './components/ShowProductos';
import CreateProducto from './components/CreateProducto';
import EditProducto from './components/EditProducto';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ShowProductos />}></Route>
          <Route path='/crear' element={<CreateProducto />}></Route>
          <Route path='/editar/:id' element={<EditProducto />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

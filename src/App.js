import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { NavBar } from './components/NavBar';
import { CartProvider } from "./contexts/CartContext";
import { CheckOut } from "./components/CheckOut";


function App() {
  return (
<CartProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/CheckOut" element={<CheckOut/>} />                                                         
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;



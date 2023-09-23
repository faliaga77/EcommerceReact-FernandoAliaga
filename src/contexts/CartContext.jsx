import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    const addItem = (product, quantity) =>
        setItems(prev => [...prev, { ...product, quantity }]);

    const totalWidget = items.reduce((acc, val) => acc + val.quantity, 0)

    const removeItem = id => {
        const itemsFiltered = items.filter(item => item.id !== id)
        setItems(itemsFiltered)
    }

    const clear = () => setItems([])

    return (
        <CartContext.Provider 
        value={{ addItem, items, removeItem, clear, totalWidget }}>
            {children}
        </CartContext.Provider>
    );

};
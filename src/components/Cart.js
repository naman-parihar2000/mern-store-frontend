import React from 'react'
import './Cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { incrementProduct, decrementProduct, removeProduct } from '../store/slices/cartSlice';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems)

    const dispatch = useDispatch()

    const handleIncrement = (itemId) => {
        dispatch(incrementProduct({ itemId, add: Number(1) }))
    }

    const handleDecrement = (itemId) => {
        const cartItem = cartItems.find((item) => item._id === itemId)
        if (cartItem.quantity > 1) {
            dispatch(decrementProduct({ itemId, subtract: Number(1) }))
        } else {
            dispatch(removeProduct({ itemId }))
        }
    }

    return (
        <div>
            <h1>Shopping Cart</h1>
            <div className='shopping-cart'>
                <div className="cart-items-container">
                    {cartItems.map((item) => (
                        <li key={item._id}>
                            <div>
                                <img src={item.thumbnail} alt="ProductImage" />
                            </div>
                            <div>
                                <h2>{item.title}</h2>
                                <div className="price">${item.price}</div>
                                <div>Quantity: {item.quantity}</div>
                                <button onClick={() => handleIncrement(item._id)} className='addButton'>+</button>
                                <button onClick={() => handleDecrement(item._id)}>-</button>
                            </div>
                        </li>
                    ))}
                </div>
                <div className='total-amount-container'>
                    <h2>TOTAL AMOUNT:</h2>
                    <h1>${cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2)}</h1>
                </div>
            </div>
        </div>
    )
}

export default Cart
import React from 'react'
// style={{ textAlign: 'justify' }}
const CartCards = ({ cartItem, handleIncreaseQty, handleDecreaseQty, handleRemoveFromCart, }) => {
    return <div className="cart-item" key={cartItem.id}>
        <div className="cart-product">
            <img src={cartItem.images[0]} alt="not" />
            <div >
                <h3>{cartItem.title}</h3>
                <p >{cartItem.secondaryTitle}</p>
                <p>{cartItem.category}</p>
                <button onClick={() => handleRemoveFromCart(cartItem.id)}>
                    Remove
                </button>
            </div>
        </div>
        <div className="cart-product-price">${cartItem.price}</div>
        <div className="cart-product-quantity">
            <button onClick={() => handleDecreaseQty(cartItem.id)}>
                -
            </button>
            <div className="count">{cartItem.quantity}</div>
            <button onClick={() => handleIncreaseQty(cartItem.id)}>+</button>
        </div>
        <div className="cart-product-total-price">
            ${cartItem.price * cartItem.quantity}
        </div>
    </div>
}

export default CartCards
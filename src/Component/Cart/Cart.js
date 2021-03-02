import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const player = cart[i];
        totalPrice = totalPrice + player.salary;
    }
    return (
        <div>
            <h3>total amount: {totalPrice}</h3>
        </div>
    );
};

export default Cart;
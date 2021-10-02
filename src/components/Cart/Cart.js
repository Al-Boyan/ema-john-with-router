import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    console.log(props.children)
    // const totalReducer = (previous, product) => previous + product.price;
    // const total = cart.reduce(totalReducer, 0);
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;
    return (
        <div className="cart">
            <h3 className="header">Order Summary</h3>
            <h5 className="header">Items Ordered: {totalQuantity}</h5>

            <table>
                <tbody>
                    <tr>
                        <td>Items</td>
                        <td>: ${total.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Shipping & Handiling</td>
                        <td>: ${shipping}</td>
                    </tr>
                    <tr>
                        <td>Tax</td>
                        <td>: ${tax.toFixed(2)}</td>
                    </tr>
                    <tr className="grand-total">
                        <td>Grand total</td>
                        <td>: ${grandTotal.toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>
            {
                props.children
            }
        </div>
    );
};

export default Cart;
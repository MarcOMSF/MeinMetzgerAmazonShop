import React from 'react';
import "./Subtotal.css";
import  CurrencyFormat  from 'react-currency-format';

function Subtotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat 
            renderText={(value) => (
                <>
                <p>
                    Subtotal (0 items): <strong>0</strong>
                </p>
                <small className="subtotal_gift">
                    <input type="checkbox" />This order contains a gift</small>
                    </>
            )}
            decimalScale={2}
            value={0}
            displayType={"text"}
            thousandSeperator={true}
            prefix={"€"}
            />

        <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
            /*npm i react-currency-format in 1:50:48  stattdessen hab i npm i currency-formatter installiert*/
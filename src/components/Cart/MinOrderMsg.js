import React from 'react';
import "./style.css"

function MinOrderMsg () {
    return (
        <div className="min-order-msg">
            Sorry, you can't order yet. MITA Berlin has set a minimum order amount of 5,00 € (excl. delivery costs)
        </div>
    )
}

export default MinOrderMsg;
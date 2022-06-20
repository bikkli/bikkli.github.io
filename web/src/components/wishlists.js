import React from 'react';

function Wishlists({pageContext: {wishlists}}) {
    const wishlistElements = [];
    
    wishlists.forEach((element, index) => {
        const items = [];
        
        element.items.forEach((item) => {
            items.push(<li>{item}</li>);
        });
        
        wishlistElements.push(
            <div key={index}>
                <h1>{element.title}</h1>
                <ul>
                    {items}
                </ul>
            </div>
        );
    });

    console.log(wishlists);

    return (
        <div>
            {wishlistElements}
        </div>
    )
};

export default Wishlists;
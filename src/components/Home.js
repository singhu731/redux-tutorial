import React from 'react';

function Home(){
    return(
        <div>
            <div className='add-to-cart'>
                <img src='https://png.pngtree.com/element_our/png/20181031/shopping-cart-png_224349.jpg' alt='error loading page' width='100px' height='100px' />
            </div>
            <h1>Home Component</h1>
            <div className='cart-wrapper'>
                <div className='img-wrapper item'>
                    <img src='https://m.media-amazon.com/images/I/71yzJoE7WlL._SX679_.jpg' alt='error loading page' width='400px' height='400px' />
                </div>
                <div className='text-wrapper item'>
                    <span>
                        I-Phone 14
                    </span>
                    <span>
                        Price: $1200
                    </span>
                </div>
                <div className='btn-wrapper item'>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
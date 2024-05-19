import React, { useState } from "react";
import  "./navbar.css"

function Navbar({ cartNumber, deletecart, isMenuOpened, isCartOpened, displayCart, displayMenu}) {

    
    return (
        <>
            <nav className="navbar flex__container">
            <div className="first-container flex__container">
                <img className="menu menu-cart" src="images/icon-menu.svg" alt="menu" onClick={displayMenu} />
                <div className={isMenuOpened ? "mobile__links" : "hide"}>
                <span className="closebtn" onClick={displayMenu}><img src="images/icon-close.svg" alt="close"/></span>
                <span>Collections</span>
                <span>Men</span>
                <span>Women</span>
                <span>About</span>
                <span>Contact</span>
                </div>
                <h1>sneakers</h1>
            <div className="desktop__links">
                <span>Collections</span>
                <span>Men</span>
                <span>Women</span>
                <span>About</span>
                <span>Contact</span>
            </div>
            </div>
            <div className="cart-image flex__container">
                <div className="cart" onClick={displayCart}>
                <img className="menu-cart" src="images/icon-cart.svg" alt="cart" />
                <span>{cartNumber}</span>
                </div>
                <div className={isCartOpened ? "cart-container" : "hide" }>
                    <span>Cart</span>
                    <hr />
                    {
                        cartNumber > 0 ? 
                        <div className="cart-wrapper">
                        <div className="cart-info">
                            <div><img src="images/image-product-1-thumbnail.jpg" alt="thumbnail" width={50} height={50}/></div>
                            <div>
                                <p>Fall Limited Edition Sneakers</p>
                                <p className="cart-total">$125.00 x {cartNumber} <span>${(cartNumber * 125).toFixed(2)}</span></p>
                            </div>
                            <div onClick={deletecart}><img src="images/icon-delete.svg" alt="delete"  /></div>
                        </div>
                        <div className="checkbtn" onClick={displayCart}><span>Checkout</span></div>
                        </div>
                        :
                        <div className="empty-wrapper">
                            <p>Your cart is empty</p>
                            </div>
                    }
                    
                </div>
                <img className="avatar--profile" src="images/image-avatar.png" alt="avatar" />
            </div>
        </nav>
            <hr />        
        </>   
    )
}


export default Navbar;
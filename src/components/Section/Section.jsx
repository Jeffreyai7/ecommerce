import "./section.css"
import { useEffect } from "react"


function Section({productNumber, increasefn, decreasefn, addTocart, preImage, nextImage, initial, overlay__preImage, overlay__nextImage, overlay__initial, displayMenu, isOverlayOpened, displayOverlay, changeImage}){
// useEffect(()=> {
// const overlay = document.querySelector(".overlay")

// }, [])


return <section>
        <div className="grid">
            <div className="poster__wrapper">
                <div>
                <div className="posterimage">
                    <div className="previousbtn" onClick={preImage}><img src="images/icon-previous.svg" alt="previous" /></div>
                    <div><img src={`images/image-product-${initial}.jpg`} alt="posterimage" /></div>
                    <div className="nextbtn" onClick={nextImage}><img src="images/icon-next.svg" alt="next" /></div>
                </div>
             <div className="hidden preview">
               <div><img src="images/image-product-1-thumbnail.jpg" alt="product1"  onClick={() => {displayOverlay(), changeImage(1)}}/></div>
               <div><img src="images/image-product-2-thumbnail.jpg" alt="product2" onClick={() => {displayOverlay(), changeImage(2)}}/></div>
               <div><img src="images/image-product-3-thumbnail.jpg" alt="product3" onClick={() => {displayOverlay(), changeImage(3)}}/></div>
               <div><img src="images/image-product-4-thumbnail.jpg" alt="product4" onClick={() => {displayOverlay(), changeImage(4)}}/></div> 
             </div>   
                </div>
                    <div className={ isOverlayOpened ? "overlay" : "hidden"}>
                    <div className="overlay__content">
                    <div className="posterimage">
                        <div className="overlay__closebtnwrapper"><svg onClick={displayOverlay} width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#ffffff" fill-rule="evenodd"/></svg></div>
                        <div className="overlay__previousbtn" onClick={overlay__preImage}>
                        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
                        </div>
                        <div><img src={`images/image-product-${overlay__initial}.jpg`} alt="posterimage" /></div>
                        <div className="overlay__nextbtn" onClick={overlay__nextImage}>
                        <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
                        </div>
                    </div>
                <div className="hidden preview">
                <div><img src="images/image-product-1-thumbnail.jpg" alt="product1" onClick={() => {changeImage(1)}}/></div>
                <div><img src="images/image-product-2-thumbnail.jpg" alt="product2" onClick={() => {changeImage(2)}}/></div>
                <div><img src="images/image-product-3-thumbnail.jpg" alt="product3" onClick={() => {changeImage(3)}}/></div>
                <div><img src="images/image-product-4-thumbnail.jpg" alt="product4" onClick={() => {changeImage(4)}}/></div> 
                </div>   
    
                    </div>
                </div>
            </div>
            <article>
                <span className="brandname">Sneaker Company</span>
                <h1 className="brandname__edition">Fall Limited Edition <br/> Sneakers</h1> 
                <p>
                These low-profile sneakers are your perfect casual wear companion. Featuring a 
                durable rubber outer sole, they’ll withstand everything the weather can offer.
                </p>
                <div className="price__wrapper">
                <div className="price--container">
                    <h1 className="price">$125.00</h1>
                    <span className="percent">50%</span>
                </div>
                <div><span className="slashed--price">$250.00</span></div>    
                </div> 
                <div className="cart--counter__wrapper">
                <div className="cart--counter">
                <span className="sign" onClick={decreasefn}>-</span>
                <span>{productNumber}</span>
                <span className="sign" onClick={increasefn}>+</span>
                </div>
                <div className="cart--btn" onClick={addTocart}>
                    <img src="images/icon-wcart.svg" alt="cart"/>
                    <span>Add to cart</span>    
                </div>    
                </div>   
            </article>

            
        </div>  

       </section>
}

export default Section

{/* <img src="images/icon-close.svg" alt="close" className="overlay__closebtn" /> #69707D  #ff7d1a*/}
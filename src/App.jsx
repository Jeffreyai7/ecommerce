import { useEffect, useState } from 'react'
import Navbar from './components/Navigation/Navbar'
import Section from './components/Section/Section'

function App() {
const [count, setCount] = useState(0);
const [cartnum, setCartnum] = useState(count)
const [initial, setInitial] = useState(1)
const [overlay__initial, setOverlay__Initial] = useState(1)
const [isMenuOpened, setIsmenuOpened] = useState(false)
const [isCartOpened, setIsCartOpened] = useState(false)


function displayCart(){
    setIsCartOpened(!isCartOpened)
}

function displayMenu(){
     setIsmenuOpened(!isMenuOpened)
}


const handleIncrease = () =>{
    setCount(count + 1)
}

const handleDecrease = () =>{
    if(count > 0){
        setCount(count - 1)
    }else{
        return
    }
}
 

const addTocart = () => {
    setCartnum(count)
    setCount(0)
}

const deletecart = () => {
    setCartnum(0)
}


const nextImage = () => {
    if(initial < 4){
        setInitial(initial + 1)
    }else{
        setInitial(1)
    }
    
}
const overlay__nextImage = () => {
    if(overlay__initial < 4){
        setOverlay__Initial(overlay__initial + 1)
    }else{
        setOverlay__Initial(1)
    }
    
}

const preImage = () => {
    if(initial > 1){
        setInitial(initial - 1)
    }else{
        setInitial(4)
    }
    
}

const overlay__preImage = () => {
    if(overlay__initial > 1){
        setOverlay__Initial(overlay__initial - 1)
    }else{
        setOverlay__Initial(4)
    }
    
}

const changeImage = (num) => {
    setOverlay__Initial(num)
}


 return(
    <div>
        <Navbar cartNumber={cartnum} deletecart={deletecart} isMenuOpened={isMenuOpened} isCartOpened={isCartOpened}  displayCart={displayCart} displayMenu={displayMenu} />
        <Section productNumber={count} increasefn={handleIncrease} decreasefn={handleDecrease} addTocart={addTocart} preImage={preImage} nextImage={nextImage} initial={initial} overlay__initial={overlay__initial} overlay__preImage={overlay__preImage} overlay__nextImage={overlay__nextImage} displayMenu={displayMenu} isMenuOpened={isMenuOpened}  changeImage={changeImage}/>
    </div>
 )
}

export default App


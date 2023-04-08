import React, {createContext, useContext,useState, useEffect} from 'react'
import { toast } from 'react-hot-toast'
import product from '../silver-stork/schemas/product'

const Context=createContext();

export const StateContext=({children})=>{
    const[showCart,setShowCart]=useState(false)

    const[cartItems,setCartItems]=useState([])

    const[totalQuantities,setTotalQuantities]=useState(0)

    const[totalPrice,setTotalPrice]=useState(0)

    const[quantity,setQuantity]=useState(1)

    let foundProduct;
    let index;

    const addToCart=(product,quantity)=>{
        const checkProductInCart=cartItems.find((item) => item._id===product._id)

        setTotalPrice((prevTotalPrice)=>prevTotalPrice + product.price*quantity )
        setTotalQuantities((prevQuantity)=>prevQuantity + quantity)

        if(checkProductInCart){
        

            const updatedCartItems=cartItems.map((cartProduct)=>{
            if(cartProduct._id=product._id){
                return {
                    ...cartProduct,
                    quantity:cartProduct.quantity+quantity
                }
            }})
            setCartItems(updatedCartItems)
            

        }
        else{
            product.quantity=quantity;
            setCartItems([...cartItems,{...product}]);
        
        }
        toast.success(`Added`)

        
    }

    const removeItem=(product)=>{
        foundProduct=cartItems.find((item=>item._id===product._id));

        const newCartItem=cartItems.filter((item)=>item._id !== product._id)

        setTotalPrice((prevTotalPrice)=>prevTotalPrice - foundProduct.price*foundProduct.quantity);

        setTotalQuantities((prevTotalQuantity)=>prevTotalQuantity-foundProduct.quantity);

        setCartItems(newCartItem);
    }

    const toggleCartItemQuantity=(id,value)=>{

        foundProduct=cartItems.find((item=>item._id===id))
        index= cartItems.findIndex((product)=>product._id===id);
        const newCartItem=cartItems.filter((item)=>item._id !== id)

        if(value ==="increment"){
            setCartItems([...newCartItem,{...foundProduct, quantity: product.quantity +1}]);

            setTotalPrice((prevTotalPrice)=>prevTotalPrice+foundProduct.price);

            setTotalQuantities((prevQuantity)=>prevQuantity+1)

        } else if (value==='decrement'){
            if(foundProduct.quantity >1){
            
                setCartItems([...newCartItem,{...foundProduct, quantity: product.quantity - 1}]);

                setTotalPrice((prevTotalPrice)=>prevTotalPrice - foundProduct.price)

                setTotalQuantities((prevQuantity)=>prevQuantity - 1)

            
            
        }
    }
}

    const increaseQuantity=()=>{
        setQuantity((previousQuantity)=>previousQuantity+1)
    }
    
    const decreaseQuantity=()=>{
        setQuantity((previousQuantity)=>
        {
            if(previousQuantity-1<1)return 1;
            return previousQuantity-1
            
            })
    }
    return (
        <Context.Provider 
            value={{
                showCart,
                cartItems,
                totalQuantities,
                totalPrice,
                quantity,
                increaseQuantity,
                decreaseQuantity,
                setShowCart,
                addToCart,
                setTotalPrice,
                toggleCartItemQuantity,
                removeItem
                }}
        >
            {children}
        </Context.Provider>
    )
}

export const useStateContext=()=>useContext(Context)

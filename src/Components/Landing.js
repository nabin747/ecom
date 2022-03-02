import './Landing.css'
import { useEffect, useState } from "react"
import { ProductCard } from "./ProductCard"
import { ProductList } from "../API/api";
import { Header } from './Header/Header';
import { Footer } from './Header/Footer/Footer';

export const Landing=()=>{
    const [raksi , setRaksi] = useState('');

    const getProduct =async()=>{
        let response = await ProductList();
        let p  =response.data[0].name

        console.log(response.data);
        console.log(p)
        setRaksi(response.data);
    }
    useEffect(()=>{
        getProduct()
    },[])

    return<>
            <Header/>
       <div className="product_display">
            {raksi ? raksi.map((a)=>(
                <ProductCard 
                    name ={a.name}
                    email = {a.email}
                    phone = {a.phone}
                />
            )):''}
       </div>
       <Footer/>
  

       </>
    
}
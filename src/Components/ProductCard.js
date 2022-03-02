import './ProductCard.css';


export const ProductCard=(props)=>{
    return <>
    <div className="produc">
         <div className="product_card">
            <div className="product_image"></div>
            <div className="product_name center">Brand  Name :{props.name}</div>
            <div className="product_quentity center"> email :{props.email}</div>
            <div className="product_price center">phone : {props.phone}</div>
    
            <div className="control_btn">
                <input type="button" value="Add Cart" className="add_cart"/>
                <input type="button" value="View Detail" className="detail"/>
            </div>
        </div>
    </div>
  

    </>
}
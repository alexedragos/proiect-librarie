import React from 'react';
import {Link} from 'react-router-dom';
import PayPalButton from './PayPalButton';

export default function CartTotal({value,history}) {
    const{cartSubtotal, cartTax, cartTotal, clearCart} = value;
    return (
   <React.Fragment>
       <div className='container'>
           <div className='row'>
               <div className='col-10 mt-2 ml-sm-5 ml-md-auto 
                               col-sm-8 text-capitalize text-right'>
                <Link to ='/'>
                    <button className='btn btn-outline-danger text-uppercase mb-3 px-5'
                            type='button'
                            onClick={() => clearCart()}>
                                Goleste Cosul
                    </button>
                </Link>
                    <h5>
                        <span className='text-total'>
                            Pret fara TVA :
                        </span>
                        <strong>
                            {cartSubtotal} RON
                        </strong>
                    </h5>
                    <h5>
                        <span className='text-total'>
                            TVA :
                        </span>
                        <strong>
                            {cartTax} RON
                        </strong>
                    </h5><h5>
                        <span className='text-total'>
                            Total :
                        </span>
                        <strong>
                            {cartTotal} RON
                        </strong>
                    </h5>
                    <PayPalButton total={cartTotal} 
                                  clearCart = {clearCart}
                                  history  = {history}/>

                    
                </div>
           </div>
       </div>
   </React.Fragment>
    );     
}

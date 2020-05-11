import React, { Component } from 'react';
import {ProductConsumer} from'../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
            const {id,author,img,info,price,title,inCart} = 
            value.detailProduct;
            return(
            <div className = 'container py-5'>
                <div className='row'>
                    <div className='col-10 mx-auto text-center text-slanted text-blue my-5'>
                    <h1>{title}</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-10 mx-auto col-md-6 my-3 '>
                <img src={img} className='img-fluid' alt='product'/>
                    </div>
                    <div className='col-10 mx-auto col-md-6 my-3 '>
                <h2>{title}</h2>
                <h4 className='text-title text-uppercase 
                  mt-3 mb-2'>
                Autor: <span className = 'text-uppercase'>
                {author}</span>    
                     </h4>
                     <h4 className='text-blue'>
                         <strong>
                             Pret: {price} <span>RON</span>
                         </strong>
                         </h4>   
                         <p className='text-capitalize font-weight-bold mt-3 mb-0'>
                          Descriere:    
                         </p>   
                         <p className='text-muted lead'>{info}</p>
                        <div>
                    <Link to='/'>
                        <ButtonContainer>Inapoi</ButtonContainer>
                    </Link>

                    <ButtonContainer
                    cart
                    disabled={inCart?true:false}
                    onClick={() => {
                        value.addToCart(id);
                        value.openBookWindow(id);
                    }}
                    >
                        {inCart?'In Cos': 'Adauga in Cos'}
                    </ButtonContainer>
                        </div>
                    </div>
                </div>
            </div>
            );
                }
            }
            </ProductConsumer>
        );
    }
}
                         



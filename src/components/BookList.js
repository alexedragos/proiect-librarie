import React, { Component } from 'react'
import Book from './Book';
import Title from './Title';
import {ProductConsumer} from '../context';


export default class BookList extends Component {
    
    render() {
        
        return (
<React.Fragment>
    <div className='py-5'>
        <div className='container'>
    <Title name='Librarie' title='Online'></Title>
            <div className='row'>
            <ProductConsumer>
                {(value)=>{
                    return value.products.map( product => {
                        return <Book key = {product.id} product = {product} />;
                    })
                }}
            </ProductConsumer>
            </div>
        </div>
    </div>
</React.Fragment>
                
                // <Book/>
        )
     }
 }
            


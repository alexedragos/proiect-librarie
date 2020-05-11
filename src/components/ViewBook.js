import React, { Component } from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import {ButtonContainer} from './Button';
import {Link} from 'react-router-dom';

export default class ViewBook extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                const {openBook,closeBook} = value;
                const{img, title, price} = value.viewBook;;
                if (!openBook){
                    return null;
                }
                else {
                    return (
                <ViewBookContainer>
    <div className = 'container'>
        <div className = 'row'>
            <div id = 'window' className = 'col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5'>
                <h5>Produsul a fost adaugat in cos</h5>
                <img src={img} className = 'img-fluid' alt='book'/>
                    <h5>{title}</h5>
                    <h5 className='text-muted'>Pret : {price}RON</h5>
                    <Link to = '/'>
                    <ButtonContainer onClick={()=>closeBook()}>
                        Alege alta carte
                    </ButtonContainer>
                    </Link>
                    <Link to = '/cart'>
                    <ButtonContainer cart onClick={()=>closeBook()}>
                        Finalizare comanda
                    </ButtonContainer>
                    </Link>
            </div>
        </div>
    </div>
                </ViewBookContainer>
                        );
                    } 
                }}
            </ProductConsumer>
        )
    }
}

const ViewBookContainer = styled.div`

position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.3);
display:flex;
align-items:center;
justifi-content:center;
#window{
    background:var(--mainWhite);
}



`
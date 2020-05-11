import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.png';
import styled from 'styled-components';
import {ButtonContainer }from './Button';


export default class Navbar extends Component {
    render() {
        return (
            <NavStyle className = 'navbar navbar-expand-sm navbar-dark px-sm 5'>
        <Link to = '/'>
            <img src = {logo} alt='store' className='navbar-brand'/>
        </Link>
        <ul className = 'navbar-nav align-items-center'>
            <li className = 'nav-item ml-5'>
                <Link to='/' className='nav-link'>
                    I Do Buy Books!
                </Link>
            </li>
        </ul>

            <Link to = '/cart' className = 'ml-auto'>
                <ButtonContainer>
                    <span className ='mr-2'>
                    <i className = 'fas fa-cart-plus'/>
                    </span>
                    
                    Cosul meu
                </ButtonContainer>
            </Link>
            </NavStyle>
        );
    }
}

const NavStyle = styled.nav`
    background:#296E85;
    .nav-link{
        font-family: 'Lobster', cursive;;
        color:var(--lightBlue) !important;
        font-size:3rem;
        text-transform:capitalize;
        margin-left: 5rem;
    }
`;
    


    
    



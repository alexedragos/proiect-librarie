import React from 'react'

export default function CartColumns() {
    return (
        <div className = 'container-fluid text-center d-none d-lg-block'>
            <div className = 'row'>
                <div className='col-10 mx-auto col-lg-2'>
                <p className='text-uppercase'>Produs</p>
                </div>

                <div className='col-10 mx-auto col-lg-2'>
                <p className='text-uppercase'>Nume Produs</p>
                </div>

                <div className='col-10 mx-auto col-lg-2'>
                <p className='text-uppercase'>Pret</p>
                </div>

                <div className='col-10 mx-auto col-lg-2'>
                <p className='text-uppercase'>Cantitate</p>
                </div>

                <div className='col-10 mx-auto col-lg-2'>
                <p className='text-uppercase'>Sterge</p>
                </div>

                <div className='col-10 mx-auto col-lg-2'>
                <p className='text-uppercase'>Total</p>
                </div>
            </div>
        </div>
            
        
    )
}

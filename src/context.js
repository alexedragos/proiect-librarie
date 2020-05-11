 import React, { Component } from 'react';
 import {libraryProducts, detailProduct} from './data';
 
 const BookBringer = React.createContext();

 
 class ProductProvider extends Component {
     state = {
         products:[],
         detailProduct:detailProduct,
         cart:[],
         openBook: false,
         viewBook: detailProduct,
         cartSubtotal:0,
         cartTax:0,
         cartTotal:0,

     };
     componentDidMount(){
         this.setProducts();
     }
     setProducts = () =>{
         let tempProducts = [];
         libraryProducts.forEach(item => {
             const singleItem = {...item};
             tempProducts = [...tempProducts,singleItem];

         });
         this.setState(() => {
             return {products:tempProducts};
         });
     };

     getItem = (id) => {
         const product = this.state.products.find(item => item.id === id);
         return product;
     }

     handleDetail = (id) =>{
         const product = this.getItem(id);
         this.setState(() => {
             return {detailProduct:product}
         });
     };
     addToCart = (id) =>{
       let tempBooks = [...this.state.products];
       const index = tempBooks.indexOf(this.getItem(id));
       const product = tempBooks[index];
       product.inCart = true;
       product.count = 1;
       const price = product.price;
       product.total = price;

       this.setState( ()=>{
           return {products:tempBooks,cart:[...this.state.cart, product]};
        },
            () => { 
                this.sum();
            }
       );
    };

    openBookWindow = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return { viewBook:product,openBook:true}
        })
    }
     
    closeBook = () =>{
        this.setState(() => {
            return {
                openBook:false
            };
        });
    };

    increment = (id) => {
        let tempCart = [...this.state.cart];
        const selectedBook = tempCart.find(item => item.id === id)
        const index = tempCart.indexOf(selectedBook);
        const product = tempCart[index];
        product.count = product.count + 1;
        product.total = product.count * product.price;
        this.setState(() => {return{cart:[...tempCart]};
        }, 
        () => {this.sum();
            }
        );
    };

    decrement = (id) => {
        let tempCart = [...this.state.cart];
        const selectedBook = tempCart.find(item => item.id === id)
        const index = tempCart.indexOf(selectedBook);
        const product = tempCart[index];
        product.count = product.count - 1;
        if(product.count === 0){
            this.removeBook(id)
        }
        else {
            product.total = product.count * product.price;
            this.setState(() => {return{cart:[...tempCart]};
        }, 
            () => {this.sum();
            }
        );
        }
    };

    removeBook = (id) => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];

        tempCart = tempCart.filter(item => item.id !== id);

        const index = tempProducts.indexOf(this.getItem(id));
        let removedBook = tempProducts[index];
        removedBook.inCart=false;
        removedBook.count = 0;
        removedBook.total = 0;

        this.setState(()=>{
            return{
                cart:[...tempCart],
                products:[...tempProducts]
            };
        }, () => {
            this.sum();
        });
    };

    clearCart = () => {
        this.setState(() => {
            return {cart:[]}
        }, () => {
            this.setProducts();
            this.sum();
        });
    };

    sum = () =>{
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.total));
        const tempTax = subTotal * 0.19;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState(() => {
            return {
                cartSubtotal: subTotal,
                cartTax: tax,
                cartTotal: total
            }
        })
    }
    
    render() {
         return (
             <BookBringer.Provider value={{
        ...this.state,
        handleDetail:this.handleDetail,
        addToCart:this.addToCart,
        openBookWindow:this.openBookWindow,
        closeBook:this.closeBook,
        increment:this.increment,
        decrement:this.decrement,
        removeBook:this.removeBook,
        clearCart:this.clearCart
             }}>
                 {this.props.children}
             </BookBringer.Provider>
         )
     }
 }
 
 const ProductConsumer = BookBringer.Consumer;

 export {ProductProvider, ProductConsumer };
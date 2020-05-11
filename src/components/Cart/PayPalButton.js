import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
 
export default class MyApp extends React.Component {
    render() {
        const onSuccess = (payment) => {
            
            console.log("The payment was succeeded!", payment);
            this.props.clearCart();
            this.props.history.push('/');
                    
            		
        }
 
        const onCancel = (data) => {
            
            console.log('The payment was cancelled!', data);
            
        }
 
        const onError = (err) => {
            
            console.log("Error!", err);
            
        }
 
        let env = 'sandbox'; 
        let currency = 'RON'; 
         
       
 
        const client = {
            sandbox:    'Af5DoopdBYb4r4OjPA2rayKfGa6q6ABzp_bAExYOGWyBjH7-bqVRoZph931b8_W0qj_740veSqZ2-PaG',
            production: 'YOUR-PRODUCTION-APP-ID',
        }
        
        return (
            <PaypalExpressBtn env={env} 
                              client={client} 
                              currency={currency} 
                              total={this.props.total} 
                              onError={onError} 
                              onSuccess={onSuccess} 
                              onCancel={onCancel} />
        );
    }
}
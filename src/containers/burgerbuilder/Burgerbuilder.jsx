import React, { Component } from 'react';
import { connect } from 'react-redux';

import Burger from '../../components/burger/Burger';
import Buildcontrols from '../../components/buildcontrols/Buildcontrols';
import Modal from    '../../components/modal/Modal';
import Ordersummary from  '../../components/odersummary/Ordersummary';
import Spinner from '../../components/spinners/Spinners';
import axiosinstance from '../../axios-orders';
import errorhandler from '../../Global-error/Errorhandler';
import * as actions from '../../redux/actions/index';


 class Burgerbuilder extends Component {

    state = {
    //    ingredients : null,
    //    totalprice : 25,
    //    orderable : false,
       modal_order : false,
    //    Loading : false,
    //    getError : false,
    }

    componentDidMount(){

        this.props.FetchedIngredients();
        

    //     console.log(this.props);
    //     axiosinstance.get('https://react-myburger-3e53f-default-rtdb.firebaseio.com/ingredients.json')
    //     .then(res => {
    //         this.setState({ingredients : res.data})
            
    //     })
    //     .catch(error =>{
    //         this.setState({getError : true})
            
    //     })
    }

    modalbtn = () => {
        this.setState({
            modal_order : true
        })
    }

    modalremover = () => {
        this.setState({
            modal_order : false
        })
    }

    
    checkouthandler = () => {
        
    //     this.setState({ Loading : true });

    //   const order = {
    //         Items : this.state.ingredients,
    //         Totalprice : this.state.totalprice,
    //         customer : {
    //            name : 'Sandeep Reddy',
    //            zipcode : '1234568',
    //            address : 'ndcl',
    //            country : 'india'
    //         },
    //         email : 'sandeep@1234@'
    //     }

    //    axiosinstance.post('/orders.json', order)
    //    .then(res =>
    //    this.setState({ Loading : false, modal_order :false}))
    //    .catch(error =>  
    //    this.setState({ Loading : false, modal_order :false}));
    
    //     const queryparams = [];
    //     for(let i in this.state.ingredients){
    //         queryparams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
    //     }
    // queryparams.push('tprice=' + this.props.totalprice);

    //     const queryString = queryparams.join('&');

    this.props.PurchaseInit();

    this.props.history.push('/checkout');
    
    }

    orderbtn = (newingredients) => {
       const ingredients = Object.values(newingredients)
       .reduce((a,b) => {
           return a+b;
       })
       return ingredients > 0;
    }

    // itemAdder = (item) => {
    //     const updatedingredients = {
    //         ...this.state.ingredients
    //     }
    // const oldcount = updatedingredients[item];
    // const currentcount = oldcount + 1;
    // updatedingredients[item] = currentcount;

    //   const  oldprice = this.state.totalprice;
    //   const newprice = price[item];
    //   const updatedprice = oldprice + newprice;
    

    // this.setState({
    //     ingredients : updatedingredients,
    //     totalprice : updatedprice
    // })

    //     this.orderbtn(updatedingredients);
    // }

    // itemRemover = (item) => {
    //     // if(this.state.totalprice <= 25){
    //     //     return;
    //     // }
    //     const updatedingredients = {
    //         ...this.state.ingredients
    //     }
    // const oldcount = updatedingredients[item];

    // if(oldcount <= 0){
    //     return;
    // }

    // const currentcount = oldcount - 1;
    // updatedingredients[item] = currentcount;
    // const  oldprice = this.state.totalprice;
    // const newprice = price[item];
    // const updatedprice = oldprice - newprice;

    // this.setState({
    //     ingredients : updatedingredients,
    //     totalprice : updatedprice
    // })
    // this.orderbtn(updatedingredients);

    // }



    render() {

        const less_disabler = { ...this.props.ings };
         
        for(let key in less_disabler){
            less_disabler[key] = less_disabler[key] <= 0
        }

        let ordersummary = null;

        

         let burger = this.props.error ? <p>page can't be loaded</p>: <Spinner/>
         
        if(this.props.ings){
             burger = <React.Fragment> <Burger itemslist = {this.props.ings} /> 
             <Buildcontrols
              items = {this.props.ings}
              adder = {this.props.IngredientAdder}
              Price = {this.props.totalprice}
              remover = {this.props.IngredientRemover}
              disabled = {less_disabler}
              orderbutton = {this.orderbtn(this.props.ings)}
              modalbtn = {this.modalbtn}
              />
              </React.Fragment>

            ordersummary = <Ordersummary
            ingredients = {this.props.ings}
            Price = {this.props.totalprice}
            modalexit = {this.modalremover}
            checkout = {this.checkouthandler}
                />
         }

        //  if(this.state.Loading){
        //     ordersummary = <Spinner/>
        // }    

        return (
            <div>
                <Modal show = {this.state.modal_order}
                modalexit = {this.modalremover}>
                    {ordersummary}
                </Modal>
    
                {burger}  
            </div>
        )
    }
}


const mapPropsToState = state => {
    return { 
            ings : state.bbreducer.ingredients,
            totalprice : state.bbreducer.totalprice,
            error : state.bbreducer.error
         }
        }

const mapDispatchToProps = (dispatch) => {
    return{
        IngredientAdder : (ingname) => dispatch(actions.IngredientAdder(ingname)),
        IngredientRemover : (ingname) => dispatch(actions.IngredientRemover(ingname)),
        FetchedIngredients : () => dispatch(actions.Init_Ingredients()),
        PurchaseInit : () => dispatch(actions.Orderinit()),
    }
    
}


export default connect(mapPropsToState,mapDispatchToProps)(errorhandler(Burgerbuilder,axiosinstance));

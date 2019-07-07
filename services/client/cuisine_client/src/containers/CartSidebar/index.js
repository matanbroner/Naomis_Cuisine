import React from 'react'
import Sidebar from "react-sidebar";
import Notification from '../../components/Notification'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import localStyles from './styles.module.css'
import CartPanel from '../../components/CartPanel'
import CartItem from '../../components/CartItem'
import { connect } from 'react-redux';
import {
    controlCart,
    setItemQuantity,
    removeItemFromCart
} from '../../actions/Shopping'


class CartSidebar extends React.PureComponent{
    constructor(props){
        super()
        
    }

    fetchDefaultStyles(){
        return {
            root:{
                zIndex: this.props.isOpen ? 2 : -1,
                transition: !this.props.isOpen ? 'z-index 0.5s linear' : null // trick the user to avoid seeing z-index shift
            },
            sidebar: { 
                background: "white",
                width: window.innerWidth >= 760 ? '25vw' : '90vw',
                zIndex: '3',
                position: 'fixed'
            },
            overlay:{
                transition: "opacity .1s ease-out, visibility .1s ease-out"
            },
        
            pullTab: {
                background: 'purple'
            }
        }
    }

    fetchPullTabStyles(){
        const direction = this.determinePullTabSide()
        return {
            [direction]: this.determinePullTabIndent(),
            width: window.innerWidth <= 760 ? '40px' : null
        }
    }

    calculateTotals = () => {
        let totalQuantity = 0, totalPrice = 0
        this.props.items.forEach(item => {
            totalQuantity += item.quantity
            totalPrice += item.quantity * item.price
        })
        return {
            quantity: totalQuantity,
            price: totalPrice.toFixed(2)
        }
    }

    determinePullTabSide(){
        if(this.props.lang === 'eng')
            return 'right'
        else return 'left'
    }

    determinePullTabIndent(){
        if(this.props.isOpen){
            if (window.innerWidth <= 760)
                return '80%'
            else return '25%'
        }
        else return null
    }

    generateItems(){
        return this.props.items.map(item => {
            return <CartItem 
            key={item._id}
            item={item}
            inc={(item) => this.props.setItemQuantity(item._id, item.quantity + 1)}
            dec={(item) => this.props.setItemQuantity(item._id, item.quantity - 1)}
            remove={(item) => this.props.remove(item._id)}
            language={this.props.lang}
            />
        })
    }

    renderCartPanel(totals){
        return(
            <CartPanel
            lang={this.props.lang}
            items={this.generateItems()}
            totals={totals}
            />
        )
    }

    render(){
        const totals = this.calculateTotals()
        return(
            <div>
                <Sidebar 
                sidebar={this.renderCartPanel(totals)}
                open={this.props.isOpen}
                pullRight = {this.props.lang === 'eng'}
                shadow={false}
                styles={this.fetchDefaultStyles()}
                >
                <div/>
                </Sidebar>
                <button 
                id={this.props.lang === 'eng' ? localStyles.pullTabRight : localStyles.pullTabLeft} 
                className={localStyles.pullTab}
                style={this.fetchPullTabStyles()} 
                onClick={() => this.props.controlCart()}
                >
                    {
                        this.props.isOpen
                        ? <FontAwesomeIcon 
                            color="white" 
                            size={window.innerWidth <= 760 ? "2x" : "3x"} 
                            icon={faTimesCircle}/>
                        : <FontAwesomeIcon 
                            size={window.innerWidth <= 760 ? "2x" : "3x"} 
                            color="white" icon={faShoppingCart} 
                            flip={this.props.lang === 'heb' ? 'horizontal' : null}/>
                    }
                    {
                        this.props.items.length
                        ? <Notification count={totals.quantity}/>
                        : null
                    }
                </button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        controlCart: () => dispatch(controlCart()),
        setItemQuantity: (_id, quantity) => dispatch(setItemQuantity(_id, quantity)),
        remove: (_id) => dispatch(removeItemFromCart(_id))
    }
}

const mapStateToProps = (state) => {
    return {
        isOpen: state.shopping.cart.isOpen,
        items: state.shopping.cart.items,
        showTab: state.shopping.cart.showTab,
        lang: state.global.language
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartSidebar)


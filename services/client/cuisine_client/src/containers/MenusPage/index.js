import React from 'react'
import  Row  from 'react-bootstrap/Row'
import MenusPageHeader from '../../components/MenusPageHeader'
import MenuItem from '../../components/MenuItem'
import {
addItemToCart
} from '../../actions/Shopping'
import localStyles from './styles.module.css'
import { connect } from 'react-redux';

const testItem = {
    _id: '123456cbadefgh',
    coverPhoto: 'https://assets3.thrillist.com/v1/image/2797371/size/tmg-article_default_mobile.jpg',
    name: 'Famous Hamburger',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus sapien leo, ac finibus ex suscipit sit amet. Sed vitae turpis a ipsum lacinia luctus. Aliquam erat volutpat. Integer sed commodo mi. Fusce vehicula neque vitae leo ullamcorper molestie ut vitae lorem. Maecenas convallis ante mi, sed elementum mi dictum quis. Cras varius at neque ac gravida. Curabitur faucibus laoreet ornare. Praesent eget tempus erat, sed mattis ligula.',
    price: 12.95,
    serves: '4',
    quantity: 1
}

class MenusPage extends React.PureComponent{
    constructor(props){
        super()
    }

    render(){
        return(
            <div id={localStyles.wrapper}>
                <Row style={{width: '100%'}}>
                <MenusPageHeader lang={this.props.language}/>
                <MenuItem language={this.props.language} item={testItem} add={(item) => this.props.addItem(item)}/>
                <MenuItem language={this.props.language} item={testItem} add={(item) => this.props.addItem(item)}/>
                <MenuItem language={this.props.language} item={testItem} add={(item) => this.props.addItem(item)}/>
                

                </Row>
                
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addItem: (item) => dispatch(addItemToCart(item))
    }
}

const mapStateToProps = state => {
    return {
        language: state.global.language
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MenusPage)
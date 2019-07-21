import React from 'react'
import localStyles from './styles.module.css'
import { DragDropContext } from 'react-beautiful-dnd';
import { connect } from 'react-redux'
import {
    appendDayItems,
    reorderDayItems,
    removeDayItem,
    appendSelectedItems,
    clearNewMenu,
    clearSelectedItems
} from '../../../../actions/Menus'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import SearchBar from '../../../../components/SearchBar'
import TitledPanel from '../../../../components/TitledPanel'
import DraggableBank from '../../../../components/DraggableBank'
import DraggableRow from '../../../../components/DraggableRow'
import CardDisplay from '../../../../components/CardDisplay'

import allContent from './content.json'

const test_data = [
    {
        id: 1234,
        name: 'Banana Bread With Raisins and Cherries',
        photo: 'https://www.davidlebovitz.com/wp-content/uploads/2007/09/Banana-bread-recipe-5.jpg',
        search: {
            key: 'banana',
            value: 'Banana Bread'
        }
    },
    {
        id: 4321,
        name: 'Chicken',
        photo: 'https://www.maangchi.com/wp-content/uploads/2018/02/roasted-chicken-1.jpg',
        search: {
            key: 'chicken',
            value: 'Chicken'
        }
    },
    {
        id: 9876,
        name: 'Sushi',
        photo: 'https://previews.123rf.com/images/surawutob/surawutob1308/surawutob130800155/21777359-shushi-japanese-food.jpg',
        search: {
            key: 'sushi',
            value: 'Sushi'
        }
    }
]

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class AdminCreateMenu extends React.PureComponent{
    constructor(props){
        super(props)

        this.state = {
            search_items: [],
        }
    }

    getList = id => {
        if(id === 'bank') return this.state.items
        else return this.props.new_menu.days[id]
    }

    onDragEnd = result => {
        const { source, destination } = result;
        let items = this.getList(source.droppableId)
        // dropped outside the list
        if (!destination && source.droppableId !== 'bank') {
            this.props.removeDayItem(source.droppableId, items[source.index])
        } else if ((!destination && source.droppableId === 'bank') || destination.droppableId === 'bank'){
            return
        } else if (source.droppableId === destination.droppableId) {
            this.props.reorderDayItems(source.droppableId, source.index, destination.index)
        } else {
            let dest = this.getList(destination.droppableId)
            if(dest.findIndex(item => item.id === items[source.index].id) === -1){
                this.props.appendDayItems(destination.droppableId, items[source.index])
            }
        }
    };

    componentDidMount(){
        let items = this.fakeData(20)
        this.setState({ 
            items,
            search_items: items
        })
    }

    search(value){
        console.log(value)
        let search_items = test_data.filter(item => item.name.includes(value))
        console.log(search_items)
        search_items = search_items.map(item => {
            return {
                id: `item-${item.id}`,
                content: (
                    <CardDisplay
                    text={item.name}
                    image={item.photo}/>
                )
            }
        })
        this.setState({ search_items })
    }

    fakeData(count, offset = 0){
        return Array.from({ length: count }, (v, k) => k).map(k => {
            let num = getRandomInt(0, 2)
            return ({
            id: `item-${k + offset}`,
            content: (
                <CardDisplay
                text={test_data[num].name}
                image={test_data[num].photo}/>
            )
        })});
    }

    renderColumns(content){
        let cols = [
            <Col xs={5}>
                {
                    this.state.items
                    ? <DraggableBank
                    id="bank"
                    maxWidth="550px"
                    height= "80vh"
                    items={this.state.search_items}
                    />
                    : null
                }
            </Col>,
            <Col id={localStyles.daysRowsWrapper} xs={7}>
                {this.renderDaysRows(content.days)}
            </Col>
        ]
        if(this.props.language === 'heb'){
            cols = cols.reverse()
        }

        return cols
    }

    renderDaysRows(content){
        if(this.props.new_menu){
            return Object.keys(this.props.new_menu.days).map(day => {
                return(
                    <DraggableRow
                        id={day}
                        lang={this.props.language}
                        title={content[day]}
                        maxWidth="550px"
                        height="230px"
                        items={this.props.new_menu.days[day]}
                    />
                )
            })
        }
    }

    renderSubmitButton(content){
        return(
            <button 
            id={localStyles.submit}
            onClick={() => {console.log('Submit')}}>
                {content.submit}
            </button>
        )
    }

    render(){
        const content = allContent[this.props.language]
        return(
            <DragDropContext onDragEnd={this.onDragEnd}>
            <TitledPanel
            title={content.title}
            lang={this.props.language}
            buttonComponent={this.renderSubmitButton(content)}>
                <div id={localStyles.wrapper}>
                    <div id={localStyles.searchWrapper}>
                        <SearchBar
                        lang={this.props.language}
                        placeholder="Search for John, Jane or Mary"
                        data={test_data.map(item => item.search)}
                        onSelect={record => console.log(record)}
                        onChange={value => this.search(value)}
                        />
                    </div>
                    <Row>
                    {this.renderColumns(content)}
                    </Row>
                </div>
            </TitledPanel>
            </DragDropContext>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        appendDayItems: (day, items) => dispatch(appendDayItems(day, items)),
        reorderDayItems: (day, source, dest) => dispatch(reorderDayItems(day, source, dest)),
        removeDayItem: (day, item) => dispatch(removeDayItem(day, item)),
        appendSelectedItems: (items) => dispatch(appendSelectedItems(items)),
        clearNewMenu: () => dispatch(clearNewMenu()),
        clearSelectedItems: () => dispatch(clearSelectedItems())
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.global.language,
        items: state.items.bank,
        new_menu: state.menus.new
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminCreateMenu)
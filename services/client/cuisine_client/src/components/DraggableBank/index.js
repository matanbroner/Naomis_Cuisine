import React, { Component } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import localStyles from './styles.module.css'

const DraggableBank = (props) => {

    const grid = 8;

    const getItemStyle = (isDragging, draggableStyle) => ({
        // some basic styles to make the items look a bit nicer
        userSelect: 'none',
        padding: `${grid/2}px ${grid}px`,
        margin: 0,
    
        // change background colour if dragging
        background: isDragging ? 'lightgreen' : 'none',
    
        // styles we need to apply on draggables
        ...draggableStyle
    });
    
    const getListStyle = isDraggingOver => ({
        background: isDraggingOver ? 'lightblue' : 'none',
        padding: `${grid}px`,
        display: props.direction === 'horizontal' ? 'flex' : null,
        width: 'fit-content',
        maxWidth: props.maxWidth,
        height: props.height,
        overflow: 'auto',
        overflowX: 'hidden',
    });

    const renderItems = (dropId) => {
        return(
            props.items.map((item, index) => (
                <Col xs={4} >
                <Draggable
                    key={item.id}
                    draggableId={item.id + dropId}
                    index={index}>
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={getItemStyle(
                                snapshot.isDragging,
                                provided.draggableProps.style
                            )}>
                            {item.content}
                        </div>
                    )}
                </Draggable>
                </Col>
            ))
        )
    }
    

    return(
        <Droppable droppableId={props.id} direction={props.direction}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver)}>
                        <Row>
                            {
                                props.items && props.items.length
                                ? renderItems(props.id)
                                : <p>Items go here!</p>
                            }
                            {provided.placeholder}
                        </Row>
                </div>
            )}
        </Droppable>
    )
}

export default DraggableBank
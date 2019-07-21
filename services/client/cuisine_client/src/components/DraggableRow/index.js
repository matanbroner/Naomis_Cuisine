import React, { Component } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import localStyles from './styles.module.css'

const DraggableRow = (props) => {

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
        background: isDraggingOver ? 'lightblue' : null,
        padding: `${grid}px`,
        minHeight: props.height,
        display: 'flex',
        flexDirection: props.lang === 'heb' ? 'row-reverse' : null,
        flexWrap: 'nowrap',
        overflow: 'auto'
    });

    const renderItems = (dropId) => {
        return (
            props.items.map((item, index) => (
                <Col xs={3}>
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

    return (
        <Droppable droppableId={props.id} direction="horizontal">
            {(provided, snapshot) => (
                <div
                    id={localStyles.rowWrapper}
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver)}>
                    {
                        props.title
                        ? <p>{props.title}</p>
                        : null
                    }
                    { 
                        props.items && props.items.length
                        ? renderItems(props.id)
                        : null
                    }
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    )
}

export default DraggableRow
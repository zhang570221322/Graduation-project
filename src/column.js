import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Task from './task'
import Zmage from 'react-zmage'

// const text_color="rgb(163,163,128)";
const text_color="black";
const border_color="black";
const Container = styled.div`
  margin:5px;
  border: 2px solid ${border_color};
  border-radius: 2px;
 
  min-height:300px;
  min-width:220px;
  // 字体颜色
  color:${text_color}; 
  flex-direction: column;
 
`;
const Container2 = styled.div`
  margin:5px;
  border: 2px solid ${border_color};
  border-radius: 2px;
  min-width:1050px;
 
  // 字体颜色
  color:${text_color}; 
  flex-direction: column;
 
`;
//output的样式
const Container3 = styled.div`
  margin:5px;
  border: 2px solid ${border_color};
  border-radius: 2px;
  min-width:1160px;
  min-height:398px;
  // 字体颜色
  color:${text_color}; 
  flex-direction: column;
 
`;
 

const Title = styled.h2`
  padding: 10px;
  // 字体颜色
  color:${text_color};
`;

const TaskList = styled.div`
  padding: 10px;
  transition: background-color 0.2s ease;
  // background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};
  flex-grow: 1;
  min-height: 100px; 
  color:${text_color}; 
  width:auto;
`;
const Taskdiv = styled.div`
   padding:1px;
`;
const getListStyle = isDraggingOver => ({
  // background: isDraggingOver ? 'lightblue' : 'lightgrey',
  display: 'flex',
  overflow: 'auto',
  width:'auto'
});


class Column extends React.Component {
  render () {
    if(this.props.column.id==="column-7"){

      return(
      
          
        <div className="col">
        <Container2>
          <Title>{this.props.column.title}</Title>
          <Droppable droppableId={this.props.column.id} direction="horizontal" >
            {(provided, snapshot) => (
              
              <TaskList
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={getListStyle(snapshot.isDraggingOver)}
                
                > 
               
                  {this.props.tasks.map((task, index) =>
                   <Taskdiv key={task.id}>
                    <Task key={task.id} task={task} index={index} />
                    </Taskdiv>
                    )}
                      
                  {provided.placeholder}
                
              </TaskList>
              )
            }
          </Droppable>
        </Container2>
        </div>
       
      )
      
    }else if(this.props.column.id==="column-6"){

      return(
      
          
         
        <Container3>
          <Title>{this.props.column.title}</Title>
          <Droppable droppableId={this.props.column.id} >
            {(provided, snapshot) => (
              
              <TaskList
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}>
                  {this.props.tasks.map((task, index) =>
                      // <img key={task.id} src={task.content}  width="280px" height="200px"/>
                      <Zmage key={task.id} src={task.content}  width="280px" height="200px"/>     
 
                     )}
                  {provided.placeholder}
                   
              </TaskList>
              )
            }
          </Droppable>
             
        </Container3>
    
       
      )
      
    }else{
      return(
    
        <div className="col">
        <Container>
          <Title>{this.props.column.title}</Title>
          <Droppable droppableId={this.props.column.id} >
            {(provided, snapshot) => (
              
              <TaskList
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}>
                  {this.props.tasks.map((task, index) =>
                    <Task key={task.id} task={task} index={index}/>)}
                  {provided.placeholder}
                   
              </TaskList>
              )
            }
          </Droppable>
        </Container>
        </div>
       
      )
    }
    
  }
}

export default Column;

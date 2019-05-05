import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
const border_color="black";
const Container = styled.div`
  border: 2px solid ${border_color};
  border-radius: 2px;
  padding: 10px;
  margin-bottom: 8px;
  // background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')};
  display: flex;
`;
//width 可以更改滑动的方块大小
const Handle = styled.div`
  width: 30px; 
  height: 20px;
  background-color: orange;
  border-radius: 4px;
  margin-right: 8px;
  
`;
// const Textstyle = styled.div`
//   width:300px;
//   padding:0px 0px 0px 25px;
//   text-font:5px;
// `;

// const Textstyle2 = styled.div`
//   width:150px;
//   padding:0px 0px 0px 25px;
 
// `;

class Task extends React.Component {

  render() {

   return(
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            <Handle {...provided.dragHandleProps} >    </Handle>
            {this.props.task.content}
          </Container>)
        }
      </Draggable>
    )


    // return(
    //   <Draggable draggableId={this.props.task.id} index={this.props.index}>
    //     {(provided, snapshot) => (
    //       <Container
    //         {...provided.draggableProps}
    //         ref={provided.innerRef}
    //         isDragging={snapshot.isDragging}
    //       >
    //         <Handle {...provided.dragHandleProps} >    <Textstyle>{this.props.task.content}</Textstyle></Handle>
    //         <Textstyle2></Textstyle2>
    //       </Container>)
    //     }
    //   </Draggable>
    // )
  }

}

export default Task

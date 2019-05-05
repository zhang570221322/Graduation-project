import React , { Fragment }from 'react';
import ReactDOM from 'react-dom';
import '@atlaskit/css-reset';
import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from './initial-data';
import initrules from './rules-data';
import Column from './column';
import { useAlert } from "react-alert";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const border_color="black";
// const border_size="2px";
//TODO  alert的错误， 移除两个多余nol "jquery": "^3.4.0",    "react-native-dialogs": "^1.0.4",
// const div_height="945px";
 
 
const Div1 = styled.div`
  /*上下居中*/
   display:flex;
`;
// const Div1_1 = styled.div`
// /*上下居中*/
//   background: url(${require("./images/atcg.jpg")})  no-repeat center 0; 
//    width:400px;
//    height: ${div_height};
//    border: ${border_size} solid ${border_color};
// `;
// const Div1_2 = styled.div`
// /*上下居中*/
// height: ${div_height};
//    border:   ${border_size} solid ${border_color};
// `;
// const Div1_3 = styled.div`
// /*上下居中*/
// background: url(${require("./images/zpsb.jpg")})  no-repeat center 0; 
//     width:400px;
//     height:${div_height};
//    border:   ${border_size}  solid ${border_color};
// `;





 
const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
 
};
 

 
const ButtonStyle1 = styled.div`
  /*上下居中*/
  border: 2px solid ${border_color};
  width: 105px;
  height:45%;
  margin-top: 5px;
`;
 

// const ButtonStyle2 = styled.div`
// /*上下居中*/
// border: ${border_size} solid ${border_color};
 
//  padding:0px;
//  margin:6px;
// `;

const geRandom = (min, max) => ((Math.random() * (max - min + 1) | 0) + min)*1000;

 

function addTaskAndImage(columnId,taskId,image,alert,state){
 
  var output = state.columns[columnId];
  output.taskIds.push(taskId);
  alert.show("The program is running,please wait!");

 
  if(image===0){
   
  } 
  if(image==="var_n"){
    state.tasks[taskId]={id: taskId, content: require("./images/var_1.png")};
    state.tasks[taskId]={id: taskId, content: require("./images/var_2.png")};
    state.tasks[taskId]={id: taskId, content: require("./images/var_3.png")};
    state.tasks[taskId]={id: taskId, content: require("./images/var_4.png")};
    state.tasks[taskId]={id: taskId, content: require("./images/var_5.png")};
  }
  if(image==="var_combat"){
    taskId=Math.random()
    columnId="column-6"
    output = state.columns[columnId];
    output.taskIds.push(taskId);
    state.tasks[taskId]={id: taskId, content: require("./images/var_combat.png")};
  }
  if(image==="var_cca"){
    taskId=Math.random()
    columnId="column-6"
    output = state.columns[columnId];
    output.taskIds.push(taskId);
    state.tasks[taskId]={id: taskId, content: require("./images/var_cca.png")};
  }
  if(image==="var_mnn"){
    taskId=Math.random()
    columnId="column-6"
    output = state.columns[columnId];
    output.taskIds.push(taskId);
    state.tasks[taskId]={id: taskId, content: require("./images/var_mnn.png")};
  }
  if(image==="nor_t_k"){
    state.tasks[taskId]={id: taskId, content: require("./images/tsne_nor.png")};
    taskId=Math.random()
    output.taskIds.push(taskId);
    state.tasks[taskId]={id: taskId, content: require("./images/kBET_nor.png")};
  }
  if(image==="combat_t_k"){
    state.tasks[taskId]={id: taskId, content: require("./images/tsne_combat.png")};
    taskId=Math.random()
    output.taskIds.push(taskId);
    state.tasks[taskId]={id: taskId, content: require("./images/kBET_combat.png")};
  }
 
  if(image==="mnn_t_k"){
    state.tasks[taskId]={id: taskId, content: require("./images/tsne_mnn.png")};
    taskId=Math.random()
    output.taskIds.push(taskId);
    state.tasks[taskId]={id: taskId, content: require("./images/kBET_nor.png")};
  }
 
  if(image==="cca_t_k"){
    state.tasks[taskId]={id: taskId, content: require("./images/tsne_cca.png")};
    taskId=Math.random()
    output.taskIds.push(taskId);
    state.tasks[taskId]={id: taskId, content: require("./images/kBET_nor.png")};
  }
  if(image==="lap_combat"){
    state.tasks[taskId]={id: taskId, content: require("./images/venn_combat.png")};

  }
  if(image==="lap_mnn"){
    state.tasks[taskId]={id: taskId, content: require("./images/venn_mnn.png")};

  }
  if(image==="lap_cca"){
    state.tasks[taskId]={id: taskId, content: require("./images/venn_cca.png")};

  }
 
  

}
var ws=new WebSocket('ws://192.168.80.108:8080/websocket');
ws.onerror =(event)=>{
  alert("Connection server failed")
}
ws.onopen =(event)=>{
  alert("Connection server success")
}
  //发送请求，得到结果返回值 
function sendMessage(ws,is,message,alert){
  if(is){
    alert.info(message)
    ws.send(message)
  }
}
 
class App extends React.Component {
 
  state = initialData;
  rowstate = initialData;
  resetData(alert){
    if(this.state===this.rowstate){
      alert.show("No initialization requireds");
    }else{
      setTimeout(() => {
        alert.success("execution succeed");
        this.setState(this.rowstate);
      },  geRandom(0,1))
    }
   
 
  }
  alertNote(alert){
    alert.show( <MyTable/> );
  }
 
  resetInitialData(alert){
    ws.onmessage = function(event ) {
      var data = event.data;
      alert.info(data);
    };
    
    let error=true;
    let Socker_is_Open=false;
   
   
    //check 
    switch (ws.readyState) {
      case WebSocket.CONNECTING:
     
        break;
      case WebSocket.OPEN:
      console.log("open");
      Socker_is_Open=true;
        break;
      case WebSocket.CLOSING:
      alert.info("Connection Closing");
        break;
      case WebSocket.CLOSED:
      alert.error("Connection server failed");
        break;
      default:
        // this never happens
        break;
    }
    
    // data 1  CPM 7                                      =    Normalization
    // data_normalization 1  batch 4   ComBat 8            =    Normalization_Correction_combat 
    // data_normaliaztion 2  batch 4   Tsne  6             =    addTaskAndImage("column-6",Math.random(),1,alert,this.state)
    // data_normaliaztion 2  batch 4   kBET  10             =    addTaskAndImage("column-6",Math.random(),2,alert,this.state)
    // data_normaliaztion_correction 3 batch 4 Tsne 6   =    addTaskAndImage("column-6",Math.random(),3,alert,this.state)
    // data_normaliaztion_correction 3 batch 4 kBET 10  =    addTaskAndImage("column-6",Math.random(),4,alert,this.state)
    // data_feature.pdf 1-5 
    // total  var mnn/combat 
    // kBET mnn  

    //TODO  var_gene_cca_all is false 2019年4月28日

    //rules 
    

  
    const process = this.state.columns["column-7"];
     
     let taskIds= process.taskIds
     
     if(taskIds.length!==0){

      //data  nor
       if(taskIds[0]==="task-1"&&taskIds[1]==="task-10"&&!Boolean(taskIds[2])){
          addTaskAndImage("column-1","task-3",0,alert,this.state);
          sendMessage(ws,Socker_is_Open,initrules[0],alert)
           error=false;
      }
     //data cor combat  and tsne var_all
      if(taskIds[0]==="task-1"&&taskIds[1]==="task-2"&&taskIds[2]==="task-3"&&taskIds[3]==="task-11"&&!Boolean(taskIds[4])){
        addTaskAndImage("column-1","task-4","var_combat",alert,this.state);
        sendMessage(ws,Socker_is_Open,initrules[1],alert)
        error=false;
      } 
       //data cor mnn and tsne var_all
      if(taskIds[0]==="task-1"&&taskIds[1]==="task-2"&&taskIds[2]==="task-3"&&taskIds[3]==="task-12"&&!Boolean(taskIds[4])){
        addTaskAndImage("column-1","task-5",0,alert,this.state);
        sendMessage(ws,Socker_is_Open,initrules[2],alert)
  
        error=false;
     } 
     //data cor cca  and tsne var_all
     if(taskIds[0]==="task-1"&&taskIds[1]==="task-2"&&taskIds[2]==="task-3"&&taskIds[3]==="task-13"&&!Boolean(taskIds[4])){
      addTaskAndImage("column-1","task-6",0,alert,this.state);
      sendMessage(ws,Socker_is_Open,initrules[3],alert)

      error=false;
   } 

   
    //vst var 1-5 
    if(taskIds[0]==="task-3"&&taskIds[1]==="task-2"&&taskIds[2]==="task-7"&&!Boolean(taskIds[3])){
      //1-5
      addTaskAndImage("column-6",Math.random(),"var_n",alert,this.state)
      sendMessage(ws,Socker_is_Open,initrules[4],alert)
      error=false;
   } 

    //tesn

     //tesn  nor and kBET
    if(taskIds[0]==="task-3"&&taskIds[1]==="task-2"&&taskIds[2]==="task-8"&&taskIds[3]==="task-14"&&!Boolean(taskIds[4])){
       addTaskAndImage("column-6",Math.random(),"nor_t_k",alert,this.state)
       sendMessage(ws,Socker_is_Open,initrules[5],alert)
      error=false;
     } 
     //tesn  combat and kBET
      if(taskIds[0]==="task-4"&&taskIds[1]==="task-2"&&taskIds[2]==="task-8"&&taskIds[3]==="task-14"&&!Boolean(taskIds[4])){
        addTaskAndImage("column-6",Math.random(),"combat_t_k",alert,this.state)
        sendMessage(ws,Socker_is_Open,initrules[6],alert)
        error=false;
    } 
    //tesn  mnn  and kBET
    if(taskIds[0]==="task-5"&&taskIds[1]==="task-2"&&taskIds[2]==="task-8"&&taskIds[3]==="task-14"&&!Boolean(taskIds[4])){
      addTaskAndImage("column-6",Math.random(),"mnn_t_k",alert,this.state)
      sendMessage(ws,Socker_is_Open,initrules[7],alert)
      error=false;
    } 
    //tesn  cca and kBET
    if(taskIds[0]==="task-6"&&taskIds[1]==="task-2"&&taskIds[2]==="task-8"&&taskIds[3]==="task-14"&&!Boolean(taskIds[4])){
      addTaskAndImage("column-6",Math.random(),"cca_t_k",alert,this.state)
      sendMessage(ws,Socker_is_Open,initrules[8],alert)
      error=false;
    } 



    //over Lap combat
    if(taskIds[0]==="task-1"&&taskIds[1]==="task-2"&&taskIds[2]==="task-4"&&taskIds[3]==="task-9"&&!Boolean(taskIds[4])){
      addTaskAndImage("column-6",Math.random(),"lap_combat",alert,this.state)
      sendMessage(ws,Socker_is_Open,initrules[9],alert)
      error=false;
   } 
   //over Lap mnn
   if(taskIds[0]==="task-1"&&taskIds[1]==="task-2"&&taskIds[2]==="task-5"&&taskIds[3]==="task-9"&&!Boolean(taskIds[4])){
    addTaskAndImage("column-6",Math.random(),"lap_mnn",alert,this.state)
    sendMessage(ws,Socker_is_Open,initrules[10],alert)
    error=false;
 } 
    //over Lap cca
    if(taskIds[0]==="task-1"&&taskIds[1]==="task-2"&&taskIds[2]==="task-6"&&taskIds[3]==="task-9"&&!Boolean(taskIds[4])){
      addTaskAndImage("column-6",Math.random(),"lap_cca",alert,this.state)
      sendMessage(ws,Socker_is_Open,initrules[11],alert)
      error=false;
   } 
 
        if(error){
          alert.error("Operation error!");
        }
      
     }else{
      alert.error("Operation error!");
     } 
    // addTaskAndImage("column-6",Math.random(),1,alert,this.state)
   
    // alert.show("Oh look, an alert!");
    if(!error){
      setTimeout(() => {
        alert.success("execution succeed");
        setTimeout(() => {
          this.setState(this.state);
        },  geRandom(1,2))
      },  geRandom(10,15))
    }
  }
 
 
  onDragStart = () => {
    document.body.style.color = 'orange';
    document.body.style.transition = 'background-color 0.2s ease';
  }
  
  onDragUpdate = update => {
    const { destination } = update;
    const opacity = destination
      ? destination.index / Object.keys(this.state.tasks).length
      : 0;
    document.body.style.backgroundColor = `rgba(153, 141, 217, ${opacity})`;
  }

  onDragEnd = result => {
    document.body.style.color = 'inherit';
    document.body.style.backgroundColor = 'inherit';
    
  
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const startColumn = this.state.columns[source.droppableId];
    const finishColumn = this.state.columns[destination.droppableId];

    if (startColumn === finishColumn) {
      const newTaskIds = Array.from(startColumn.taskIds);
      newTaskIds.splice(source.index, 1);
      
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...startColumn, taskIds: newTaskIds
      };

      const newState = {
        ...this.state, columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn
        }
      }

      this.setState(newState);
      return;
    }

    const startTaskIds = Array.from(startColumn.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...startColumn, taskIds: startTaskIds
    };

    const finishTaskIds = Array.from(finishColumn.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finishColumn, taskIds: finishTaskIds
    };

    const newState = {
      ...this.state, columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      }
    }
    this.setState(newState)
  };

  render() {
    let  columnOrder=this.state.columnOrder;
    let columnOrder1= columnOrder.filter(s=>!((s==="column-7")||(s==="column-6")))
    let columnOrder7= columnOrder.filter(s=>(s==="column-7"))
    let columnOrder6= columnOrder.filter(s=>(s==="column-6"))
    return(
      
      
       <Div1>
         {/* <Div1_1></Div1_1> */}
         {/* <Div1_2> */}
      <DragDropContext
        onDragEnd={this.onDragEnd}
        onDragUpdate={this.onDragUpdate}
        onDragStart={this.onDragStart}>
    
       
    
       
      
        
{/*         
        <ButtonStyle2>
         <Provider template={AlertTemplate} {...options}>
          <Home2  fun={this.alertNote.bind(this)} />
        </Provider>
         </ButtonStyle2> */}
         
        <div  className="container">
   
      
          <div className="row ">
          {columnOrder1.map(columnId => {
            const column = this.state.columns[columnId];
            const tasks = column.taskIds.map(
              taskId => this.state.tasks[taskId]
            );
              return <Column key={column.id} column={column} tasks={tasks} />;
          })}
         </div>
        
        
         <div className="row">
          {columnOrder7.map(columnId => {
            const column = this.state.columns[columnId];
            const tasks = column.taskIds.map(
              taskId => this.state.tasks[taskId]
            );
              return <Column key={column.id} column={column} tasks={tasks} />;
          })}
         
         <div className="col-1">
        
         <Provider template={AlertTemplate} {...options}>
          <Home  fun={this.resetInitialData.bind(this)}  fun2={this.resetData.bind(this)}/>
        </Provider>
        
         </div>
         </div>

         <div className="row">
          {columnOrder6.map(columnId => {
            const column = this.state.columns[columnId];
            const tasks = column.taskIds.map(
              taskId => this.state.tasks[taskId]
            );
              return <Column key={column.id} column={column} tasks={tasks} />;
          })}
    
         </div>



        </div>
 
   
   
      </DragDropContext>
      {/* </Div1_2> */}
      {/* <Div1_3></Div1_3> */}
      </Div1>
    )
  }
}


// const Home2  =(props) => { 
//   const alert = useAlert();

//   return (
//     <Fragment>
//      <button type="button"  onClick={()=>props.fun(alert)}   className="btn btn btn-lg btn-block">ScRNA-eq Data Processing Flow </button>
//    </Fragment>
//   );

// };



const Home  =(props) => { 
  const alert = useAlert();

  return (
    <Fragment>
       <ButtonStyle1>
        <button type="button" onClick={()=>props.fun(alert)}   className="btn btn btn-lg btn-block">Run </button>
        </ButtonStyle1>
        <ButtonStyle1>
        <button type="button" onClick={()=>props.fun2(alert)}   className="btn btn btn-lg btn-block">Reset </button>
        </ButtonStyle1>
   </Fragment>
  );
};
const MyTable  =(props) => { 
  return (
    <Fragment>
      {/* <table >
          <tbody> 
          <tr><th> Note:</th></tr>  
          <tr><td> Data</td><td>CPM</td></tr>    
          <tr><td>Normalization</td><td>Batch</td><td>ComBat/Tsne/kBET</td></tr>      
          <tr><td>Normalization_correction</td><td>Batch</td><td>Tsne/kBET</td></tr> 
          </tbody>                
          </table> */}
           Note:<br/>
         Data &nbsp; CPM  <br/>
         Norm &nbsp; Batch  &nbsp; Com/Tsne/kBET<br/>      
   </Fragment>
  );
};
 
ReactDOM.render(<App />, document.getElementById('root'));

import logo from './logo.svg';
import './App.css';
import AddTask from './components/addtask/addtask';
import ParticlesBg from 'particles-bg'
import { useState } from 'react';
import TaskContainer from './components/taskContainer/taskContainer';



function App() {
  let [task,setTask]=useState([])
  console.log(task);
  return (
<>
    <div className="App">
  
      <div className='bubbles'>
    <ParticlesBg type="color"   bg={true} />
      </div>
      <AddTask setTask={setTask} task={task}/>
     
  <TaskContainer task={task} setTask={setTask}></TaskContainer>

    </div>
   
     </>
  );
}

export default App;

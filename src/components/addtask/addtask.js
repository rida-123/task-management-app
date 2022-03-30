import'./addtask.css'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { useState } from 'react';
const AddTask=({setTask,task})=>{

    let[title,setTitle]=useState("");
    let [description,setDescription]=useState("");
    let[taskStatus,setTaskStatus]=useState("Completed")
    let[taskid,setTaskid]=useState(0)
    const handleChange = (event) => {
        setTaskStatus(event.target.value);
      };
      const addtask=(e)=>{
e.preventDefault();
setTaskid(++taskid)
setTask(task=>[...task,{title,description,taskStatus,taskid}])
setTitle("");
setDescription("")

      }
    return(
        <>
        <h1 className='heading'>Task Management App</h1>
        <div className="FormBox">
            <form onSubmit={addtask}>
        <TextField required id="outlined-basic" label="Task Name" variant="outlined" fullWidth className='btn3' autoComplete='off' onChange={(e)=>setTitle(e.target.value)} value={title}/>
        <br></br><br></br>
        <TextField required id="outlined-basic" label="Task Description" variant="outlined"  className='btn4' fullWidth autoComplete='off' onChange={(e)=>setDescription(e.target.value)} value={description} />
        <br></br><br></br>
        <Box sx={{ minWidth: 120 }} style={{ margin: "10px 3px" }}>
      <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth style={{backgroundColor:"white"}}>
        <InputLabel id="demo-simple-select-label" >Select Task Status</InputLabel>
        <Select required
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={taskStatus}
          label="Select Task Status"
          onChange={handleChange}
     
        >
          <MenuItem value={'toDo'}>Todo</MenuItem>
          <MenuItem value={"inProgress"}>In Progress</MenuItem>
          <MenuItem value={"completed"}>Completed</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <br></br><br></br>
    <Button variant="contained" fullWidth type="submit" style={{backgroundColor:"palevioletred" }}>Add Tasks</Button>
       </form>
        </div>
        
        </>

    )
}
export default AddTask;
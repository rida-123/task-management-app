import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { DropTarget } from 'react-drag-drop-container';
import TaskCard from "../taskcard/taskcard";
const TaskBox=({bg,color,boxType,boxText,task,setTask})=>{
    function onDrop(e, taskStatus) {
        // console.log(e.dragData.id);
        let targetid = e.dragData.id;
        setTask(
            task.map(task =>
                parseInt(task.taskid) === parseInt(targetid)
                    ? { ...task, taskStatus: taskStatus }
                    : task
            ))
    }
    return(
        <>
        <div style={{backgroundColor:bg ,width:"500px"}}>
        <DropTarget targetKey="draggable" onHit={(e) => onDrop(e, boxType)} >
< Grid  style={{ padding: '5px' }}>
<Typography variant="h4" component="div" style={{color:color}} >
{boxText}
</Typography>;
{task?.filter(({ taskStatus }) => taskStatus === boxType)
                            ?.map(({ taskStatus, title, description, taskid }, i) =>
                                <TaskCard taskColor={color} id={taskid} key={i} title={title} description={description} taskStatus={taskStatus}></TaskCard>)}
</Grid>
</DropTarget>
        </div>

        </>
    )
}
export default TaskBox;
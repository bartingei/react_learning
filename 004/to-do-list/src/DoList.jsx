import React, {useState} from 'react'

function DoList(){

        const [tasks, setTasks] = useState(["take a bath", "eat breakfast", "go for a run", "start coding"]);

        const [newTask, setNewTask] = useState('');

        function handleInputChange(event){
            setNewTask(event.target.value)
        }

        function addTask(){
            if(newTask.trim() !== ("")){
                setTasks(t => [...t, newTask]);
                setNewTask("");
            }
        }
        function deleteTask(index){
            const updatedTasks = tasks.filter((_,i) => i !== index);
            setTasks(updatedTasks);

        }
        function moveTaskUp(index){
            if(index > 0){
                const updatedTasks = [...tasks];
                [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index] ];
                setTasks(updatedTasks);
            }
        }

        function moveTaskDown(index){
            if(index < tasks.length - 1 ){
                const updatedTasks = [...tasks];
                [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index] ];
                setTasks(updatedTasks);
            }
        }

    return(
        <>
            <div className='to-do-list'>
                <h2>To do list</h2>

                <div>
                    <input 
                    type="text" 
                    value={newTask}
                    placeholder='Enter a task'
                    onChange={handleInputChange}
                    
                    />

                    <button 
                    className='add-button'
                    type="button"
                    onClick={addTask}
                    >
                        add task
                    </button>
                </div>

                <ol>
                    {tasks.map((task, index) => <li key={index}>
                        <span className='text'>{task}</span>
                        <button 
                        onClick={() => {deleteTask(index)}}
                        className='delete-button'
                        type="button">delete </button>
                        <button 
                        className='up-button'
                        onClick={() => {moveTaskUp(index)}}
                        type="button">up</button>
                        <button 
                        className='down-button'
                        onClick={() => {moveTaskDown(index)}}
                        type="button">Down</button>
                        
                    </li>)}
                </ol>
            </div>
        </>
    );
}

export default DoList
import React, { useState } from "react";
import axios from 'axios';

function Create() {
    const [task, setTask] = useState(''); // Initialize with an empty string

    const handleAdd = () => {
        if (task) {
            axios.post('http://localhost:3001/add', { task: task }) // No typo in 'task'
            .then(result => {
                location.reload();
            })
            .catch(err => console.log(err));
        } else {
            console.log('Task is empty');
        }
    };

    return (
      <div className="create_form">
        <input 
            type="text" 
            placeholder="Enter Task" 
            value={task} // Controlled input
            onChange={(e) => setTask(e.target.value)} // Pass event 'e' to get input value
        />
        <button type="button" onClick={handleAdd}>Add</button>
      </div>
    );
}

export default Create;

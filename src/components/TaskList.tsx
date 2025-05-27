import { useRef, useState } from "react";
import { TaskDetail } from "./TaskDetail";
import type { Task } from "./Task";


//rfc - snippet 
export function TaskList() {

    const [tasks, setTask] = useState<Task[]>([
        { id: 1, name: "task 1", done: true },
        { id: 2, name: "task 2", done: true },
        { id: 3, name: "task 3", done: false },
        { id: 4, name: "task 4", done: false },
        { id: 5, name: "task 5", done: true },
    ]);
    const nameRef = useRef<HTMLInputElement>(null);


    const addTask = () => {
        /**
         *  1: <button onClick={addTask()} >➕</button>         ❌
            2: <button onClick={addTask} >➕</button>           ✔️
            3: <button onClick={() => addTask()} >➕</button>   ✔️
         * 
         */
        // tasks.push({ id: Math.random(), name: "test", done: false })

        //const newTasks = tasks.concat();
        //newTasks.push({ id: Math.random(), name: "test", done: false });

        //operator rest (...)
        if (!(nameRef && nameRef.current)) {
            return;
        }

        const newTask = { id: Math.random(), name: nameRef.current.value, done: false };
        setTask([...tasks, newTask]);
        nameRef.current.value = "";
    }


    return (
        <>
            <div>TaskList</div>
            <input type="text" ref={nameRef} />
            <button onClick={addTask} >➕</button>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>done</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map(task => <TaskDetail key={task.id} task={task} />)}
                </tbody>
            </table>
        </>

    )
}

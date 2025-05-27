import { useState } from "react";
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

    return (
        <>
            <div>TaskList</div>
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

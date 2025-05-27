import { useState } from "react";

//rfc - snippet 

interface Task {
    id: number;
    name: string;
    done: boolean;
}

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
                    {tasks.map(task => <tr key={task.id}>
                        <td>{task.id}</td>
                        <td>{task.name}</td>
                        <td>{task.done ? "Yes" : "No"}</td>
                    </tr>)}
                </tbody>
            </table>
        </>

    )
}


interface Props {
    task: Task
}
function TaskDetail({ task }: Props) {
    return <tr key={task.id}>
        <td>{task.id}</td>
        <td>{task.name}</td>
        <td>{task.done ? "Yes" : "No"}</td>
    </tr>
}
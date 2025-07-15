import { useRef } from "react";
import { TaskDetail } from "./TaskDetail";
import { AppHelmet } from "~/AppHelmet";
import { useAppDispatch, useAppSelector } from "~/hooks";
import { createTask, selectTasks } from "./task.slice";


//rfc - snippet 
export default function TaskList() {

    const tasks = useAppSelector(selectTasks)
    const dispatch = useAppDispatch();

    // const [tasks, setTask] = useState<Task[]>([
    //     { id: 1, name: "task 1", done: true },
    //     { id: 2, name: "task 2", done: true },
    //     { id: 3, name: "task 3", done: false },
    //     { id: 4, name: "task 4", done: false },
    //     { id: 5, name: "task 5", done: true },
    // ]);

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

        // const newTask = { id: Math.random(), name: nameRef.current.value, done: false };
        // setTask([...tasks, newTask]);
        dispatch(createTask(nameRef.current.value));
        nameRef.current.value = "";
    }

    // const onToggle = (task: Task) => {
    //     task.done = !task.done;
    //     setTask([...tasks]);
    // }

    // const remove = (task: Task) => {
    //     setTask(tasks.filter(x => x.id !== task.id));
    // }

    return (
        <>
            <AppHelmet title="Task List"></AppHelmet>
            <div>TaskList</div>
            <input type="text" ref={nameRef} />
            <button type="button" onClick={addTask} >➕</button>
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

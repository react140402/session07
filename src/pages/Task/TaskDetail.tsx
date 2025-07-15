import { use, useState } from "react";
import type { Task } from "./Task";
import { AppContext } from "~/AppContext";
import { deleteTask, toggleTask, updateTask } from "./task.slice";
import { useAppDispatch } from "~/hooks";


export interface Props {
    task: Task
}
export function TaskDetail({ task }: Props) {
    const { color } = use(AppContext);
    const dispatch = useAppDispatch();
    const [mode, setMode] = useState<"read" | "edit">("read")
    return <tr>
        <td>{task.id}</td>
        <td style={{ color }}>{mode === "read" ? <span onDoubleClick={() => setMode("edit")}>{task.name}</span> :
            <input onKeyUp={e => setMode(e.key === "Enter" || e.key === "Escape" ? "read" : "edit")} value={task.name} onChange={v => dispatch(updateTask({ ...task, name: v.target.value }))}></input>}</td>
        <td>{task.done ? "Yes" : "No"}
            <button onClick={() => dispatch(toggleTask(task))}>*️⃣</button>
            <button onClick={() => dispatch(deleteTask(task))}>❌</button>
            {/* win 11 ->  ctrl+.  */}
        </td>
    </tr>
};

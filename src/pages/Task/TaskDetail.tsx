import { use } from "react";
import type { Task } from "./Task";
import { AppContext } from "../../AppContext";
import { deleteTask, toggleTask } from "./task.slice";
import { useAppDispatch } from "../../hooks";

export interface Props {
    task: Task
}
export function TaskDetail({ task }: Props) {
    const { color } = use(AppContext);
    const dispatch = useAppDispatch();
    return <tr>
        <td>{task.id}</td>
        <td style={{ color }}>{task.name}</td>
        <td>{task.done ? "Yes" : "No"}
            <button onClick={() => dispatch(toggleTask(task))}>*️⃣</button>
            <button onClick={() => dispatch(deleteTask(task))}>❌</button>
            {/* win 11 ->  ctrl+.  */}
        </td>
    </tr>
};

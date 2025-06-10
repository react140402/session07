import { use } from "react";
import type { Task } from "./Task";
import { AppContext } from "../../AppContext";

export interface Props {
    task: Task
    toggle: (task: Task) => void
    remove: (task: Task) => void
}
export function TaskDetail({ task, toggle, remove }: Props) {
    const { color } = use(AppContext);
    return <tr>
        <td>{task.id}</td>
        <td style={{ color }}>{task.name}</td>
        <td>{task.done ? "Yes" : "No"}
            <button onClick={() => toggle(task)}>*️⃣</button>
            <button onClick={() => remove(task)}>❌</button>
            {/* win 11 ->  ctrl+.  */}
        </td>
    </tr>;
};

import type { Task } from "./Task";

export interface Props {
    task: Task
    toggle: (task: Task) => void
}
export function TaskDetail({ task, toggle }: Props) {
    return <tr>
        <td>{task.id}</td>
        <td>{task.name}</td>
        <td>{task.done ? "Yes" : "No"} <button onClick={() => toggle(task)}>*️⃣</button></td>
    </tr>;
}

import type { Task } from "./Task";

export interface Props {
    task: Task
}
export function TaskDetail({ task }: Props) {
    return <tr>
        <td>{task.id}</td>
        <td>{task.name}</td>
        <td>{task.done ? "Yes" : "No"}</td>
    </tr>;
}

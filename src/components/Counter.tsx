import { Button } from "antd"
import { useAppDispatch, useAppSelector } from "../hooks"
import { decrement, increment, selectCount } from "./counter.slice"

export default function Counter() {
    const counter = useAppSelector(selectCount);
    const dispatch = useAppDispatch();
    return (
        <>
            <Button onClick={() => dispatch(increment())}>➕</Button>
            {counter}
            <Button onClick={() => dispatch(decrement())}>➖</Button>
        </>
    )
}

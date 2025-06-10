import { Button } from "antd"
import { useAppDispatch, useAppSelector } from "../hooks"
import { decrement, increment, selectCount, incrementByAmount, changeNameAndColor } from "./counter.slice"

export default function Counter() {


    const counter = useAppSelector(selectCount);
    const dispatch = useAppDispatch();
    return (
        <>
            <Button onClick={() => dispatch(increment())}>➕</Button>
            {counter}
            <Button onClick={() => dispatch(decrement())}>➖</Button>
            <Button onClick={() => dispatch(incrementByAmount(10))}>add 10</Button>
            <Button onClick={() => dispatch(changeNameAndColor({ color: 'yellow', name: "redux" }))}>X</Button>

        </>
    )
}

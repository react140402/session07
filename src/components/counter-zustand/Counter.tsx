import { Button } from "antd"
import { useCounterStore } from "./counter.store";

export default function Counter() {
    const { count, increment, decrement, incrementByAmount } = useCounterStore();
    return (
        <>
            <Button onClick={() => increment()}>➕</Button>
            {count}
            <Button onClick={() => decrement()}>➖</Button>
            <Button onClick={() => incrementByAmount(10)}>add 10</Button>

        </>
    )
}

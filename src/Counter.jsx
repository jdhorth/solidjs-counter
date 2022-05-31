import { createSignal, createEffect } from "solid-js";


export default function Counter() {
    const [count, setCount] = createSignal(0);

    function add() {
        setCount(count() + 1);
    }

    function remove() {
        setCount(count() - 1);
    }

    createEffect(() => {
        console.log(`hello ${count()}`);
    });

    return (
        <div>TODO
            <button onClick={add}>Add</button>
            <button onClick={remove}>Remove</button>
            <p>Current Count is {count()} </p>
        </div>
    );
}
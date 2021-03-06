import { createSignal, createEffect } from "solid-js";

const [count, setCount] = createSignal(0);

export default function Counter() {


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
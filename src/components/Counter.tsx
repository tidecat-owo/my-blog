import { createSignal } from "solid-js"

const Counter = () => {

    const [count , setCount] = createSignal(0);

    const handleClick = () => setCount(count() + 1);
    return (
      <>
        <h1>{count()}</h1>
        <button onClick={handleClick}>测试</button>
      </>
    );
}

export default Counter;
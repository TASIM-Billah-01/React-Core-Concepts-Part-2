import { useState } from 'react';
import './Counter.css'
const Counter = () => {
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    const handleSubtract = () => {
        const newSubtract = count - 1;
        setCount(newSubtract);
    }
    return (
        <div className='Counter'>
            <h2>This is a simple counter for addition and subtraction</h2>
            <div className=''>
                <button> Count : {count} </button>
                <br />
                <button className='Counter1 Counter2' onClick={handleAdd}> ADD </button>
                <button onClick={handleSubtract}> SUBTRACT </button>
            </div>
           
        </div>
    );
};

export default Counter;



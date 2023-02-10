import { useState } from 'react'

const Counter = () => {
    const [number, setNumber] = useState(0);
    
    const add = () =>{
        setNumber(number + 1);
    };
    const  subtract = () =>{
        setNumber(number -1);
    };
    const reset = () => {
        setNumber(0);
    };

    return (
        <>
            <section id='counter'>
                <div id='counter_bg'>
                    <h1 id='counter_title'>React Count</h1>
                    <article id='counter_panel'>
                        <h2 id='counter_head'>{number}</h2>
                        <div id='counter_buttons'>
                            <button className='counter_btn'  onClick={add}>Add</button>
                            <button className='counter_btn' onClick={subtract}>Subtract</button>
                            <button className='counter_btn' onClick={reset}>Reset</button>
                        </div>
                    </article>
                </div>
            </section>
        </>
    )
}

export default Counter
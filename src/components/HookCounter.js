import React, { useState } from 'react'

const HookCounter = () => {

    const [count, setCount] = useState(0);
    return(
        <React.Fragment>
            <p>The counter value is {count}</p>
            <button onClick={() => setCount(count+1)}>Increment</button>
        </React.Fragment>
    )
}

export default HookCounter;
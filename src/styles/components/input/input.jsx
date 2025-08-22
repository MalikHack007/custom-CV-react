import { useState } from 'react';

export function Input(){
    const [focused, setFocused] = useState(false);

    return(
        <input className={`${focused ? "input_focused" : "input_blurred"} input`} onFocus={()=>setFocused(true)} onBlur={()=>setFocused(false)}/>
    )
}
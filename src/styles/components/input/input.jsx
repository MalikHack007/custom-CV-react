import { useState } from 'react';

export function Input(props){
    const [focused, setFocused] = useState(false);

    return(
        <input {...props} className={`${focused ? "input_focused" : "input_blurred"} input`} onFocus={()=>setFocused(true)} onBlur={()=>setFocused(false)}/>
    )
}
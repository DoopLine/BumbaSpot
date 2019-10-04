import { useState } from 'react';
export default (initVal, type = 'text') => {
    const [state, setState] = useState(initVal);
    const handleChange = e => {
        if(type === 'text'){
            setState(e.target.value);
        }else{
            setState(e.target.checked);
        }

    }
    const reset = () => type === 'text' ? setState("") : setState(false);
    return [state, handleChange, reset];
}
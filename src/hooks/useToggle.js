import { useState } from "react";

export default function useToggle(initVal = false) {
    const [state, setState] = useState(initVal);
    const toggle = (bool) => typeof bool === 'boolean' ? setState(bool) : setState(!state);
    return [state, toggle];
}
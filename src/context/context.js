import { createContext, useState } from "react";

const contextcon = createContext();

function Provider ({children})
{
    let [ count, setCount ] = useState( 0 );
    let incrementCount = () =>
    {
        setCount( count++ );    
    }
    let valuesToShare = {
        count,
        incrementCount
    };
    return (
        <contextcon.Provider value={ valuesToShare }>{children}</contextcon.Provider>
    )
}

export default contextcon;
export {Provider}
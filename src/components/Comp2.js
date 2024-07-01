import { useContext } from "react";
import contextcon from "../context/context";
function Comp2 ()
{
    let a = useContext( contextcon );
    console.log(a);
    return (
        <div>
            <button>Press ME!</button>
        </div>
    )
}
export default Comp2;
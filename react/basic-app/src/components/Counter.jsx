import { useState } from "react";

export function Counter() {
    const [total, setTotal] = useState(0);
    const handleClickIncrement = () => {
        (total < 10) ? setTotal(total+1) : setTotal(total);
    }
    const handleClickDecrement = () => {
        // if(total <= 0) {
        //     setTotal(0)
        // } else {
        //     setTotal(total-1);
        // }

        (total > 0) ? setTotal(total-1) : setTotal(0);
    }
    const handleClickInit = () => {
        setTotal(0);
    }
    return (
        <div style={{width: "200px", padding: "10px 20px", border: "1px solid blue"}}>
            <span style={{display: "block", fontSize:20}}>{total}</span>
            <button type="button"
                    onClick={handleClickDecrement}>-(감소)</button>
            <button type="button"
                    onClick={handleClickIncrement}>+(증가)</button>
            <button type="button"
                    onClick={handleClickInit}>초기화</button>
        </div>
    );

}
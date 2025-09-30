import React from "react"
import { useSelector, useDispatch } from 'react-redux'


export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch(); // 해당 컴포넌트에서 이벤트(액션) 발생시 slice 요청 담당

    return (
        <div>
            <div>
                <button
                    aria-label="Increment Value"
                    onClick={() => dispatch(increment())}
                >Increment
                </button>
            </div>
        </div>
    )

}
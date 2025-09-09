
export function Counter() {
    let total = 0;
    const handleClick = () => {
        total = total+1;
        console.log(total);
    }
    return (
        <div style={{width: "200px", padding: "10px 20px", border: "1px solid blue"}}>
            <span style={{display: "block", fontSize:20}}>{total}</span>
            <button type="button"
                    onClick={handleClick}>클릭</button>
        </div>
    );

}
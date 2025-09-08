export function MyButton({name, type, style}) {
    return (
        // <button style={{background: "red"}} 
        <button className={style}
                type={type}>{name}</button>
    )
}
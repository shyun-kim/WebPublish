

export function MyButton({name, type, style, handleProps}) {
    const handleClick = () => {
        console.log(`(자식)버튼 클릭------------> ${name}`);
        handleProps(`버튼 클릭------------> ${name}`);
    }

    return (
        // <button style={{background: "red"}} 

        <button className={style}
                type={type}
                onClick={handleClick}
                >{name}</button>
    )
}

/**
 * AvatarImage 컴포넌트를 반복시키는 컨테이너 컴포넌트
 */
export function AvatarImageList({imgList}) {

    return(
        <>
            { imgList.map( (item, index) => 
                <img className={item.style} src={item.img} key={index} />
        
            ) }
        </>
        
    );
}

/**
 * Avatar 이미지 컴포넌트
 */
export function AvatarImage({img, style}) {
    return(
        <img className={style} src={img}></img>
    );
}

/**
 * Avatar 컴포넌트 리스트
 */
export function AvatarList({list, className}) {
    return (
        <div className={className}>
            { list.map( (item, index) => <Avatar img={item.img} name={item.name} key={index}/> ) }
            
        </div>
    );
}

export function Avatar({img, name}) {
    return (
        <div className="avatar">
            <AvatarImage img={img} style="avatar-img-circle"/>
            <p>{name}</p>
        </div>
    )
}


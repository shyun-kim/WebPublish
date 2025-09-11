
/**
 * 상품 이미지 컴포넌트
 */
export function Image({img, width, height}) {
    return (
        <img    src={img} 
                style={{width: width, height: height}}/>
    )
}
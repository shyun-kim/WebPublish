import { Image } from '../commons/image.jsx'

/**
 * 상품 이미지 컴포넌트
 */
export function ProductImage({img, style}) {
    const { width, height } = style;
    return (
        <Image  img={img} 
                width={style.width} 
                height={style.height} />
    );
}
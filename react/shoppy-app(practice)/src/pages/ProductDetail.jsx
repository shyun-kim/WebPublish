import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import { PiGiftThin } from 'react-icons/pi';


export function ProductDetail({addCart}) {
    const {pid} = useParams();
    const [product, setProduct] = useState({});
    const [size, setSize] = useState('XS');
    const [imgList, setImgList] = useState([]);
    const tabLabels = ['DETAIL', 'REVIEW', 'Q&A', 'RETURN & DELIVERY'];
    const [tabName, setTabName] = useState('detail');
    const tabEventNames = ['detail', 'review', 'qna', 'return'];

    useEffect(() => {
        const filterData = async () => {
            const jsonData = await axiosData("/data/products.json");
            const [filterProduct] = await jsonData.filter((item) => item.pid === pid);
            setProduct(filterProduct);
            setImgList(filterProduct.imgList);
        }
        filterData();
    }, []);
  
    //쇼핑백 추가하기 함수
    const handleAddCartItem = () => {
        // alert("상품이 카트에 추가되었습니다.");
        const cartItem = {
            pid: product.pid,
            size: size,
            qty: 1
        }
        addCart(cartItem);
    }
    return (
        <div className='content'>
            <div className='product-detail-image-top'>
                <img src={product.image} />
                <ImageList  className='product-detail-image-top-list'
                            imgList={imgList} />
            </div>
            <ul className='product-detail-info-top'>
                <li class>

                </li>

            </ul>
        </div>
    )
}

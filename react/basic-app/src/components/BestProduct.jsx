import { useState, useEffect } from 'react';
// import { ProductImage } from './shared/ProductImage.jsx';
import { fetchData } from '../util/commonData.js'
import { BestProductImage } from './shared/BestProductImage.jsx';
import { BestProductContent } from './shared/BestProductContent.jsx';

/**
 * 베스트 상품 컴포넌트
 */
export function BestProduct() {
    const [cartCount, setCartCount] = useState(0); 
    const [bestProductList, setBestProductList] = useState([]);
    const [apis, setApis] = useState({});
    
    const handleCartCount = () => {
        setCartCount(cartCount + 1); 
    } 

    //컴포넌트 호출 시 데이터 로딩, 비동기 처리  --> useEffect Hooks 함수
    useEffect(()=>{
        // fetch("/data/best_products.json")
        //     .then( response => response.json() )
        //     .then( jsonData => setBestProductList(jsonData))
        //     .catch(error => console.log(error));

        // const fetchData = async () => {
        //     const response = await fetch("/data/best_products.json");
        //     const jsonData = await response.json();
        //     setBestProductList(jsonData);
        // }
        // fetchData();

        //fetch 함수 생성
        const fetch = async() => {
            const result = await fetchData("/data/best_products.json");
            console.log('result ==>', result);
            setBestProductList(result);
        }
        
        fetch();
        

    }, []);

    console.log(apis);
    

    return (
        <>
            <h2>베스트 상품 - 🛒({cartCount})</h2>
            <ul className="best-product">
                {bestProductList.map((product, index)=>  
                    (index === 0) ?
                        <li key={index}><BestProductImage 
                            img={product.img}
                            style={{width:"600px", height:"800px"}}
                            rank={product.rank}
                            like={product.like}
                            cartCount={handleCartCount}/></li>
                    : <li key={index}><BestProductItem 
                                        item={product}
                                        cartCount={handleCartCount}/></li>
                )}
            </ul>
        </>
    );
}


/**
 * 베스트 상품 아이템 컴포넌트
 */
export function BestProductItem({item, cartCount}) {
    return (  
            <div>            
                <BestProductImage 
                                img={item.img}
                                style={{width:"200px", height:"300px"}}
                                rank={item.rank}
                                like={item.like}
                                icon="🛒"
                                cartCount={cartCount} />
                <BestProductContent 
                                title={item.title}
                                sale={item.sale}
                                price={item.price}
                                like={item.like}
                                icon="🥞" />
            </div>        
    );
}


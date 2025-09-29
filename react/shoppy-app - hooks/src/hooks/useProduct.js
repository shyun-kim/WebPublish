import React, {useContext} from 'react';
import { ProductContext } from '../context/ProductContext.js';
import { axiosData } from '../utils/dataFetch.js';

export function useProduct() {
    const { productList, setProductList } = useContext(ProductContext);

    const createProduct = (number) => {
        const load = async () => {
            const jsonData
            = await axiosData("/data/products.json");
        const rows = groupByRows(jsonData, number);
        setRows(rows);
        }
        load();

    }
    
    const filterProduct = (pid) => {
        const filterData = async () => {
            const [filterProduct] = jsonData.filter((item) => item.pid === pid);
            setProduct(filterProduct);
            setImgList(filterProduct.imgList);
        }
        

    }

    return { createProduct, filterProduct};
}
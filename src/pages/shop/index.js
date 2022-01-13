import React from 'react';
import Router from 'next/router'
import Link from 'next/link';

import { getProducts } from "../../graphql/queries/products";
import { useQuery } from "@apollo/react-hooks";
import ProductCard from '../../components/UI/Card/ProductCard'
import styles from "./index.module.scss";
import { FragmentsOnCompositeTypesRule } from 'graphql';

const Index = () => {

    const { loading, error, data } = useQuery(getProducts);
    
    if (loading) {
        return "loading...";
    }

    if (error) {
        console.log(error);
        return null;
    }

    console.log(data);

    return (
        <div className="shop__grid">
            {
                data.getProducts.map((product) => ( 
                    <Link href = {`/shop/${product.id}`} key={product.id}>
                    <a>
                    <ProductCard 
                        id = {product.id}
                        title = {product.title}
                        price = {product.price}
                    />
                    </a>
                    </Link>
                ))
            }
        </div>
    );
}

export default Index;

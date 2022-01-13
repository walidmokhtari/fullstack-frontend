import React, {useEffect} from "react";
import TitlePage from "../../../components/UI/Title/TitlePage";
import {useRouter} from 'next/router'

import { getProduct } from "../../../graphql/queries/products";
import { useQuery } from "@apollo/react-hooks";

import ProductCard from '../../../components/UI/Card/ProductCard'
import { route } from "next/dist/server/router";


const Index = () => {
  const router = useRouter();
  const { loading, error, data } = useQuery(getProduct, {
    variables : {
      id: router.query.id
    }
  });

  if (loading) {
    return "loading...";
  }

  if (error) {
    console.log(error);
    return null;
  }
 

  return (
    
      <div>
        <TitlePage
          title = "Products Details"
        />
        <ProductCard 
          id = {data.getProduct.id}
          title = {data.getProduct.title}
          price = {data.getProduct.price}
        />
      </div>
  )
  
  };
  
  export default Index;
  
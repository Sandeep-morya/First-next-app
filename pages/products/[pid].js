import axios from "axios";
import React from "react";
import SingleProduct from "../../components/SingleProduct";

const SingleProdcutPage = ({data}) => {
  return <SingleProduct data={data}/>;
};



export const getServerSideProps = async (context) => {
  const id = context.params.pid;
  const {data} = await axios.get(`http://localhost:8080/products/${id}`)
  return {
    props:{
        data,
    }
  }
};

export default SingleProdcutPage;

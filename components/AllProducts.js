import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchAllProducts } from "../store/allProducts";

import { View, Text } from "react-native";

export default function AllProducts(props) {
  const dispatch = useDispatch();
  const products = useSelector(state => state.allProducts);
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);
  console.log("Products!", products);
  return (
    <View>
      {!products.length ? (
        <Text>No Products</Text>
      ) : (
        products.map(product => {
          return <Text>{product.id}</Text>;
        })
      )}
    </View>
  );
}

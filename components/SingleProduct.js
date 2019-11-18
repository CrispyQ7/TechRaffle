import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchSingleProduct } from "../store/singleProduct";

import { timeFormatter } from "../utilities";

import { Image } from "react-native";

export default function SingleProduct(props) {
  const dispatch = useDispatch();

  const product = useSelector(state.state.singleProduct);
  useEffect(() => {
    dispatch(fetchSingleProduct(props.id));
  }, []);

  return (
    <React.Fragment>
      {!product ? <Text>No Product</Text> : <Text>{product.id}</Text>}
    </React.Fragment>
  );
}

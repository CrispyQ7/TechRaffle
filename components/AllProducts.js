import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchAllProducts } from "../store/allProducts";

import { timeFormatter } from "../utilities";

import { View, Image } from "react-native";

import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";
import SingleProduct from "./SingleProduct";

export default function AllProducts(props) {
  const dispatch = useDispatch();

  const [time, setTime] = useState(new Date().getTime());
  useEffect(() => {
    const interval = setTimeout(() => {
      const now = new Date();
      setTime(now.getTime() / 1000);
      //set the timeout to ~100 for better accuracy
    }, 1000);
  }, [time]);

  const products = useSelector(state => state.allProducts);
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  return (
    <React.Fragment>
      {!products.length ? (
        <Text>No Products</Text>
      ) : (
        products.map(product => {
          return (
            <React.Fragment key={product.id}>
              <Container>
                <Header />
                <Content>
                  <Card>
                    <CardItem>
                      <Left>
                        <Thumbnail source={{ uri: product.data.imageUrl }} />
                        <Body>
                          <Text>{product.id}</Text>
                          {/* <Text note>GeekyAnts</Text> */}
                        </Body>
                      </Left>
                    </CardItem>
                    <CardItem cardBody onPress={() => handlePress(product.id)}>
                      <Image
                        source={{ uri: product.data.imageUrl }}
                        style={{ height: 200, width: null, flex: 1 }}
                      />
                    </CardItem>
                    <CardItem>
                      <Left>
                        <Button transparent>
                          <Icon active name="ticket" type="Foundation" />
                          <Text>{product.data.entries} </Text>
                        </Button>
                      </Left>
                      <Body>
                        <Button transparent>
                          <Text>value</Text>
                          <Icon active name="dollar" type="FontAwesome" />
                          <Text>{product.data.price}</Text>
                        </Button>
                      </Body>
                      <Right>
                        <Text>
                          {timeFormatter(product.data.endTime.seconds - time)}
                        </Text>
                      </Right>
                    </CardItem>
                  </Card>
                </Content>
              </Container>
            </React.Fragment>
          );
        })
      )}
    </React.Fragment>
  );
}

function handlePress(id) {
  console.log("i made it!", id);
  //<SingleProduct id={id} />;
}

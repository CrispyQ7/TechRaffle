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

export default function AllProducts(props) {
  const dispatch = useDispatch();
  const products = useSelector(state => state.allProducts);
  // const now = new Date().getTime() / 1000;
  // console.log(now);
  const [time, setTime] = useState(new Date().getTime());
  useEffect(() => {
    const interval = setTimeout(() => {
      const now = new Date();
      //console.log(now.toLocaleTimeString());
      setTime(Math.floor(now.getTime() / 1000));
    }, 1000);
  }, [time]);
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);
  //console.log("Products!", typeof products.data.endTime);
  return (
    <React.Fragment>
      {!products.length ? (
        <Text>No Products</Text>
      ) : (
        products.map(product => {
          //console.log("Products!", product.data.endTime.seconds);
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
                    <CardItem cardBody>
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
                          {console.log(
                            "ENDTIME: ",
                            product.data.endTime.seconds,
                            "CLOCKTIME: ",
                            time
                          )}
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

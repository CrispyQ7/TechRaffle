import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchAllProducts } from "../store/allProducts";

import { View } from "react-native";

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
          return (
            <React.Fragment key={product.id}>
              <Container>
                <Header />
                <Content>
                  <Card>
                    <CardItem>
                      <Left>
                        {/* <Thumbnail source={{ uri: "Image URL" }} /> */}
                        <Body>
                          <Text>{product.id}</Text>
                          <Text note>GeekyAnts</Text>
                        </Body>
                      </Left>
                    </CardItem>
                    <CardItem cardBody>
                      {/* <Image
                        source={{ uri: "Image URL" }}
                        style={{ height: 200, width: null, flex: 1 }}
                      /> */}
                    </CardItem>
                    <CardItem>
                      <Left>
                        <Button transparent>
                          <Icon active name="thumbs-up" />
                          <Text>{product.data.entries} Entries</Text>
                        </Button>
                      </Left>
                      <Body>
                        <Button transparent>
                          <Icon active name="chatbubbles" />
                          <Text>4 Comments</Text>
                        </Button>
                      </Body>
                      <Right>
                        <Text>11h ago</Text>
                      </Right>
                    </CardItem>
                  </Card>
                </Content>
              </Container>
            </React.Fragment>
          );
        })
      )}
    </View>
  );
}

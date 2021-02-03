import React from "react";
import { Card, Image, Container, Grid, Header } from "semantic-ui-react";
import style from "./style.module.css";
import Layout from "../../../core/layout/Layout";
const Orders = () => {
  return (
    <Layout>
      {" "}
      <Container style={{ marginTop: "100px" }}>
        {Array(10)
          .fill()
          .map((i, index) => (
            <Card key={index} className={style.orderCard}>
              <Card.Content>
                <Grid style={{ margin: "auto" }}>
                  <Grid.Row>
                    <Grid.Column width={3}>
                      <Image
                        floated="left"
                        size="mini"
                        src="https://rukminim1.flixcart.com/image/75/75/kf0087k0/portable-laptop-table/h/s/h/mfb-melamine-fiberboard-bbd-foldable-laptop-table-with-cup-original-imafvjwztczaq8ah.jpeg"
                        className={style.orderImage}
                      />
                    </Grid.Column>
                    <Grid.Column width={6}>
                      <Card.Header>
                        <Header as="h4">WashBasin Repair</Header>
                      </Card.Header>

                      <Card.Description>Provider: Ramlal</Card.Description>
                      <Card.Meta>Ahmedabad Memnagar</Card.Meta>
                    </Grid.Column>
                    <Grid.Column width={2} style={{ margin: "auto" }}>
                      <Card.Header>
                        {" "}
                        <Header as="h4">&#8377;599</Header>{" "}
                      </Card.Header>
                    </Grid.Column>
                    <Grid.Column width={5} style={{ margin: "auto" }}>
                      <Header as="h4" style={{ color: "#696969" }}>
                        <div
                          className={[
                            style.orderStatus,
                            style.orderSuccess
                          ].join(" ")}
                        ></div>
                        <span>Delivered On 22 Feb 2021</span>
                      </Header>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Card.Content>
            </Card>
          ))}
      </Container>
    </Layout>
  );
};

export default Orders;

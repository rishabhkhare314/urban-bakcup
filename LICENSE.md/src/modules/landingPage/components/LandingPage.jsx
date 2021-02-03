import React, { useEffect, useState } from "react";
import { Grid, Image, Container, List, Dropdown } from "semantic-ui-react";
import get from "lodash.get";
import { cityData } from "./../../../shared/data.json";
import style from "./style.module.css";
import Layout from "./../../../core/layout/Layout";
import Refer from "./../../../shared/components/refer/Refer";
import LandingPageServices from "./../landingPage.service";

const LandingPage = ({ history }) => {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  const citySelector = (e, data) => {
    const { value } = data;
    setSelectedCity(value);
    history.push(`${value}/service/`);
  };

  const DATA = async () => {
    const cities = await LandingPageServices.getCities();
    let arr = [];
    get(cities, "data.Data").map(city => {
      let obj = {
        text: city.countryName,
        value: city.countryName,
        disabled: true
      };
      arr.push(obj);
      return city.cities.map(data => {
        return arr.push({ text: data.cityName, value: data._id });
      });
    });
    setCities(arr);
  };
  useEffect(() => {
    DATA();
  }, []);

  return (
    <Layout>
      <Grid divided="vertically" className={style.mainBanner}>
        <Grid.Row columns={2}>
          <Grid.Column className={style.bannerImage} width={7}>
            <Image
              src="https://res.cloudinary.com/urbanclap/image/upload/q_40,f_auto/categories/category_v2/category_19be5040.jpeg"
              style={{ height: "730px", width: "100%" }}
            />
          </Grid.Column>
          <Grid.Column className={style.banner} width={9}>
            <div style={{ marginTop: "150px", marginLeft: "100px" }}>
              <h6 className={style.subHeading}>Urban Refresh</h6>
              <h1 className={style.heading}>
                Quality home services, on demand
              </h1>
              <h3
                className={style.subHeading}
                style={{
                  marginTop: "36px",
                  textTransform: "capitalize",
                  letterSpacing: 0
                }}
              >
                Experienced, hand-picked Professionals to serve you at your
                doorstep
              </h3>
              <div className={style.citySelector}>
                <h3 style={{ color: "black", fontWeight: 700 }}>
                  Where do you need a service?
                </h3>
                <Dropdown
                  onChange={citySelector}
                  options={cities}
                  placeholder="Select City"
                  className={style.cityDropdown}
                  selection
                  fluid
                  value={selectedCity}
                />
              </div>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      {/* </div> */}

      <section style={{ marginTop: "50px" }}>
        <Container>
          <Grid>
            {" "}
            <Grid.Row>
              <Grid.Column width={6}>
                <h1 style={{ fontWeight: 600 }}>Why Urban Company?</h1>

                <List>
                  <List.Item as="a" className={style.aboutHeading}>
                    <Image
                      src="https://res.cloudinary.com/urbanclap/image/upload/q_40,f_auto/categories/category_v2/category_29614d40.png"
                      className={style.iconImage}
                    />
                    <List.Content>
                      <List.Header className={style.aboutList}>
                        Transparent pricing
                      </List.Header>
                      <List.Description className={style.aboutSublist}>
                        See fixed prices before you book. No hidden charges.
                      </List.Description>
                    </List.Content>
                  </List.Item>

                  <List.Item as="a" className={style.aboutHeading}>
                    <Image
                      src="https://res.cloudinary.com/urbanclap/image/upload/q_40,f_auto/categories/category_v2/category_29614d40.png"
                      className={style.iconImage}
                    />
                    <List.Content>
                      <List.Header className={style.aboutList}>
                        Transparent pricing
                      </List.Header>
                      <List.Description className={style.aboutSublist}>
                        See fixed prices before you book. No hidden charges.
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item as="a" className={style.aboutHeading}>
                    <Image
                      src="https://res.cloudinary.com/urbanclap/image/upload/q_40,f_auto/categories/category_v2/category_29614d40.png"
                      className={style.iconImage}
                    />
                    <List.Content>
                      <List.Header className={style.aboutList}>
                        Transparent pricing
                      </List.Header>
                      <List.Description className={style.aboutSublist}>
                        See fixed prices before you book. No hidden charges.
                      </List.Description>
                    </List.Content>
                  </List.Item>
                </List>
              </Grid.Column>

              <Grid.Column width={6}>
                <div className={style.qualityBox}>
                  <Image
                    src="https://res.cloudinary.com/urbanclap/image/upload/q_20,f_auto/categories/category_v2/category_cb4d9130.png"
                    style={{ width: "90px" }}
                  />
                  <h1>100% Quality Assured</h1>
                  <p className={style.qualitySubheading}>
                    If you don’t love our service, we will make it right.
                  </p>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </section>
      <Refer />
    </Layout>
  );
};

export default LandingPage;

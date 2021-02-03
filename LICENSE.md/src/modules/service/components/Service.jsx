import React, { useState, useEffect } from "react";
import { Header, Dropdown, Icon, Image } from "semantic-ui-react";
import get from "lodash.get";
// import { cityData } from "./../../../shared/data.json";
import Service from "./../service.service";
import style from "./style.module.css";
import Offer from "../../../shared/components/offer/Offer";
import Refer from "../../../shared/components/refer/Refer";
import Layout from "../../../core/layout/Layout";
import Search from "./Search";

const Services = ({ match, history }) => {
  const cityId = get(match, "params.cityId");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(cityId);
  // const [searchData, setSearchData] = useState([]);
  const [services, setServices] = useState([]);

  const DATA = async () => {
    let arr = [];
    const cities = await Service.getCities();
    get(cities, "data.Data").map(city => {
      arr.push({
        text: city.countryName,
        value: city.countryName,
        disabled: true
      });
      return city.cities.map(c => {
        return arr.push({ text: c.cityName, value: c._id });
      });
    });
    setCities(arr);

    const services = await Service.getServices(cityId);
    setServices(get(services, "data.Data"));
  };

  const servicehHandler = id => {
    history.push(`/${selectedCity}/service/${id}/service-categories`);
  };

  const citySelector = (e, data) => {
    const { value } = data;
    setSelectedCity(value);
  };

  // const serviceSearch = async e => {
  //   const { value } = e.target;
  //   if (value.length > 2) {
  //     const searchData = await Service.searchServices(value, selectedCity);
  //     console.log("SEARCH DATA", get(searchData, "data.Data.serviceList"));
  //     setSearchData(get(searchData, "data.Data.serviceList"));
  //   }
  // };

  useEffect(() => {
    DATA();
  }, []);

  return (
    <Layout>
      <section className={style.componentBanner}>
        <Header as="h1" className={style.serviceHeading}>
          Home services, on demand
        </Header>
        <div style={{ display: "flex" }}>
          <div className={style.citySearch}>
            <Dropdown
              onChange={citySelector}
              options={cities}
              placeholder="Select City"
              className={style.cities}
              selection
              fluid
              value={selectedCity}
            />
          </div>
          <div className={style.serviceSearch}>
            {/* <span>
              <Icon name="search" className={style.searchIcon} size="tiny" />
            </span>
            <input
              type="text"
              name="search"
              placeholder="Search Services"
              className={style.searchText}
              onChange={serviceSearch}
            /> */}
            <Search  cityId={cityId}/>
          </div>
        </div>
      </section>

      <section className={style.serviceBox}>
        {services && services.length
          ? services.map((item, index) => {
              console.log(
                "ITEMMM",
                item
              )
              return(
                <div
                  key={item._id}
                  className={style.services}
                  onClick={e => servicehHandler(item._id)}
                >
                  <Image
                    src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609755809693-ea7299.png"
                    style={{ margin: "auto" }}
                  />
                  <p style={{ padding: "10px" }}>{item.serviceName.charAt(0).toUpperCase()}{item.serviceName.substr(1).toLowerCase()}</p>
                </div>
              );
            })
          : null}
      </section>
      {/* <Border />
      <Offer />
      <Refer /> */}
      <Offer />
      <Refer />
    </Layout>
  );
};

export default Services;

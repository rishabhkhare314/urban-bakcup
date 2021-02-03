import axios from "axios";

class Service {
  searchServices(searchStr, cityId) {
    console.log("GET SERVICDESSSS Call", searchStr, ":::::::", cityId);
    return axios.get(
      `http://localhost:5050/v1/search/${cityId}/service?search=${searchStr}`
    );
    //   axios.get("")
  }
  getCities() {
    return axios.get(`http://localhost:5050/home/v1/`);
  }

  getServices(cityId) {
    return axios.get(`http://localhost:5050/home/v1/service/${cityId}`);
    
  }
  
}

export default new Service();

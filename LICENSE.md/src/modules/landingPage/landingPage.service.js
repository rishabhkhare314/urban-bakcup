import axios from 'axios'
class LandingPageServices {
  getCities() {
    return axios.get(`http://localhost:5050/home/v1/`);
  }
}

export default new LandingPageServices();

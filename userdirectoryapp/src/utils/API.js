/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=100&nat=us,dk,fr,gb";

export default {
  GetItems: () => {
    //AXIOS call for random user - no API key required
    return axios.get(BASEURL)
  }
};
import axios from "axios";

const get = (url, params) => {
  return axios.get(url, params)
    .then(response => {
      if (response && response.status === 200) {
        return response.data;
      } else {
        return response;
      }
    })
    .catch(error => {
      // handle error
      console.log(error);
      return error;
    });
}

const apiServices = {
  get
}

export default apiServices;

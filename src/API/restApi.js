import axios from "axios";

const BASE_URL = "https://kec.giriwangi.com/api/";

function getApi(path_url) {
  // console.log(BASE_URL + path_url);
  return new Promise((resolve, reject) => {
    var config = {
      method: "get",
      url: BASE_URL + path_url,
      headers: {
        //'Authorization': 'Bearer ' + token
      },
    };
    axios(config)
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}

function putViwes(path_url) {
  // console.log(BASE_URL + path_url);
  return new Promise((resolve, reject) => {
    var config = {
      method: "POST",
      url: BASE_URL + path_url,
      headers: {
        //'Authorization': 'Bearer ' + token
      },
    };
    axios(config)
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
      });
  });
}

export { getApi, putViwes };

const axios = require("axios");

function fetchData() {
  // you might need the next line, depending on your API provider.
  axios.defaults.headers.post["Content-Type"] = "application/json";
  axios
    .get("http://127.0.0.1:5000/info")
    .then((response) => {
      // Here you can handle the API response
      // Maybe you want to add to your HTML via JavaScript?
      document.getElementById("limit").innerHTML =
        response.data.my_package_summary.limit;
      document.getElementById("used").innerHTML =
        response.data.my_package_summary.used;
      document.getElementById("remaining").innerHTML =
        response.data.my_package_summary.limit -
        response.data.my_package_summary.used;
      document.getElementById("status").innerHTML = response.data.status;

      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
}

// call the function to start executing it when the page loads inside Electron.
setInterval(() => {
  fetchData();
}, 5000);

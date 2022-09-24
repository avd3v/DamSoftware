import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.min.js"></script>
  </BrowserRouter>
);

{
  /* <script>

let ctx = document.querySelector('#myChart').getContext('2d');
let MyChart = new Chart(ctx, {
  type:'line',
  data: {
    labels: [1,2,3,4,5],
    datasets: [{
      label: 'Sutedents',
      data: [50, 40, 25, 30, 15],
      backgroundColor:['white'],
      borderColor: [
        '#80d8ff',
        "#82b1ff",
        "#b388ff",
        "80d8ff",
        "#ea80fc"
      ],
      borderWidth: 4
    }]
  },
  options:{}
})

</script> */
}

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    /* title: {
      display: true,
      text: "Chart.js Line Chart",
    }, */
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data2 = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Affected People",
      data: [0, 20, 30, 10, 40, 15, 25, 35],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

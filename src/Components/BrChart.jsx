export const optionsBar = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const dataBar = {
  labels,
  datasets: [
    {
      label: "Rescued",
      data: [20, 30, 40, 50, 60, 70, 80],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Affected",
      data: [40, 50, 60, 70, 80, 90, 100],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

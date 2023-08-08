// const chart = document.querySelector("#chart").getContext("2d");

const ctx = document.getElementById("chart").getContext("2d");
new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "فروردین",
      "اردیبهشت",
      "خرداد",
      "تیر",
      "مرداد",
      "شهریور",
      "مهر",
      "آبان",
      "آذر",
      "دی",
      "بهمن",
      "اسفند",
    ],
    datasets: [
      {
        label: "درآمد",
        data: [
          31500, 41000, 88800, 26000, 46000, 32698, 5000, 3000, 18656, 16322,
          36844,
        ],
        borderColor: "red",
        borderWidth: 2,
      },
      {
        label: "مخارج",
        data: [
          29374, 33537, 49631, 59095, 57828, 36684, 39974, 48847, 48116, 61004,
          76230,
        ],
        borderColor: "blue",
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
  },
});

//show or hide sidebar
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("aside");

menuBtn.addEventListener("click", () => {
  sidebar.style.display = "block";
  sidebar.style.left = "0";
});
closeBtn.addEventListener("click", () => {
  sidebar.style.display = "none";
  sidebar.style.right = "-100%";
});

//change theme

const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  themeBtn.querySelector("span:first-child").classList.toggle("active");
  themeBtn.querySelector("span:last-child").classList.toggle("active");
});

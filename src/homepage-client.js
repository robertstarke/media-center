let timeElement = document.getElementById("time");

function time() {
  timeElement.textContent = dayjs().format("h:mm a");
}

time();

setInterval(time, 1000);

window.addEventListener(
  "keyup",
  ({ key }) => {
    const link = document.querySelector(`[data-accesskey="${String(key)}"]`);
    if (link) {
      link.click();
    }
  },
  true,
);

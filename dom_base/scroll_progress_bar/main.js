const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;

  const scrollable = scrollHeight - clientHeight;
  const percent = (scrollTop / scrollable) * 100;

  progressBar.style.width = percent + "%";
});

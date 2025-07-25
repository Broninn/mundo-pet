document.querySelector(".open-modal").addEventListener("click", () => {
  document
    .getElementById("schedule-modal")
    .setAttribute("aria-hidden", "false");
});

document.querySelectorAll("[data-close-modal]").forEach((el) => {
  el.addEventListener("click", () => {
    document
      .getElementById("schedule-modal")
      .setAttribute("aria-hidden", "true");
  });
});

import { initializeModalValues } from "../modules/form/hours.js";

const openModalButton = document.querySelector(".open-modal");
const closeModalButtons = document.querySelectorAll("[data-close-modal]");
const modal = document.querySelector("#schedule-modal");

openModalButton.addEventListener("click", () => {
  // Define a data para hoje e atualiza os horários disponíveis
  initializeModalValues();
  modal.setAttribute("aria-hidden", "false");
});

closeModalButtons.forEach((el) => {
  el.addEventListener("click", () => {
    modal.setAttribute("aria-hidden", "true");
  });
});


import dayjs from "dayjs";

const form = document.querySelector("form");
const clientName = document.querySelector("#input-client-name");
const petName = document.querySelector("#input-pet-name");
const phone = document.querySelector("#input-phone-name");
const serviceDetails = document.querySelector("#input-service-name");
const selectedDate = document.querySelector("#date");
const selectedTime = document.querySelector("#time");

const inputToday = dayjs(new Date()).format("YYYY-MM-DD");
selectedDate.value = inputToday;
selectedDate.min = inputToday;

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  try {
    const name = clientName.value.trim();
    if (!name) {
      return alert("Informe o nome do cliente");
    }
    const pet = petName.value.trim();
    if (!pet) {
      return alert("Informe o nome do pet");
    }
    const phoneClient = phone.value.trim();
    if (!phoneClient) {
      return alert("Informe o telefone");
    }
    const service = serviceDetails.value.trim();
    if (!service) {
      return alert("Informe o serviço");
    }

    // Gera um id
    const id = new Date().getTime();

    // Junta a data e a hora para criar o agendamento
    const when = dayjs(`${selectedDate.value} ${selectedTime.value}`);

    // Realiza o agendamento
    await scheduleNew({
      id,
      name,
      pet,
      phoneClient,
      service,
      when: when.toISOString()
    });
  } catch (error) {
    alert("Não foi possível realizar o agendamento");
    console.log(error);
  }
});

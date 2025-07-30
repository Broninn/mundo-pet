import dayjs from "dayjs";
import { updateAvailableTimes } from "./hours.js";
import { scheduleNew } from "../../services/schedule-new.js";

const form = document.querySelector("form");
const clientName = document.querySelector("#input-client-name");
const petName = document.querySelector("#input-pet-name");
const phone = document.querySelector("#input-phone-name");
const serviceDetails = document.querySelector("#input-service-name");
const selectedDate = document.querySelector("#date");
const selectedTime = document.querySelector("#time");

// const inputToday = dayjs(new Date()).format("YYYY-MM-DD");
// selectedDate.value = inputToday;
// selectedDate.min = inputToday;

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  try {
    // Mapeia os campos para validação e coleta de dados
    const fields = {
      name: { element: clientName, message: "Informe o nome do cliente" },
      pet: { element: petName, message: "Informe o nome do pet" },
      phoneClient: { element: phone, message: "Informe o telefone" },
      service: { element: serviceDetails, message: "Informe o serviço" },
    };

    const scheduleData = {};

    // Itera sobre os campos para validar e coletar os valores
    for (const key in fields) {
      const value = fields[key].element.value.trim();
      if (!value) {
        return alert(fields[key].message);
      }
      scheduleData[key] = value;
    }

    // Gera um id
    const id = new Date().getTime();

    // Junta a data e a hora para criar o agendamento
    const when = dayjs(`${selectedDate.value} ${selectedTime.value}`).format(
      "YYYY-MM-DD HH:mm"
    );
    console.log(when)

    // Realiza o agendamento
    await scheduleNew({ id, ...scheduleData, when: when });

    // Limpa os campos de texto do formulário
    Object.values(fields).forEach((field) => {
      field.element.value = "";
    });

    // Atualiza a lista de horários disponíveis
    await updateAvailableTimes();

    // Seleciona o próximo horário disponível
    const firstAvailableOption = selectedTime.querySelector(
      "option[value]:not([disabled])"
    );
    if (firstAvailableOption) {
      selectedTime.value = firstAvailableOption.value;
    } else {
      selectedTime.value = "";
    }
  } catch (error) {
    alert("Não foi possível realizar o agendamento");
    console.log(error);
  }
});

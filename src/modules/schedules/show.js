import dayjs from "dayjs";

// Seleciona as sessões (manhã, tarde e noite)

const periodMorning = document.getElementById("period-morning");
const periodAfternoon = document.getElementById("period-afternoon");
const periodNight = document.getElementById("period-night");

export function schedulesShow({ dailySchedules }) {
  try {

    // Limpa as listas
    periodMorning.innerHTML = "";
    periodAfternoon.innerHTML = "";
    periodNight.innerHTML = "";

    // Renderiza os agendamentos por período

    dailySchedules.forEach((schedule) => {
      const item = document.createElement("li");
      const time = document.createElement("strong");
      const names = document.createElement("div");
      const humanName = document.createElement("span");
      const petName = document.createElement("span");
      const service = document.createElement("span");

      // Adicionar o id do agendamento
      item.setAttribute("data-id", schedule.id);

      time.textContent = dayjs(schedule.when).format("HH:mm");

      names.classList.add("names");
      humanName.textContent = schedule.name;
      humanName.classList.add("human-name");

      petName.textContent = schedule.pet;
      petName.classList.add("animal-name");

      service.textContent = schedule.service;

      // Cria remover agendamento
      const removeSchedule = document.createElement("a");
      removeSchedule.textContent = "Remover Agendamento";
      removeSchedule.classList.add("cancel-schedule");

      // Cria o separador com espaços para dar o espaçamento desejado
      const separator = document.createTextNode(" / ");

      names.append(humanName, separator, petName);

      // Adicionar no item
      item.append(time, names, service, removeSchedule);

      const hour = dayjs(schedule.when).hour();

      // Renderizar o agendamento na sessão (manhã, tarde ou noite)
      if (hour <= 12) {
        periodMorning.appendChild(item);
      } else if (hour > 12 && hour <= 18) {
        periodAfternoon.appendChild(item);
      } else {
        periodNight.appendChild(item);
      }
    });
  } catch (error) {
    console.log(error);
    alert("Não foi possível carregar os agendamentos");
  }
}

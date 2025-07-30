import dayjs from "dayjs";
import { scheduleLoad } from "../../services/schedule-load.js";

const select = document.querySelector("#time");
const selectedDateInput = document.querySelector("#date");

// Horário de início e fim do atendimento
const startHour = 9;
const endHour = 20;

export function initializeModalValues() {
  // Define a data de hoje como valor inicial do input de data
  const today = dayjs(new Date()).format("YYYY-MM-DD");
  selectedDateInput.value = today;
  selectedDateInput.min = today;
  updateAvailableTimes();
}

/**
 * Atualiza a lista de horários, desabilitando os que já passaram e os que já estão agendados.
 */
export async function updateAvailableTimes() {
  const now = dayjs();
  const selectedDate = dayjs(selectedDateInput.value);

  // Busca os agendamentos existentes
  const schedules = await scheduleLoad();
  const scheduledTimes =
    schedules
      ?.filter((schedule) => dayjs(schedule.when).isSame(selectedDate, "day"))
      .map((schedule) => dayjs(schedule.when).format("HH:mm")) || [];

  // Verifica se a data selecionada é hoje
  const isToday = selectedDate.isSame(now, "day");

  const options = select.querySelectorAll("option");
  let isCurrentSelectionDisabled = false;

  options.forEach((option) => {
    if (!option.value) {
      return;
    }

    const optionTime = dayjs(`${selectedDateInput.value} ${option.value}`);

    // Desabilita horários que já passaram ou que já estão agendados
    if (
      (isToday && optionTime.isBefore(now)) ||
      scheduledTimes.includes(option.value)
    ) {
      option.disabled = true;

      if (select.value === option.value) {
        isCurrentSelectionDisabled = true;
      }
    } else {
      option.disabled = false;
    }
  });

  if (isCurrentSelectionDisabled) {
    select.value = "";
  }
}

/**
 * Gera as opções de horário
 */
function createTimeOptions() {
  const timeSlots = [];
  // Loop para gerar as horas
  for (let i = startHour; i <= endHour; i++) {
    const hour = String(i).padStart(2, "0");

    // Adiciona a hora cheia (ex: 09:00)
    timeSlots.push(`${hour}:00`);

    // Adiciona a meia hora (ex: 09:30), exceto para a última hora
    if (i < endHour) {
      timeSlots.push(`${hour}:30`);
    }
  }

  // Gera o HTML de todas as opções de uma vez para melhor performance
  const optionsHTML = timeSlots
    .map((time) => `<option value="${time}">${time}</option>`)
    .join("");

  // Adiciona as opções ao select de uma só vez
  select.insertAdjacentHTML("beforeend", optionsHTML);
}

createTimeOptions();

// Adiciona o "ouvinte" para o evento de mudança de data
selectedDateInput.addEventListener("change", updateAvailableTimes);

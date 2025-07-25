import dayjs from "dayjs";

const select = document.querySelector("#time");
const selectedDateInput = document.querySelector("#date");

// Horário de início e fim do atendimento
const startHour = 9;
const endHour = 20;

/**
 * Atualiza a lista de horários, desabilitando os que já passaram no dia de hoje.
 */
function updateAvailableTimes() {
  const now = dayjs();
  const selectedDate = dayjs(selectedDateInput.value);

  // Verifica se a data selecionada é hoje
  const isToday = selectedDate.isSame(now, "day");

  const options = select.querySelectorAll("option");
  let isCurrentSelectionDisabled = false;

  options.forEach((option) => {
    // Pula a primeira opção "Selecione um horário"
    if (!option.value) {
      return;
    }

    // Se a data selecionada for futura, habilita todas as opções
    if (!isToday) {
      option.disabled = false;
      return;
    }

    // Se a data for hoje, verifica a hora
    const optionTime = dayjs(`${selectedDateInput.value} ${option.value}`);

    // Desabilita horários que já passaram
    if (optionTime.isBefore(now)) {
      option.disabled = true;

      // Verifica se a opção desabilitada era a que estava selecionada
      if (select.value === option.value) {
        isCurrentSelectionDisabled = true;
      }
    } else {
      option.disabled = false;
    }
  });

  // Se o horário que estava selecionado foi desabilitado, limpa a seleção
  if (isCurrentSelectionDisabled) {
    select.value = "";
  }
}

/**
 * Gera as opções de horário
 */
function createTimeOptions() {
  const times = [];
  // Loop para gerar as horas
  for (let i = startHour; i <= endHour; i++) {
    const hour = String(i).padStart(2, "0");

    // Adiciona a hora cheia (ex: 09:00)
    times.push(`${hour}:00`);

    // Adiciona a meia hora (ex: 09:30), exceto para a última hora
    if (i < endHour) {
      times.push(`${hour}:30`);
    }
  }

  // Cria e adiciona os <option> ao <select>
  times.forEach((time) => {
    const option = `<option value="${time}">${time}</option>`;
    select.innerHTML += option;
  });
}

createTimeOptions();
updateAvailableTimes();

// Adiciona o "ouvinte" para o evento de mudança de data
selectedDateInput.addEventListener("change", updateAvailableTimes);

import dayjs from "dayjs";
import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { schedulesShow } from "../schedules/show.js";

const selectedDate = document.getElementById("dateCalendar");

// Define a data de hoje como valor inicial do input de data
selectedDate.value = dayjs(new Date()).format("YYYY-MM-DD");

export async function schedulesDay() {
  // Obtém data input
  const date = selectedDate.value;

  // Buscar os agendamentos
  const dailySchedules = await scheduleFetchByDay({ date });

  // Exibe os agendamentos
  schedulesShow({ dailySchedules });
}

// Adiciona o "ouvinte" para o evento de mudança de data e executa a função
selectedDate.addEventListener("change", () => schedulesDay());

// Carrega os agendamentos do dia atual ao iniciar a página
schedulesDay();

import { apiConfig } from "./api-config.js";
import dayjs from "dayjs";

export async function scheduleFetchByDay({ date }) {
  try {
    // Fazendo a requisição
    const response = await fetch(`${apiConfig.baseUrl}/schedules`);

    // Converte para JSON
    const data = await response.json();

    // Ordenando por data
    const ordenedData = data.sort((a, b) => new Date(a.when) - new Date(b.when));

    // Filtra os agendamentos pelo dia selecionado
    const dailySchedules = ordenedData.filter((schedule) =>
      dayjs(date).isSame(schedule.when, "day")
    );

    return dailySchedules;
  } catch (error) {
    console.log(error);
    alert("Não foi possível carregar os agendamentos do dia selecionado");
  }
}

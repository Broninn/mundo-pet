import { apiConfig } from "./api-config.js";

export async function scheduleLoad() {
  try {
    const response = await fetch(`${apiConfig.baseUrl}/schedules`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao carregar agendamentos:", error);
    alert("Não foi possível carregar os agendamentos existentes.");
  }
}
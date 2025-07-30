import { apiConfig } from "./api-config.js";

export async function scheduleCancel({ id }) {
  try {
    const response = await fetch(`${apiConfig.baseUrl}/schedules/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Não foi possível cancelar o agendamento.");
    }

    alert("Agendamento cancelado com sucesso!");
  } catch (error) {
    console.log(error);
    alert("Não foi possível cancelar o agendamento. Tente novamente mais tarde.");
  }
}

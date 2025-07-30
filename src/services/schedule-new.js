import { apiConfig } from "./api-config.js";
import { schedulesDay } from "../modules/schedules/load.js";

export async function scheduleNew(data) {
  try {
    const response = await fetch(`${apiConfig.baseUrl}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Não foi possível agendar");
    }
    alert("Agendamento realizado com sucesso!");
    schedulesDay();
  } catch (error) {
    console.log(error);
    alert("Não foi possível agendar, tente novamente mais tarde");
  }
}

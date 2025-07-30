import { schedulesDay } from "./load.js";
import { scheduleCancel } from "../../services/schedule-cancel.js";
import { updateAvailableTimes } from "../form/hours.js";

const periods = document.querySelectorAll(".period");

// Gerar evento de click para cada lista
periods.forEach((period) => {
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-schedule")) {
      // Obtém a li pai do elemento
      const item = event.target.closest("li");

      // Pega o id di agendamento para remover
      const { id } = item.dataset;

      // Confirma que o id foi selecionado
      if(id) {
        // Confirma se o usuário deseja cancelar
        const isConfirm = confirm("Deseja realmente cancelar o agendamento?");

        if(isConfirm) {
            // Faz requisição para cancelar
            await scheduleCancel({ id });

            // Recarrega os agendamentos
            await schedulesDay();

            // Atualiza os horários disponíveis no formulário
            await updateAvailableTimes();
        }
      }
    }
  });
});

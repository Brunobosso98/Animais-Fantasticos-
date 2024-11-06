export default class Funcionamento {
  constructor(funcionamento, activeClass) {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass;
  }

  dadosFuncionamento() {
    this.weekDays = this.funcionamento.dataset.semana.split(",").map(Number);
    this.hourWeek = this.funcionamento.dataset.horario.split(",").map(Number);
  }

  dadosAgora() {
    this.dateNow = new Date();
    this.dayNow = this.dateNow.getDay();
    this.timeNow = this.dateNow.getUTCHours() - 3;
  }

  estaAberto() {
    const openWeek = this.weekDays.indexOf(this.dayNow) !== -1;
    const openHour =
      this.timeNow >= this.hourWeek[0] && this.timeNow < this.hourWeek[1];
    return openWeek && openHour;
  }

  ativaAberto() {
    if (this.estaAberto()) {
      this.funcionamento.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.dadosAgora();
      this.ativaAberto();
    }
    return this;
  }
}

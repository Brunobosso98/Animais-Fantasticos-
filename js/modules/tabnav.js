export default class initTabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeCLass = "ativo";
  }

  // Ativa a tab de acordo com o index da mesma
  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeCLass);
    });
    const direcao = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.activeCLass, direcao);
  }

  // Adiciona os eventos nas tabs
  addTavNavEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => this.activeTab(index));
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      // Ativar primeiro item
      this.activeCLass[0];
      this.addTavNavEvent();
    }
  }
}

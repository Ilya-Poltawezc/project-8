class Button {
    selectors = {
        root: '[data-js-typ]',
        buttonNow: '[data-js-typ-button-now]',
        buttonTable: '[data-js-typ-button-table]',
    }

    stateClasses = {
        isActiveButton: 'is-active-button',
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root)
        this.buttonNowElement = this.rootElement.querySelector(this.selectors.buttonNow)
        this.buttonTableElement = this.rootElement.querySelector(this.selectors.buttonTable)
        this.bindEvents()
    }

    onButtonClick = () => {
        this.buttonTableElement.classList.toggle(this.stateClasses.isActiveButton)
        this.buttonNowElement.classList.remove(this.stateClasses.isActiveButton)
    }

    onButtonClickNow = () => {
        this.buttonNowElement.classList.toggle(this.stateClasses.isActiveButton)
        this.buttonTableElement.classList.remove(this.stateClasses.isActiveButton)
    }

    bindEvents() {
        this.buttonTableElement.addEventListener('click', this.onButtonClick)
        this.buttonNowElement.addEventListener('click', this.onButtonClickNow)
    }
}

export default Button
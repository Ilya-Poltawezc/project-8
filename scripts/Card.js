class Card {
    selectors = {
        root: '[data-js-slider]',
        cardOne: '[data-js-slider-card1]',
        cardTwo: '[data-js-slider-card2]',
        buttonOne: '[data-js-slider-button1]',
        buttonTwo: '[data-js-slider-button2]',
    }

    stateClasses = {
        isCurrentCard: 'is-current-card',
        isCurrentButton: 'is-current-button',
        classCard1: 'card-1',
        classCard2: 'card-2',
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root)
        this.cardOneElement = this.rootElement.querySelector(this.selectors.cardOne)
        this.cardTwoElement = this.rootElement.querySelector(this.selectors.cardTwo)

        this.buttonOneElement = this.rootElement.querySelector(this.selectors.buttonOne)
        this.buttonTwoElement = this.rootElement.querySelector(this.selectors.buttonTwo)
        this.bindEvents()
    }

    onButtonClickOne = () => {
        this.buttonOneElement.classList.toggle(this.stateClasses.isCurrentButton)
        this.buttonTwoElement.classList.remove(this.stateClasses.isCurrentButton)
    }

    onButtonClickTwo = () => {
        this.buttonTwoElement.classList.toggle(this.stateClasses.isCurrentButton)
        this.buttonOneElement.classList.remove(this.stateClasses.isCurrentButton)
        this.cardOneElement.classList.remove(this.stateClasses.classCard1)
        this.cardOneElement.classList.toggle(this.stateClasses.classCard2)
        this.cardTwoElement.classList.remove(this.stateClasses.classCard2)
        this.cardTwoElement.classList.toggle(this.stateClasses.classCard1)
    }

    bindEvents() {
        this.buttonTwoElement.addEventListener('click', this.onButtonClickTwo)
        this.buttonOneElement.addEventListener('click', this.onButtonClickOne)
    }
}

export default Card
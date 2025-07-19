class Cell {
    selectors = {
        root: '[data-js-cell]',
        cardOne: '[data-js-cell-card1]',
        cardTwo: '[data-js-cell-card2]',
        cardThree: '[data-js-cell-card3]',
        cardFor: '[data-js-cell-card4]',
    }

    stateClasses = {
        isActiveCard: 'is-active-card',
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root)
        this.cardOneElement = this.rootElement.querySelector(this.selectors.cardOne)
        this.cardTwoElement = this.rootElement.querySelector(this.selectors.cardTwo)
        this.cardThreeElement = this.rootElement.querySelector(this.selectors.cardThree)
        this.cardForElement = this.rootElement.querySelector(this.selectors.cardFor)
        this.bindEvents()
    }

    onButtonClickOne = () => {
        this.cardOneElement.classList.toggle(this.stateClasses.isActiveCard)
        this.cardTwoElement.classList.remove(this.stateClasses.isActiveCard)
        this.cardThreeElement.classList.remove(this.stateClasses.isActiveCard)
        this.cardForElement.classList.remove(this.stateClasses.isActiveCard)
    }

    onButtonClickTwo = () => {
        this.cardTwoElement.classList.toggle(this.stateClasses.isActiveCard)
        this.cardOneElement.classList.remove(this.stateClasses.isActiveCard)
        this.cardForElement.classList.remove(this.stateClasses.isActiveCard)
        this.cardThreeElement.classList.remove(this.stateClasses.isActiveCard)
    }

    onButtonClickThree = () => {
        this.cardTwoElement.classList.remove(this.stateClasses.isActiveCard)
        this.cardOneElement.classList.remove(this.stateClasses.isActiveCard)
        this.cardForElement.classList.remove(this.stateClasses.isActiveCard)
        this.cardThreeElement.classList.toggle(this.stateClasses.isActiveCard)
    }

    onButtonClickFor = () => {
        this.cardTwoElement.classList.remove(this.stateClasses.isActiveCard)
        this.cardOneElement.classList.remove(this.stateClasses.isActiveCard)
        this.cardThreeElement.classList.remove(this.stateClasses.isActiveCard)
        this.cardForElement.classList.toggle(this.stateClasses.isActiveCard)
    }

    bindEvents() {
        this.cardOneElement.addEventListener('click', this.onButtonClickOne)
        this.cardTwoElement.addEventListener('click', this.onButtonClickTwo)
        this.cardThreeElement.addEventListener('click', this.onButtonClickThree)
        this.cardForElement.addEventListener('click', this.onButtonClickFor)
    }
}

export default Cell
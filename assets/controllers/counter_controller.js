import { Controller } from "@hotwired/stimulus";

export default class extends Controller {

    connect() {

        this.count = 0;
        this.counterElement = this.element.getElementsByClassName('counter-count')[0];

        this.element.addEventListener('click', () => {
            this.count++;
            this.counterElement.innerHTML = this.count;
        } )
    }
}
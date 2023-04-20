import { Controller } from "@hotwired/stimulus";

export default class extends Controller {

    connect() {
        this.element.innerHTML = 'You have clicked 0 times ;(';

        this.count = 0;
        this.element.addEventListener('click', () => {
            this.count++;
            this.element.innerHTML = 'You have clicked ' + this.count + ' times';
        } )
    }
}
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
    static targets = [
        'count',
        'clickMeButton',
    ];

    connect() {

        this.count = 0;

        this.clickMeButtonTarget.addEventListener('click', () => {
            this.count++;
            this.countTarget.innerHTML = this.count;
        } )
    }
}
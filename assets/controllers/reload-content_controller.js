import { Controller } from "@hotwired/stimulus";

export default class extends Controller {

    static values = {
        url: String
    }

    static targets = ['reloadContent'];

    connect() {
    }

    async reloadContent(event) {

        const target = this.hasReloadContenttarget ? this.hasReloadContenttarget : this.element; 
        const response = await fetch(this.urlValue);
        target.innerHTML = await response.text();
    
    }
}

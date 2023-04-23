import { Controller } from "@hotwired/stimulus";

export default class extends Controller {

    static values = {
        refreshUrl: String
    }
    connect() {
        //console.log('shopping cart');
    }

    async removeItem(event) {

        event.currentTarget.classList.add('removing');
        
        const response = await fetch(this.refreshUrlValue);

        this.element.innerHTML = await response.text();
    }
}

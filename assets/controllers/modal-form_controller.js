import { Controller } from "@hotwired/stimulus";
import { Modal } from 'bootstrap';

export default class extends Controller {

    static targets = [
        'modal',
    ];

    static values = {
        formUrl: String,
    }


    connect() {
        console.log('modal');
    }

    openModal(event) {
        console.log(this.formUrlValue);
        const modal = new Modal(this.modalTarget);
        modal.show()
        
    }
}   
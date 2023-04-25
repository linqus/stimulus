import { Controller } from "@hotwired/stimulus";
import { Modal } from 'bootstrap';

export default class extends Controller {

    static targets = [
        'modal',
    ]
    connect() {
        console.log('modal');
    }

    openModal(event) {
        console.log('clicked');
        const modal = new Modal(this.modalTarget);
        modal.show()
        
    }
}   
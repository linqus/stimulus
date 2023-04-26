import { Controller } from "@hotwired/stimulus";
import { Modal } from 'bootstrap';
import $ from 'jquery';

export default class extends Controller {

    static targets = [
        'modal',
        'modalBody',
    ];

    static values = {
        formUrl: String,
    }


    connect() {
    }

    openModal(event) {
        const modal = new Modal(this.modalTarget);
        this.modalBodyTarget.innerHTML = 'Loading...';
        $.ajax({
            method: 'GET',
            url: this.formUrlValue+"?modal=1",
        }).done((msg) => {
            this.modalBodyTarget.innerHTML = msg;
        });
        
        modal.show();

        
    }
}   
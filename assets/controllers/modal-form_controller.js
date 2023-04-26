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
            url: this.formUrlValue+"?modal=1",
        }).done((msg) => {
            this.modalBodyTarget.innerHTML = msg;
        });
        
        modal.show();
    }

    async onSubmit(event) {
        event.preventDefault();
        const $form = $(this.modalBodyTarget).find('form');

        var response = await $.ajax({
            method: $form.prop('method'),
            url: this.formUrlValue + "?modal=1",
            data: $form.serialize(),
        });
        this.modalBodyTarget.innerHTML = response;
        console.log(response);
    }
}   
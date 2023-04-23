import { Controller } from "@hotwired/stimulus";
import Swal from 'sweetalert2';

export default class extends Controller {

    static values = {
        title: String,
        msg: String,
        icon: String,
        confirm: String,
        submitAsync: Boolean,
    }

    connect() {
    }

    onSubmit(event) {
        event.preventDefault();

        Swal.fire({
            title: this.titleValue || null,
            text: this.msgValue || null,
            icon: this.iconValue || null,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: this.confirmValue || 'Yes',
            showLoaderOnConfirm: true,
            preConfirm: () => {
                return this.submitForm();
            }
          });
    }

    submitForm() {

        if (!this.submitAsyncValue) {
            this.element.submit();
            return;
        }
        
        return fetch(this.element.action,{
            method: this.element.method,
            body: new URLSearchParams(new FormData(this.element)),
        })
    }

}
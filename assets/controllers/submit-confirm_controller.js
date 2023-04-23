import { Controller } from "@hotwired/stimulus";
import Swal from 'sweetalert2';

export default class extends Controller {

    static values = {
        title: String,
        msg: String,
        icon: String,
        confirm: String,
    }

    connect() {
        console.log(this);
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
          }).then((result) => {
            if (result.isConfirmed) {
                this.element.submit();  
              
            }
          })
    }

}
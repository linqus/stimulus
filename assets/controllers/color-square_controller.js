import { Controller } from "@hotwired/stimulus";

export default class extends Controller {

    static targets = [
        'colorSquare',
        'select',
    ];

    static values = {
        colorId: Number,
    }

    selectedColorId = null;
 
    connect() {
        console.log(this.colorIdValue);

        if (this.colorIdValue) {
            this.setSelectedColor(this.colorIdValue);
        }
        //this.selectTarget.classList.add("d-none");
    }

    selectColor(event) {
        this.setSelectedColor(event.currentTarget.dataset.colorId);
    }

    findSelectedColorSquare() {
        return this.colorSquareTargets.find( (element) => element.dataset.colorId == this.selectedColorId)
    }

    setSelectedColor(clickedColorId) {


        if (clickedColorId === this.selectedColorId) {
            this.findSelectedColorSquare().classList.remove('selected');

            this.selectedColorId = null;
            this.selectTarget.value = '';

        }  else {
            if (this.selectedColorId) {
                this.findSelectedColorSquare().classList.remove('selected');
            }

            this.selectedColorId = clickedColorId;

            this.findSelectedColorSquare().classList.add('selected');
            this.selectTarget.value = clickedColorId;
        }
    }
}
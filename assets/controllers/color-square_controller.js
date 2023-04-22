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
        this.selectedColorId = this.element.dataset.colorId;
        //this.selectTarget.classList.add("d-none");
        this.selectTarget.value = this.selectedColorId;
    }

    selectColor(event) {
        //console.log(this.colorSquareTargets);
        var colorId = event.currentTarget.dataset.colorId;
        //console.log(colorId);

        this.colorSquareTargets.forEach( (square) => {
            //console.log(square.dataset.colorId);
            if (colorId === square.dataset.colorId) {
                if (!square.classList.contains('selected')) {
                    square.classList.add('selected');
                    this.selectedColorId = colorId;
                } else {
                    square.classList.remove('selected');
                    this.selectedColorId = '';
                }
            } else {
                square.classList.remove('selected');
            }
            
        }); 

        this.selectTarget.value = this.selectedColorId;

    }
}
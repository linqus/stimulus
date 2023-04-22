import { Controller } from "@hotwired/stimulus";

export default class extends Controller {

    static targets = [
        'colorSquare',
        'select',
    ];
 
    connect() {
        //console.log(this.element.innerHTML);
        this.selectTarget.classList.add("d-none");
    }

    selectColor(event) {
        //console.log(this.colorSquareTargets);
        var colorId = event.currentTarget.dataset.colorId;
        console.log(colorId);

        this.colorSquareTargets.forEach( (square) => {
            console.log(square.dataset.colorId);
            if (colorId === square.dataset.colorId) {
                if (!square.classList.contains('selected')) {
                    square.classList.add('selected');
                } else {
                    square.classList.remove('selected');
                }
            } else {
                square.classList.remove('selected');
            }
            
        }); 

        if (!event.currentTarget.classList.contains('selected')) {
            colorId = '';
        }

        this.selectTarget.value = colorId;

    }
}
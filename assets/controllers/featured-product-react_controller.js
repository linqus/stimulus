import { Controller } from "@hotwired/stimulus";
import React from "react";
import FeaturedProduct from '../components/FeaturedProduct';

export default class extends Controller {

    static values = {
        product: Object,
    }

    connect() {
        import('react-dom/client').then( (ReactDOM) => {
            console.log(ReactDOM);
            ReactDOM
                .createRoot(this.element)
                .render(<FeaturedProduct product={this.productValue} />);
        })
        
    }

}
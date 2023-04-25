import { Controller } from "@hotwired/stimulus";
import ReactDOM from "react-dom/client";
import React from "react";
import FeaturedProduct from '../components/FeaturedProduct';

export default class extends Controller {

    static values = {
        product: Object,
    }

    connect() {
        console.log('featured-product-react');
        ReactDOM
            .createRoot(this.element)
            .render(<FeaturedProduct product={this.productValue} />);
    }

}
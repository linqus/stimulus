import { Controller } from "@hotwired/stimulus";

export default class extends Controller {

    connect() {
        console.log('admin-chart is here');
    }

    onChartConnect(event) {
        console.log('Iv catch chartjs:connect');
    }
}
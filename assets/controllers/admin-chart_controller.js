import { Controller } from "@hotwired/stimulus";

export default class extends Controller {

    connect() {
        console.log('admin-chart is here');
    }

    onChartConnect(event) {
        this.chart = event.detail.chart;
        //console.log('Iv catch chartjs:connect');
        setTimeout( () => {this.setNewData()},5000 )

        this.setNewData
    }

    setNewData() {
        this.chart.data.datasets[0].data[2] = 3000;
        this.chart.update();
    }
}
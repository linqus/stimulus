import { Controller } from '@hotwired/stimulus';

export default class extends Controller {

    static targets = [
        'searchBox',
        'result',
    ]

    static values = {
        url: String,
    }

    connect() {
        console.log(this.searchBoxTarget);
        this.searchBoxTarget.on
    }

    async onSearchInput(event) {
        var queryString = event.currentTarget.value;

        const params = new URLSearchParams({
            q: queryString,
            preview: true
        }); 
        console.log(this.urlValue + '?' + params);
        const response = await fetch(this.urlValue + '?' + params);

        this.resultTarget.innerHTML = await response.text();
    }


}  
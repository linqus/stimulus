import { Controller } from '@hotwired/stimulus';
import { useClickOutside, useDebounce } from 'stimulus-use';

export default class extends Controller {

    static targets = [
        'searchBox',
        'result',
    ]

    static debounces = [
        'showSearchPreview',
    ]

    static values = {
        url: String,
    }

    connect() {
        useClickOutside(this, {
            element: this.resultTarget,
        });
        useDebounce(this)

    }

    onSearchInput(event) {
        this.showSearchPreview({params: event.currentTarget.value});
    }
    
    clickOutside(event) {
        console.log('clicked outside - you can hide it now');
        this.resultTarget.innerHTML = '';
    }



    async showSearchPreview(query) {
        console.log(query);
        const params = new URLSearchParams({
            q: query.params,
            preview: true
        }); 

        const response = await fetch(this.urlValue + '?' + params);

        this.resultTarget.innerHTML = await response.text();
    }


}  
import { Controller } from '@hotwired/stimulus';
import { useClickOutside, useDebounce, useTransition } from 'stimulus-use';

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
        useDebounce(this);
        useTransition(this,{
            element: this.resultTarget,
            enterActive: 'fade-enter-active',
            enterFrom: 'fade-enter-from',
            enterTo: 'fade-enter-to',
            leaveActive: 'fade-leave-active',
            leaveFrom: 'fade-leave-from',
            leaveTo: 'fade-leave-to',
            hiddenClass: 'd-none',
        })

    }

    onSearchInput(event) {
        this.showSearchPreview({params: event.currentTarget.value});
    }
    
    clickOutside(event) {
        //this.resultTarget.innerHTML = '';
        this.leave();
    }



    async showSearchPreview(query) {
        console.log(query);
        const params = new URLSearchParams({
            q: query.params,
            preview: true
        }); 

        const response = await fetch(this.urlValue + '?' + params);

        this.resultTarget.innerHTML = await response.text();
        this.enter();
    }


}  
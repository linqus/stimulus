import { Controller } from '@hotwired/stimulus'
import React from 'react';
import MadeWithLove from '../components/MadeWithLove';

export default class extends Controller {

    connect() {
        import('react-dom/client').then( (ReactDOM) => {
            ReactDOM.createRoot(this.element).render(<MadeWithLove />);
        });

    }
}
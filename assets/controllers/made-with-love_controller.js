import { Controller } from '@hotwired/stimulus'
import React from 'react';
import MadeWithLove from '../components/MadeWithLove';

export default class extends Controller {

    connect() {
        import('react-dom/client').then( (ReactDOM) => {
            console.log('controller for react');
            ReactDOM.createRoot(this.element).render(<MadeWithLove />);
        });

    }
}
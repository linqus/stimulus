import { Controller } from '@hotwired/stimulus'
import ReactDOM from 'react-dom/client';
import React from 'react';
import MadeWithLove from '../components/MadeWithLove';

export default class extends Controller {

    connect() {
        console.log('controller for react');
        ReactDOM.createRoot(this.element).render(<MadeWithLove />);
    }
}
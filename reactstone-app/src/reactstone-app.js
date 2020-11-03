import * as React from 'react';
import * as ReactDOM from 'react-dom';
import retargetEvents from 'react-shadow-dom-retarget-events';

import App from './components/app/app';
import style from './styles/styles.scss';

export default class ReacstoneAppElement extends HTMLElement {
    static get observedAttributes() {
        return [ 'cards', 'classes','qualities', 'races','sets' ];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this[name] = JSON.parse(newValue);
    }

    connectedCallback() {
        this.mountPoint = document.createElement('div');
        // Creates ShadowDOM
        const shadowRoot = this.attachShadow({ mode: 'open' });

        const styleTag = document.createElement('style');
        styleTag.innerHTML = style;
        shadowRoot.appendChild(styleTag);
        
        shadowRoot.appendChild(this.mountPoint);

        ReactDOM.render(
            React.createElement(
                App,
                {
                    cards: this.cards || [],
                    classes: this.classes || [],
                    qualities: this.qualities || [],
                    races: this.races || [],
                    sets: this.sets || [],
                },
                React.createElement('slot')
            ),
            this.mountPoint
        );
        retargetEvents(shadowRoot);
    }
}

window.customElements.define('reactstone-app', ReacstoneAppElement);
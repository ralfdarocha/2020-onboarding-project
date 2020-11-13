import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from '@components/app/app';
import style from '@styles/styles.scss';

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
        
        // Making the shadow appear like document 
        // so react events work as normal
        Object.defineProperty(root, "ownerDocument", { value: shadowRoot });
        shadowRoot.createElement = (...args) => document.createElement(...args);

        ReactDOM.render(
            React.createElement(
                App,
                {
                    classes: this.classes || [],
                    qualities: this.qualities || [],
                    races: this.races || [],
                    sets: this.sets || [],
                },
                React.createElement('slot')
            ),
            this.mountPoint
        );
    }
}

window.customElements.define('reactstone-app', ReacstoneAppElement);
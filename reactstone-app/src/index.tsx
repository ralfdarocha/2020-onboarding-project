import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/app/app";
import json from './mock/metadata.json'
import cardsMock from './mock/cards.json'

let cards:ICard[] = cardsMock;
let cost:number = null;
const dispatchDevCards = (filterCards:ICard[], manaCost:number = null,):void => {
    if (manaCost != null){
        cost = manaCost;
    } else {
        cards = filterCards;
        if (cost)
            filterCards = filterCards.filter((item:ICard) => cost == 10 ? item.cost >= 10 : cost == item.cost)
    }
    setTimeout(() => {
        window.dispatchEvent(
            new CustomEvent("onLoadCards", {
                detail: { cards: filterCards },
            })
        );
    }, 300);
}

ReactDOM.render(
    <App 
        classes={json.classes.map((item:string):IItem => ({name: item}))}
        qualities={json.qualities.map((item:string):IItem => ({name: item}))}
        sets={json.sets.map((item:string):IItem => ({name: item}))}
        races={json.races.map((item:string):IItem => ({name: item}))}
    />, 
    document.getElementById("root"),
    // Callback only for dev and test purposes
    ():void => {
        setTimeout(() => {
            // Load the first cards
            // dispatchDevCards(cards);
            // Simulate the custom events of the backbone app
            window.addEventListener("onClassChange", (event:any):void => dispatchDevCards(cardsMock.filter((item:ICard) => event.detail.slug == item.playerClass)));
            window.addEventListener("onRaceChange", (event:any):void => dispatchDevCards(cardsMock.filter((item:ICard) => event.detail.slug == item.race)));
            window.addEventListener("onQualityChange", (event:any):void => dispatchDevCards(cardsMock.filter((item:ICard) => event.detail.slug == item.rarity)));
            window.addEventListener("onSetChange", (event:any):void => dispatchDevCards(cardsMock.filter((item:ICard) => event.detail.slug == item.cardSet)));
            window.addEventListener("onManaCostChange", (event:any):void => {
                if (event.detail.cost === null) {
                    cost = null;
                    dispatchDevCards(cards);
                } else {
                    dispatchDevCards(cards.filter((item:ICard) => event.detail.cost == 10 ? item.cost >= 10 : event.detail.cost == item.cost), event.detail.cost)
                }
            });
            window.addEventListener("onResetFilters", () :void => { 
                cost = null; 
                dispatchDevCards(cardsMock, null)
            });
        },1);
    }
);
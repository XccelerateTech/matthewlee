import * as React from "react";
import { createStore, Action } from "redux";
import { Provider } from "react-redux";
import LinkList from "./linklist";
import { render } from "react-dom";
import IRootState from "./IRootState";

// =======================Actions

// Define ADD_LINK const and its type
const ADD_LINK = 'ADD_LINK';
type ADD_LINK = typeof ADD_LINK;

// Define how AddLinkAction should look like
interface IAddLinkAction extends Action {
    type: ADD_LINK;
    link: {
        title: string,
        url: string
    };
}

// Define CLEAR_LINK const and its type
const CLEAR_LINK = 'CLEAR_LINK';
type CLEAR_LINK = typeof CLEAR_LINK;

// Define ClearLinkAction. No additional information is needed
interface IClearLinkAction extends Action {
    type: CLEAR_LINK;
}

const REMOVE_THIS = 'REMOVE_THIS';
type REMOVE_THIS = typeof REMOVE_THIS;

interface IRemoveThisAction extends Action {
    type: REMOVE_THIS;
    index: string
}

// Collection of both for easier integration
type LinkActions = IAddLinkAction | IClearLinkAction | IRemoveThisAction;

const rootReducer = (state: IRootState, action: LinkActions /* add parameter here */) => {
    // Use switch to handle different actions
    switch (action.type) {
        case ADD_LINK:
            return {
                links: state.links.concat([action.link]) // Use concat to add a new link
            }
        case CLEAR_LINK:
            return {
                links: [] // Reset the link
            }
        case REMOVE_THIS: 
            const temp = [...state.links]
            temp.splice(Number(action.index), 1)
            return {
                links: temp
            }
        default:
            return {
                links: [] // Reset the link
            }; // Do not change the state in case of any other actions
    };
};

// ignore the types
const store = createStore<any, any, any, any>(rootReducer);

const App = () => (
    <Provider store={store}>
        <div>
            <h2>Links</h2>
            <LinkList />
        </div>
    </Provider>
);

render(<App />, document.getElementById("root"));

export default App;
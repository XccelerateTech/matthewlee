import * as React from "react";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { Provider } from "react-redux";
import LinkList from "./linklist";
import UserList from "./userlist"
import { render } from "react-dom";
import IRootState from "./IRootState";

const rootReducer = (state: IRootState) => {
    return {
        links: [
            { title: "Google", url: "http://www.google.com" },
            { title: "Yahoo", url: "http://www.yahoo.com" },
        ],
        users: [
            { name: "matt", email: "matt@matt.com" },
            { name: "tom", email: "tom@tom.com" },
        ]
    };
};
// ignore the types
const store = createStore<any,any,any,any>(rootReducer,
    applyMiddleware(logger));

const App = () => (
    <Provider store={store}>
        <div>
            <h2>Links</h2>
            <LinkList />
            <h2>Users</h2>
            <UserList />
        </div>
    </Provider>
);

render(<App />, document.getElementById("root"));

export default App;
import * as React from "react";
import { Dispatch, Action } from "redux";
import { connect } from "react-redux";
import IRootState from "./IRootState"

// Define ADD_LINK const and its type
const ADD_LINK = 'ADD_LINK';
type ADD_LINK = typeof ADD_LINK;

// Define how AddLinkAction should look like
interface IAddLinkAction extends Action {
    type: ADD_LINK;
    link: {
        title: string,
        url: string
    },
    index: number
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

interface ILinkListProps {
    links: {
        title: string,
        url: string
    }[],
    addLink: () => void, // Add a new mapped prop
    clearLink: () => void, // Add a new mapped prop
    removeThis: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const PureLinkList = (props: ILinkListProps) => {
    const index:number = Math.ceil(Math.random()*1000)
    return (
        <div>
            <button onClick={props.addLink}>New Link</button>
            <button onClick={props.clearLink}>Clear</button>
            {props.links.map((l,i) => (
                <div>
                    <a href={l.url}>{l.title}</a>
                    <button id={String(index*i)} onClick={props.removeThis}>Remove this shit with random:{String(index*i)}</button>
                </div>
            ))}
        </div>
    );
}

const mapStateToProps = (state: IRootState) => {
    return {
        links: state.links
    }
}

const mapDispatchToProps = (dispatch: Dispatch<LinkActions>) => {
    return {
        addLink: () => dispatch({
            type: ADD_LINK,
            link: {
                title: 'Google',
                url: 'https://www.google.com'
            },
            index: String(Math.ceil(Math.random()*1000))
        }),
        clearLink: () => dispatch({
            type: CLEAR_LINK
        }),
        removeThis: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => dispatch({
            type: REMOVE_THIS,
            index: e.currentTarget.id
        })
    }
}

const LinkList = connect(mapStateToProps, mapDispatchToProps)(PureLinkList)

export default LinkList;
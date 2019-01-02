import * as React from "react";
import { connect } from "react-redux";
import IRootState from "./IRootState"

interface IUserListProps {
    users: {
        name: string,
        email: string
    }[]
}



const PureUserList = (props: IUserListProps) => {
    return (
        <div>
            {props.users.map(l => (
                <div>{l.name} - {l.email}</div>
            ))}
        </div>
    );
}

const mapStateToProps = (state: IRootState) => {
    return {
        users: state.users
    }
}

const UserList = connect(mapStateToProps)(PureUserList)

export default UserList;
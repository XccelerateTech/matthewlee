import * as React from 'react';


interface IAppDetails {
    name: string;
    url: string;
    id: string
}

interface IUrlProps {
    details: IAppDetails[];
}

export default class Urls extends React.Component<IUrlProps, {}>{
    constructor(props: IUrlProps) {
        super(props)

        this.state = {
            details: []
        }
    }

    public render() {
        const details = this.props.details;
        const pArr = details.map((u) => {
            return (
                <div key={u.id}>
                    <p key={u.id}>{u.name}</p>
                    <a href={u.url}>
                        <p key={u.id}>{u.url}</p>
                    </a>
                </div>
            )
        })
        return (
            <div>
                <div className="col-sm">
                    <p>Urls</p>
                    <div className="details">
                        {pArr}
                    </div>
                </div>
            </div>
        )
    }
}
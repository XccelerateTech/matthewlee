import * as React from 'react';

interface IInfoProps {
    onAddUrl: (
        name: string,
        url: string,
        id: string
    ) => void
}

interface IInfoStates {
    name: string;
    url: string;
    id: string
}

export default class Info extends React.Component<IInfoProps, IInfoStates>{
    constructor(props: IInfoProps) {
        super(props)

        this.state = {
            name: "",
            url: "",
            id: ""
        }
    }

    public render() {
        return (
            <div className="col-sm">
                <p>I am struggling</p>
                <input type="text" placeholder="page name" value={this.state.name} onChange={this.onInfoName} />
                <input type="text" placeholder="url" value={this.state.url} onChange={this.onInfoUrl} />
                <button onClick={this.addUrl}>Submit</button>
            </div>
        )
    }

    private addUrl = async () => {
        await this.props.onAddUrl(this.state.name, this.state.url, this.state.id)
        this.setState({
            name: "",
            url: "",
            id: String(localStorage.length+1)
        })
    }

    private onInfoName = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            name: e.currentTarget.value
        })
    }

    private onInfoUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            url: e.currentTarget.value
        })
    }
}
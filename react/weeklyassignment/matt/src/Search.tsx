import * as React from 'react';

interface ISearchProps {
    onSearch: (
        search: string
    ) => void
}

interface ISearchStates{
    search: string;
}

export default class Search extends React.Component <ISearchProps, ISearchStates>{
    constructor(props: ISearchProps){
        super (props)

        this.state = {
            search: ""
        }
    }

    public render(){
        return (
            <div className="col-sm">
            <p>do a search</p>
            <input type="text" placeholder="search plz" value={this.state.search} onChange={this.onSearch} />
            </div>
        )
    }

    private onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.props.onSearch(this.state.search)
        this.setState({
            search: e.currentTarget.value
        })
    }
    
}
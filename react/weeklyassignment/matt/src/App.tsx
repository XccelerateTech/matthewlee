import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';

import './App.css';

import Info from "./Info";
import Search from "./Search";
import Urls from "./Urls";

interface IAppDetails {
  name: string;
  url: string
  id: string
}

interface IAppStates {
  details: IAppDetails[];
}

class App extends React.Component<{}, IAppStates>{
  constructor(props: {}) {
    super(props)
    this.state = {
      details: []
    }
  }
  public render() {
    return (
      <div className="row">
        <Info onAddUrl={this.onInfoAddUrl} />
        <Urls details={this.state.details} />
        <Search onSearch={this.onSearchInput} />
      </div>
    );
  }

  // ========================================

  private onInfoAddUrl = (name: string, url: string, id: string) => {

    const good = id;
    const good2 = name;
    const good3 = url;

    // put new details into localStorage
    localStorage.setItem(
      String(good),
      JSON.stringify({ id: good, name: good2, url: good3 })
    )
    
    // retrieve all localStorage
    const localList = [];
    for (let i = 0; i < localStorage.length; i++) {
      const onekey = localStorage.key(i);
      if (onekey !== null){
        const ans = localStorage.getItem(onekey)
        if (ans !== null) {
          localList.push(ans)
        }
      }
    }

    const parsed = localList.map(u => JSON.parse(u))

    this.setState({
      details: [...parsed]
    })
  }

  // ========================================

  private onSearchInput = (search: string) => {

    const localList = [];
    for (let i = 0; i < localStorage.length; i++) {
      const onekey = localStorage.key(i);
      if (onekey !== null){
        const ans = localStorage.getItem(onekey)
        if (ans !== null) {
          localList.push(ans)
        }
      }
    }

    const arr = localList
      .map(u => JSON.parse(u))
      .filter((u) => {
        return u.name.toLowerCase().includes(search.toLowerCase()) || u.url.toLowerCase().includes(search.toLowerCase())
      })

    this.setState({
      details: [...arr]
    })
  }

  // ========================================

}

export default App;

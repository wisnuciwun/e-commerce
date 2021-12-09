import React, { Component, Suspense } from 'react';
import './App.css';
import Home from './pages/Home';
import DefaultHeader from './container/DefaultHeader';
import Loading from './components/Loading';
import { MDBBtn } from 'mdb-react-ui-kit';

interface State {
  page: number
}

class App extends Component<any, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      page: 1
    }
  }

  onScrollPage = (e: any) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget
    let scrollStatus = Math.round(scrollHeight - scrollTop)
    let screenHeight = clientHeight

    if (scrollStatus <= screenHeight) {
      setTimeout(() => {
        this.setState({
          page: this.state.page + 1
        })
      }, 1000);
    }
  }

  onBackHome = () => {
    window.document.getElementById("infinite")!.scrollTo({ top: 0, behavior: 'smooth' })
  }

  render() {
    return (
      <div id="infinite" onScroll={this.onScrollPage} className="App">
        <DefaultHeader />
        <Home page={this.state.page} />
      </div>
    )
  }

}

export default App
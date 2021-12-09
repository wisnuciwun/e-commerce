import React, { Component, Suspense } from 'react';
import './App.css';
import Home from './pages/Home';
import DefaultHeader from './container/DefaultHeader';
import Loading from './components/Loading';
import { MDBBtn } from 'mdb-react-ui-kit';
import { connect } from 'react-redux';
import { page } from './config/action/rootAction';

interface State {
  page: number
}

class App extends Component<any, State> {

  onScrollPage = (e: any) => {
    let { dispatch } = this.props
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget
    let scrollStatus = Math.round(scrollHeight - scrollTop)
    
    if (scrollStatus-1<=window.innerHeight && this.props.searchKeyword === '' && this.props.searchCategory === '') {
      setTimeout(() => {
        dispatch(page(this.props.page+1))
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
        <Home />
      </div>
    )
  }

}
const mapStateToProps = (state: any) => {
  return state
}

export default connect(mapStateToProps)(App)
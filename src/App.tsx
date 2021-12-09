import { Component } from 'react';
import './App.css';
import Home from './pages/Home';
import DefaultHeader from './container/DefaultHeader';
import { connect } from 'react-redux';
import { page } from './config/action/rootAction';

interface State {
  hiddenBtn: boolean
  scrollHalf: number
}

class App extends Component<any, State> {
  constructor(props: any) {
    super(props)
  
    this.state = {
      hiddenBtn: true,
       scrollHalf: 1500
    }
  }
  

  onScrollPage = (e: any) => {
    let { dispatch } = this.props
    const { scrollTop, scrollHeight } = e.currentTarget
    let scrollStatus = Math.round(scrollHeight - scrollTop)

    if(scrollStatus < this.state.scrollHalf){
      if(this.state.hiddenBtn == true){
        this.setState({
          hiddenBtn: false
        })
      }
    }

    if(scrollStatus > this.state.scrollHalf){
      if(this.state.hiddenBtn == false){
        this.setState({
          hiddenBtn: true
        })
      }
    }

    if (scrollStatus - 1 <= window.innerHeight && this.props.searchKeyword === '' && this.props.searchCategory === '') {
      setTimeout(() => {
        dispatch(page(this.props.page + 1))
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
        <button hidden={this.state.hiddenBtn} onClick={this.onBackHome} type="button" className="floating-button"><i className="bi bi-arrow-up"></i></button>
      </div>
    )
  }

}
const mapStateToProps = (state: any) => {
  return state
}

export default connect(mapStateToProps)(App)
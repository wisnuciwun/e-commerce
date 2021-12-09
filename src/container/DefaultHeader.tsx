import { MDBNavbar, MDBNavbarBrand } from 'mdb-react-ui-kit'
import { PureComponent } from 'react'
import { connect } from 'react-redux'
import { onChangeKeyword } from '../config/action/rootAction'

interface State {
    searchKeyword: string
}

class DefaultHeader extends PureComponent<any, State> {
    constructor(props: any) {
        super(props)
    
        this.state = {
             searchKeyword: ''
        }
    }

    onPressEnter = (e: any) => {
        if(e.key === "Enter"){
            this.onClickSearch()
        }
    }
    
    onChangeKeyword = (e: any) => {
        this.setState({
            searchKeyword: e.target.value
        })
    }

    onClickSearch = () => {
        let { dispatch } = this.props
        dispatch(onChangeKeyword(this.state.searchKeyword.toLowerCase()))
    }

    onReloadPage = () => {
        window.location.reload()
    }

    render() {
        return (
            <div className="header">
                <MDBNavbar className="p-3">
                    <div className="d-flex w-100 justify-content-between">
                        <MDBNavbarBrand className="default-color pointer"><a style={{textDecoration: 'none'}} onClick={this.onReloadPage}>E-commerce</a></MDBNavbarBrand>
                        <div className="d-flex justify-content-center w-50">
                            <input onKeyPress={this.onPressEnter} onChange={this.onChangeKeyword} value={this.state.searchKeyword} style={{ marginRight: '10px' }} className="form-control mr-3" type="text" placeholder="Search" aria-label="Search" />
                            <button onClick={this.onClickSearch} type="button" className="btn btn-primary"><i className="bi bi-search"></i></button>
                        </div>
                    </div>
                </MDBNavbar>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return state
}

export default connect(mapStateToProps)(DefaultHeader)

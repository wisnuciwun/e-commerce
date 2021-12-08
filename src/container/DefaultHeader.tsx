import { MDBBtn, MDBNavbar, MDBNavbarBrand } from 'mdb-react-ui-kit'
import React, { PureComponent } from 'react'

class DefaultHeader extends PureComponent {
    render() {
        return (
            <div className="header">
                <MDBNavbar className="p-3">
                    <div className="d-flex w-100">
                        <MDBNavbarBrand className="default-color"><b>E-commerce</b></MDBNavbarBrand>
                        <input style={{marginRight: '10px'}} className="form-control mr-3" type="text" placeholder="Search" aria-label="Search" />
                        <MDBBtn><h5><i className="bi bi-search"></i></h5></MDBBtn>
                    </div>
                </MDBNavbar>
            </div>
        )
    }
}

export default DefaultHeader

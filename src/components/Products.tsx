import { MDBBadge } from 'mdb-react-ui-kit'
import { memo } from 'react'
import NumberFormat from 'react-number-format'
import { ProductElement } from '../constants/Constants'
import StringCutter from '../helper/StringCutter'

interface Product {
    data: [
        ProductElement
    ],
    searchKeyword: string,
    searchCategory: string
    onClickBack: (value: string) => void
}

function Products(props: Product) {
    return (
        <div>
            <div style={{ flexWrap: 'wrap', width: '100%' }} className="d-flex justify-content-center">
                {
                    props.data.map((value, id) => {

                        let productName = StringCutter({ maxlength: 26, text: value.product_name })
                        let storeName = StringCutter({ maxlength: 8, text: value.supplier_name })

                        return (
                            <div key={id} className="border border-top mb-3 border-stock fade-in">
                                <img className="stocks" src={value.image_uri} />
                                <div className="text-start description">
                                    <h4 style={{ minHeight: '100px', maxHeight: '150px', overflowY: 'hidden' }}>{productName}</h4>
                                    <div>
                                        {<NumberFormat style={{ width: '130px', border: 'none', borderWidth: '0px', fontWeight: 'bold' }} prefix="Rp. " value={value.normal_price} thousandSeparator />}
                                        <span><MDBBadge color="success">{value.discount_percentage == 0 ? '' : `Diskon ${value.discount_percentage} %`}</MDBBadge></span><br />
                                        <span><i className="bi bi-shop"></i>&nbsp;{storeName}</span><br />
                                        <span><i className="bi bi-geo"></i>&nbsp;{value.location}</span><br />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <h3 className="mb-5 pointer" hidden={props.searchKeyword != "" || props.searchCategory != "" ? false : true} onClick={() => props.onClickBack("")}><MDBBadge color="success" ><i className="bi bi-house-door-fill"></i> Kembali ke pencarian awal</MDBBadge></h3>
        </div>

    )
}

export default memo(Products)

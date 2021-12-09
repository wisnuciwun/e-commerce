import React from 'react'
import NumberFormat from 'react-number-format'

interface Product {
    data: [
        ProductElement
    ],
}

interface ProductElement {
    image_uri: string,
    discount_percentage: number,
    supplier_name: string,
    location: string,
    product_name: string,
    normal_price: number
}

function Products(props: Product) {
    return (
        <div style={{ flexWrap: 'wrap', width: '100%' }} className="d-flex justify-content-center">
            {
                props.data.map((value, id) => {
                    return (
                        <div key={id} className="border border-top mb-3 border-stock fade-in">
                            <img className="stocks" src={value.image_uri} />
                            <div className="text-start description">
                                <h4>{value.product_name}</h4>
                                {<NumberFormat style={{width: '130px', border: 'none', borderWidth: '0px'}} prefix="Rp. " value={value.normal_price} thousandSeparator />}
                                <span>{value.discount_percentage == 0 ? '' : `${value.discount_percentage} %`}</span><br />
                                <span><i className="bi bi-shop"></i>&nbsp;{value.supplier_name}</span><br />
                                <span><i className="bi bi-geo"></i>&nbsp;{value.location}</span><br />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Products

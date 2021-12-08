import React from 'react'

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
        <div style={{ flexWrap: 'wrap', width: '100%' }} className="d-flex mt-2 fade-in">
            {
                props.data.map((value, id) => {
                    return (
                        <div key={id} className="border border-top mb-3 border-stock">
                            <img className="stocks" src={value.image_uri} />
                            <div className="text-start coba" style={{ padding: '3px' }}>
                                <h2>{value.product_name}</h2>
                                <span><b>{value.normal_price}</b></span><br />
                                <span>{value.discount_percentage}</span><br />
                                <span>{value.supplier_name}</span><br />
                                <span>{value.location}</span><br />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Products

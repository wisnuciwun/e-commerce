import React, { Component } from 'react'
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView } from 'mdbreact'
import Axios from '../config/axios'
import Categories from '../components/Categories'

interface State {
    categories: [CategoryElement],
    products: [ProductElement]
}

interface CategoryElement {
    icon: string,
    category_name: string
}

interface ProductElement {
    image_uri: string,
    discount_percentage: number,
    supplier_name: string,
    location: string,
    product_name: string,
    normal_price: number
}

class Home extends Component<any, State> {// ganti props bikin interface kal mau nganu prop
    constructor(props: any) {
        super(props)

        this.state = {
            categories: [{ category_name: '', icon: '' }],
            products: [{ image_uri: '', discount_percentage: 0, supplier_name: '', location: '', product_name: '', normal_price: 0 }]
        }
    }

    getDataCategory = async () => {
        try {
            await Axios.get(`${process.env.REACT_APP_API_URL}api-web/v2/utility/home/box-category?with_staple=true`)
                .then(res => {
                    this.setState({
                        categories: res.data.data
                    })
                })
        } catch (error) {
            console.error(error)
        }
    }

    getDataBanner = async () => {
        try {
            await Axios.get(`${process.env.REACT_APP_API_URL}api-web/v2/utility/home/banner-web`)
                .then(res => {
                    this.setState({
                        products: res.data.data
                    })
                })
        } catch (error) {
            console.error(error)
        }
    }

    getDataProducts = async () => {
        try {
            await Axios.get(`${process.env.REACT_APP_API_URL}api-web/v2/product-recommendation?page=${this.props.page}}`)
                .then(res => {
                    this.setState({
                        products: res.data.data
                    })
                })
        } catch (error) {
            console.error(error)
        }
    }

    componentDidMount = () => {
        this.getDataCategory()
        this.getDataProducts()
    }

    UNSAFE_componentWillReceiveProps = () => {
        this.getDataProducts();
    }

    render() {
        const Products = React.lazy(() => import('../components/Products'));
        return (
            <div>
                <Categories data={this.state.categories} />
                <Products data={this.state.products} />
                {/* <h1>home</h1>
                <h1>home</h1>
                <h1>home</h1>
                <h1>home</h1>
                <h1>home</h1>
                <h1>home</h1>
                <h1>home</h1>

                <h1>home</h1>
                <h1>home</h1>
                <h1>home</h1>
                <h1>home</h1>
                <h1>home</h1>
                <h1>home</h1>
                <h1>home</h1>
                <h1>home</h1>

                <h1>home</h1>
                <h1>home</h1>
                <h1>home</h1>
                <h1>home</h1>
                <h1>home</h1>
                <h1>home</h1>
                <h1>home</h1>
                <h1>home</h1>

                <h1>home</h1>
                <h1>home</h1>
                <h1>home</h1>
                <h1>home</h1>
                <h1>home</h1>
                <h1>home</h1>
                <h1>home</h1>
                <h1>home</h1>

                <h1>home</h1> */}

            </div>
        )
    }
}

export default Home

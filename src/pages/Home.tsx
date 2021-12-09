import React, { Component } from 'react'
import Axios from '../config/axios'
import Categories from '../components/Categories'
import Banners from '../components/Banners'
import Products from '../components/Products'

interface State {
    categories: [CategoryElement],
    products: any,
    banners: [BannerElement]
}

interface CategoryElement {
    icon: string,
    category_name: string
}

interface BannerElement {
    url_mobile: string
}

class Home extends Component<any, State> {
    constructor(props: any) {
        super(props)

        this.state = {
            categories: [{ category_name: '', icon: '' }],
            products: [],
            banners: [{ url_mobile: '' }]
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
                        banners: res.data.data
                    })
                })
        } catch (error) {
            console.error(error)
        }
    }

    getDataProducts = async () => {
        console.log("home", this.props)
        try {
            await Axios.get(`${process.env.REACT_APP_API_URL}api-web/v2/product-recommendation?page=${this.props.page}}`)
                .then(res => {
                    this.setState({
                        products: [...this.state.products, ...res.data.data]
                    })
                })
        } catch (error) {
            console.error(error)
        }
    }

    componentDidMount = () => {
        this.getDataCategory()
        this.getDataProducts()
        this.getDataBanner()
    }

    UNSAFE_componentWillReceiveProps = () => {
        this.getDataProducts();
    }

    render() {
        let { categories, products, banners } = this.state
        return (
            <div style={{ marginTop: '90px' }}>
                <Banners data={banners} />
                <Categories data={categories} />
                <Products data={products} />
            </div>
        )
    }
}

export default Home

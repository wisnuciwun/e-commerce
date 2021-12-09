import { PureComponent } from 'react'
import Axios from '../config/axios'
import Categories from '../components/Categories'
import Banners from '../components/Banners'
import Products from '../components/Products'
import { connect } from 'react-redux'
import { onChangeCategory } from '../config/action/rootAction'
import { CategoryElement } from '../constants/Constants'

interface State {
    categories: [CategoryElement],
    products: any,
    banners: [BannerElement],
    filtered: any,
    searchByCategory: string
}

interface BannerElement {
    url_mobile: string
}

class Home extends PureComponent<any, State> {
    constructor(props: any) {
        super(props)

        this.state = {
            categories: [{ category_name: '', icon: '' }],
            banners: [{ url_mobile: '' }],
            products: [],
            filtered: [],
            searchByCategory: ''
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
        try {
            await Axios.get(`${process.env.REACT_APP_API_URL}api-web/v2/product-recommendation?page=${this.props.page}`)
                .then(res => {
                    this.setState({
                        products: [...this.state.products, ...res.data.data],
                        filtered: [...this.state.products, ...res.data.data]
                    })
                })
        } catch (error) {
            console.error(error)
        }
    }

    onClickCategory = (value: string) => {
        this.setState({
            searchByCategory: value
        }, () => this.onFilteredSearch("category"))
    }

    onFilteredSearch = (option: string) => {
        let { dispatch } = this.props
        let products = [...this.state.products]

        switch (option) {
            case "category":
                products = products.filter(val => val.mainmenu_name.includes(this.state.searchByCategory))
                this.setState({ filtered: products }, () => dispatch(onChangeCategory(this.state.searchByCategory)))
                break;
            case "keyword":
                products = products.filter(val => val.product_name.toLowerCase().includes(this.props.searchKeyword))
                this.setState({ filtered: products })
                break;

            default:
                break;
        }
    }

    componentDidMount = () => {
        this.getDataCategory()
        this.getDataProducts()
        this.getDataBanner()
    }

    componentDidUpdate = (prevState: any) => {
        let { page, searchKeyword } = this.props

        if (prevState.page != page) {
            this.getDataProducts();
        }

        if (prevState.searchKeyword != searchKeyword) {
            this.onFilteredSearch("keyword")
        }
    }

    render() {
        console.log("hm", this.props)
        let { categories, filtered, banners, searchByCategory } = this.state
        return (
            <div style={{ marginTop: '90px' }}>
                <Banners data={banners} />
                <Categories choosen={searchByCategory} data={categories} onClick={this.onClickCategory} />
                <Products searchCategory={this.props.searchCategory} searchKeyword={this.props.searchKeyword} data={filtered} onClickBack={this.onClickCategory} />
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return state
}

export default connect(mapStateToProps)(Home)
import React, { Component } from 'react'
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView } from 'mdbreact'
import Axios from '../config/axios'
import Category from '../components/Category'

interface State {
    data: [element],
    page: number
    products: []
}

interface Image {
    image: String
}

interface element{
    icon: string,
    category_name: string
}

class Home extends Component<any, State> {// ganti props bikin interface kal mau nganu prop
    constructor(props: any) {
        super(props)

        this.state = {
            data: [{category_name: '', icon: ''}],
            page: 1,
            products: []
        }
    }

    getDataCategory = async () => {
        try {
            await Axios.get(`${process.env.REACT_APP_API_URL}api-web/v2/utility/home/box-category?with_staple=true`)
            .then(res => {
                this.setState({
                    data: res.data.data
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
                    data: res.data.data
                })
            })
        } catch (error) {
            console.error(error)
        }
    }

    getDataProducts = async () => {
        let { page } = this.state
        try {
            await Axios.get(`${process.env.REACT_APP_API_URL}/api-web/v2/product-recommendation?page=${page}`)
            .then(res => {
                this.setState({
                    products: res.data.data
                })
            })
        } catch (error) {
            console.error(error)
        }
    }
    


    componentDidMount =  () => {
         this.getDataCategory()
         this.getDataProducts()
    }


    render() {
        return (
            <div>
                {this.props.title}
                <Category imageobject={this.state.data} />
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

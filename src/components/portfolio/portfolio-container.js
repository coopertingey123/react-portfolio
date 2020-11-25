import React, { Component } from "react";
import PortfolioItem from "./portfolio-item";
import axios from "axios"

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my portfolio",
            isLoading: false,
            data: [
                
            ]

        }
        this.handleFilter = this.handleFilter.bind(this);
        this.getPortfolioItems = this.getPortfolioItems.bind(this)


    }

    getPortfolioItems() {
        const axios = require('axios');
        axios
        .get('https://coopertingey.devcamp.space/portfolio/portfolio_items')
        .then(response => {        
          console.log("response data", response);
          this.setState({
              data: response.data.portfolio_items
          })
        })
        .catch(error => {
          console.log(error);
        })
      }

    handlePageTitleUpdate() {
        this.setState({
            pageTitle: "Something Else"
        })
        
  
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter
            })
        })

    }

    portfolioItems() {
        // 
        return this.state.data.map(item => {

            return <PortfolioItem key={item.id} item={item}/>
        })
    }

    componentDidMount() {
        this.getPortfolioItems();
    }

    render() {
        if (this.state.isLoading) {
            return<div>Loading...</div>
        }
        return (
            <div className="portfolio-items-wrapper">
                <button className="btn" onClick={() => this.handleFilter('eCommerce')}>
                    eCommerce
                </button>
                <button className="btn" onClick={() => this.handleFilter('game')}>
                    Game
                </button>
                <button className="btn" onClick={() => this.handleFilter('project')}>
                    Project
                </button>
                {this.portfolioItems()}
            </div>
        );
    }
}
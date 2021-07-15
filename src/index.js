import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
import blogdata from './data/blogdata.json';
import Singleblogdata from './data/single-blogdata.json';
import HomePage from './components/homepage';
import About from './components/about';
import Services from './components/services';
import Blog from './components/blog';
import BlogGrid from './components/blog-grid';
import BlogDetails from './components/blog-details';
import Contact from './components/contact';
import JobListing from './components/job-listing';
import JobDetails from './components/job-details';
import JobApply from './components/job-apply';
import team from './components/team';
import pricing from './components/pricing';
import offer from './components/offer';
import gallery from './components/gallery';
import workprocessing from './components/work-processing';
import faq from './components/faq';
import Error from './components/error';
import CommingSoon from './components/comming-soon';
import Shop from './components/shop';
import ShopGrid from './components/shop-grid';
import ShopDetails from './components/shop-details';
import Checkout from './components/checkout';

class Root extends Component {
    render() {
        return(
            <Router>
                <HashRouter basename="/">
                    <div>
                        <Switch>
                            <Route exact path="/" component={HomePage} />
                            <Route path="/about" component={About} />
                            <Route path="/services" component={Services} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/blog" render={ () => { return <Blog data={blogdata} /> }} />
                            <Route path="/blog-grid" render={ () => { return <BlogGrid data={blogdata} /> }} />
                            <Route path="/blog-details" render={ () => { return <BlogDetails data={Singleblogdata} /> } } />
                            <Route path="/job-listing" component={JobListing} />
                            <Route path="/job-details" component={JobDetails} />
                            <Route path="/job-apply" component={JobApply} />
                            <Route path="/team" component={team} />
                            <Route path="/pricing" component={pricing} />
                            <Route path="/offer" component={offer} />
                            <Route path="/gallery" component={gallery} />
                            <Route path="/work-processing" component={workprocessing} />
                            <Route path="/faq" component={faq} />
                            <Route path="/comming-soon" component={CommingSoon} />
                            <Route path="/shop" component={Shop} />
                            <Route path="/shop-grid" component={ShopGrid} />
                            <Route path="/shop-details" component={ShopDetails} />
                            <Route path="/checkout" component={Checkout} />
                            <Route path="*" component={Error} />
                        </Switch>
                    </div>
                </HashRouter>
            </Router>
        )
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('root'));



import { data } from '../../data';
import Head from 'next/head'

class Productdetail extends React.Component {
    state = {
        product: [],
        productTitle: '',
        image: '',
        description: '',
    }
    componentDidMount() {
        var desire = location.search.slice(1).split("&")[0].split("=")[1];
        var marvelHeroes = data.filter(function (hero) {
            return hero.id == desire;
        });
        this.setState({ product: marvelHeroes });
        this.setState({ productTitle: marvelHeroes[0].productName });
        this.setState({ image: marvelHeroes[0].image });
    }
    render() {
        return (
            <div>
                <Head>
                    <title>{this.state.productTitle}</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta property="og:title" content={this.state.productTitle} />
                    <meta property="og:url" content="http://localhost:3000/" />
                    <meta property="og:description"
                        content="Shud atta" />
                    <meta property="og:site_name" content="IMDb" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:locale:alternate" content="en_GB" />
                    <meta property="og:locale:alternate" content="cn_CN" />
                    <meta property="og:image" content={this.state.image} />
                    <meta property="og:image:height" content="800" />
                    <meta name="description" content="Seo"></meta>
                </Head>
                <div className="porduct">
                    <div className="product-detail">
                        {this.state.product.map((post) => (
                            <div className="item-select" key={post.id}>
                                <div>
                                    <img src={post.image} alt="product image"/>
                                    <p>{post.productName}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}
export default Productdetail;
import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://m.media-amazon.com/images/S/sonata-images-prod/DE_Hero_FC_Bayern_Story_S1_Launch/15807dd9-25a0-4d8e-b92b-f0a8bc79f87f._UR3000,600_SX1500_FMjpg_.jpeg" alt="FC Bayern - Behind the Legend Staffel 1 "/>
                
                <div className="home_row">
                    <Product
                        id="1234567"
                        title="The lean start"
                        price={29.99}
                        image="https://i.weltbild.de/p/the-lean-startup-266139929.jpg?v=1&wp=_ads-scroller-mobile"
                        rating={4}
                    />
                    <Product
                        id="891101112"
                        title="Kenwood kMix Stand Mixer for Bakink, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price={239.00}
                        image="https://m.media-amazon.com/images/I/51ePd7GY0RS._AC_SX425_.jpg"
                        rating={5} />
                </div>

                <div className="home_row">
                    <Product 
                        id="891101112"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                        price={199.99}
                        image="https://www.alternate.de/p/600x600/4/4/SAMSUNG_C49RG94SSR_LED__Gaming_Monitor@@1724944.jpg"
                        rating={3}/>
                    <Product
                        id="891101112"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        image="https://cdn.idealo.com/folder/Product/6794/5/6794570/s1_produktbild_gross_1/amazon-echo-3-generation.jpg"
                        rating={5} />
                    <Product 
                        id="891101112"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-12-select-wifi-silver-202104_GEO_DE_FMT_WHH?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1617922569000"
                        rating={4}/>
                </div>

                <div className="home_row">
                    <Product 
                        id="891101112"
                        title="Tüte Weed"
                        price={9.99}
                        image="https://hempedelic.com/wp-content/uploads/2018/12/1280px-Marijuana-Cannabis-Weed-Bud-Gram.jpg"
                        rating={5}/>
                </div>
            </div>
        </div>
    );
}

export default Home

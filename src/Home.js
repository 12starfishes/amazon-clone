import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/long-term-assets/ad-specs/ss_expanse_do._TTW_.jpg"
          alt="banner"
        />
        <div className="home__row">
          <Product
            id="12321341"
            title={"The lean startup: How Constant Innovation Creates Radically Successful Busimess Paperback"}
            price={29.59}
            image="https://images-na.ssl-images-amazon.com/images/I/81vvgZqCskL.jpg"
            rating={5}
          />
          <Product
            id="49858094"
            title={
              "Kenwood kMix stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            }
            price={239.49}
            image="https://m.media-amazon.com/images/I/716kTJI4jtL._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="49567487"
            title={"Samsung LC49RG()SSUXEN 49' Curved LED Gaming Monitor"}
            price={199.00}
            image="https://m.media-amazon.com/images/I/81ncZ64JDCL._AC_UY327_FMwebp_QL65_.jpg"
            rating={3}
          />

          <Product
            id="45098734"
            title={"Amazon Echo (3rd generation) | Smart Speaker with alexa, Charcoal Fabric"}
            price={98.59}
            image="https://m.media-amazon.com/images/I/61MbLLagiVL._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}
          />

          <Product
            id="47930932"
            title={"New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"}
            price={598.89}
            image="https://m.media-amazon.com/images/I/815KnP2wjDS._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
        <Product
            id="47938657"
            title={"Acer Predator X35 1800R Curved 35 Inch UltraWide QHD Gaming Monitor I G-SYNC Ultimate I Quantum Dot I 200Hz I VESA Display HDR 1000 I Adjustable Stand I Display Port, HDMI Port & USB 3.0 HUB"}
            price={2186.09}
            image="https://m.media-amazon.com/images/I/61PG4UvgJxS._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

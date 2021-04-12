import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/35629/bing-cherries-ripe-red-fruit.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/196643/pexels-photo-196643.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
];

const properties = {
  arrows: false,
  indicators: true,
};

function ProductDetails() {
  return (
    <div className="product-details">
      <div className="product-d">
        <Slideshow />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <h1>Name</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            molestias sit repudiandae alias eligendi debitis deserunt nulla
            accusantium placeat perspiciatis?
          </p>
          <p>Price</p>
          <div className="btn-group">
            <button>Add to Bag</button>
            <button>Buy Now</button>
          </div>
        </div>
      </div>
      <div className="bottom">
        <Tagline icon={<SvgComponentOne />} text="Fast Delivery" />
        <Tagline icon={<SvgComponentTwo />} text="Buyer Protection" />
        <Tagline icon={<SvgComponentThree />} text="Customer Support" />
      </div>
    </div>
  );
}

const Slideshow = () => {
  return (
    <div className="slide-container slideshow">
      <Slide {...properties}>
        <div className="each-slide">
          <div
            style={{
              backgroundImage: `url(${slideImages[0]})`,
            }}
          ></div>
        </div>
        <div className="each-slide">
          <div
            style={{
              backgroundImage: `url(${slideImages[1]})`,
            }}
          ></div>
        </div>
        <div className="each-slide">
          <div
            style={{
              backgroundImage: `url(${slideImages[2]})`,
            }}
          ></div>
        </div>
      </Slide>
    </div>
  );
};

function Tagline({ text, icon }) {
  return (
    <div className="tagline">
      <div>{icon}</div>
      <div>{text}</div>
    </div>
  );
}

function SvgComponentOne(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={50}
      height={50}
      viewBox="0 0 172 172"
      {...props}
    >
      <g
        fill="none"
        strokeMiterlimit={10}
        fontFamily="none"
        fontWeight="none"
        fontSize="none"
        textAnchor="none"
        style={{
          mixBlendMode: "normal",
        }}
      >
        <path d="M0 172V0h172v172z" />
        <path
          d="M9.621 27.52C2.85 28.057 0 33.594 0 37.464v89.816c0 5.684 4.636 10.32 10.32 10.32h14.082c1.64 9.729 10.132 17.2 20.318 17.2 10.186 0 18.678-7.471 20.317-17.2h41.603V37.504c0-5.321-4.663-9.984-9.984-9.984zM51.6 44.72c17.025 0 30.96 13.935 30.96 30.96s-13.935 30.96-30.96 30.96-30.96-13.935-30.96-30.96S34.575 44.72 51.6 44.72zm61.92 6.88v86h3.75c1.638 9.742 10.117 17.2 20.33 17.2 10.213 0 18.678-7.458 20.33-17.2h3.75c5.308 0 10.32-5.012 10.32-10.32V94.264c0-6.746-4.878-13.908-5.496-14.781l-14.176-19.014c-2.648-3.32-8.076-8.869-14.728-8.869zm-65.36 3.44v18.92l-12.376 9.285 4.112 5.51L55.04 77.4V55.04zm82.56 3.44h6.88c2.714 0 6.208 2.352 9.285 6.181l14.043 18.84c1.034 1.491 3.52 5.737 4.085 9.379H134.16c-1.545 0-3.44-1.895-3.44-3.44zm-86 61.92a13.7 13.7 0 0113.76 13.76 13.7 13.7 0 01-13.76 13.76 13.7 13.7 0 01-13.76-13.76 13.7 13.7 0 0113.76-13.76zm92.88 0c7.592 0 13.76 6.168 13.76 13.76s-6.168 13.76-13.76 13.76-13.76-6.168-13.76-13.76 6.168-13.76 13.76-13.76z"
          fill="#ff0"
        />
      </g>
    </svg>
  );
}

function SvgComponentTwo(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={60}
      height={50}
      viewBox="0 0 172 172"
      {...props}
    >
      <g
        fill="none"
        strokeMiterlimit={10}
        fontFamily="none"
        fontWeight="none"
        fontSize="none"
        textAnchor="none"
        style={{
          mixBlendMode: "normal",
        }}
      >
        <path d="M0 172V0h172v172z" />
        <path
          d="M86.011 11.478c-2.101 0-4.201 1.018-5.43 3.068l-2.397 3.998c-1.032 1.72-2.738 2.876-4.67 3.404-.023.006-.033.017-.056.022-1.955.54-4.029.382-5.8-.604l-4.076-2.262c-4.18-2.322-9.326.649-9.406 5.43l-.09 4.715c-.034 1.995-.919 3.853-2.33 5.263a.166.166 0 00-.044.045c-1.41 1.416-3.268 2.295-5.263 2.329l-4.726.078c-4.781.08-7.753 5.232-5.43 9.418l2.273 4.087c.974 1.76 1.138 3.818.604 5.756-.017.034-.022.066-.033.1-.522 1.921-1.68 3.61-3.382 4.636l-4.009 2.408c-4.1 2.46-4.1 8.402 0 10.862l4.009 2.408c1.708 1.026 2.86 2.715 3.382 4.635.011.035.01.072.022.112.533 1.938.381 4.002-.593 5.756l-2.274 4.087c-2.322 4.18.65 9.326 5.431 9.407l4.715.078c2 .034 3.852.93 5.263 2.34l.045.045c1.416 1.41 2.306 3.268 2.34 5.263l.078 4.715c.08 4.781 5.227 7.753 9.407 5.43l4.087-2.273c1.76-.974 3.818-1.126 5.756-.593.034.011.077.01.112.022 1.92.522 3.61 1.674 4.635 3.382l2.408 4.009c2.46 4.1 8.402 4.1 10.862 0l2.408-4.009c1.026-1.708 2.715-2.86 4.635-3.382.035-.011.067-.01.101-.022 1.938-.533 4.002-.381 5.756.593l4.087 2.274c4.18 2.322 9.337-.65 9.418-5.431l.078-4.715c.034-2 .919-3.852 2.33-5.263l.044-.045c1.41-1.416 3.268-2.306 5.263-2.34l4.726-.078c4.781-.08 7.753-5.227 5.43-9.407l-2.273-4.087c-.974-1.76-1.138-3.818-.604-5.756.011-.034.022-.071.033-.112.522-1.92 1.674-3.61 3.382-4.635l4.009-2.408c4.11-2.465 4.11-8.402.011-10.862l-4.009-2.408c-1.708-1.026-2.86-2.715-3.382-4.635-.011-.035-.022-.061-.033-.101-.533-1.938-.37-4.002.605-5.756l2.273-4.087c2.322-4.18-.65-9.337-5.431-9.418l-4.726-.078c-2-.034-3.852-.919-5.263-2.33l-.045-.044c-1.416-1.41-2.294-3.268-2.329-5.263l-.078-4.726c-.08-4.781-5.238-7.753-9.418-5.43l-4.087 2.273c-1.76.974-3.818 1.138-5.756.604-.034-.011-.06-.022-.1-.033-1.921-.522-3.61-1.674-4.636-3.382l-2.408-4.009c-1.23-2.05-3.33-3.068-5.43-3.068zM80.38 47.11h11.668v45.866h-11.68V57.624h-.604l-11.053 7.47V55.048zm58.206 62.809c-2.453 1.324-5.194 2.132-8.118 2.183l-1.153.012-.012 1.153c-.16 9.655-8.16 17.502-17.816 17.502-2.998 0-5.984-.766-8.633-2.24l-.997-.56-.593.986c-.12.2-.3.354-.426.549l31.03 31.03v-28.667h28.666zm-105.182.011l-21.936 21.937h28.666v28.666l31.03-31.03c-.126-.194-.305-.347-.426-.548l-.593-.985-1.008.56a17.857 17.857 0 01-8.634 2.25c-9.655 0-17.644-7.858-17.804-17.513l-.023-1.142-1.142-.023c-2.918-.051-5.676-.848-8.13-2.172z"
          fill="#ff0"
        />
      </g>
    </svg>
  );
}

function SvgComponentThree(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={60}
      height={50}
      viewBox="0 0 172 172"
      {...props}
    >
      <g
        fill="none"
        strokeMiterlimit={10}
        fontFamily="none"
        fontWeight="none"
        fontSize="none"
        textAnchor="none"
        style={{
          mixBlendMode: "normal",
        }}
      >
        <path d="M0 172V0h172v172z" />
        <path
          d="M86 14.333c-21.583 0-40.823 9.716-53.96 24.874L14.333 21.5v43h43L42.118 49.285C52.64 36.725 68.368 28.667 86 28.667c31.612 0 57.333 25.72 57.333 57.333h14.334c0-39.517-32.15-71.667-71.667-71.667zM14.333 86c0 29.319 17.73 54.519 43 65.606v-16.083C40.227 125.604 28.667 107.156 28.667 86zm75.25 14.333c-9.811 0-17.916 8.105-17.916 17.917v3.583H86v-3.583c0-2.056 1.527-3.583 3.583-3.583 2.057 0 3.584 1.527 3.584 3.583 0 1.848-2.49 7.577-6.58 12.892-4.088 5.315-9.249 10.49-12.667 13.703l-2.253 2.128v10.694H107.5v-14.334H94.762c1.137-1.329 2.099-2.036 3.192-3.457 4.87-6.33 9.546-13.147 9.546-21.626 0-9.812-8.105-17.917-17.917-17.917zm32.25 0v43h21.5v14.334h14.334v-57.334h-14.334V129h-7.166v-28.667z"
          fill="#ff0"
        />
      </g>
    </svg>
  );
}

export default ProductDetails;

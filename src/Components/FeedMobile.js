import React from "react";
import Form from "./Form";
import FormMobile from "./FormMobile";
import Heading from "./Heading";
import Card from "./Card";
import "../Feed.css";
import Media from "react-media";

// Images
import facemask from "../images/facemask-removebg-preview.png";
import woodbench from "../images/woodbench-removebg-preview.png";
import woodleg from "../images/woodleg-removebg-preview.png";
import babycut from "../images/babycut-removebg-preview.png";
import proteinground from "../images/proteinground-removebg-preview.png";

function FeedMobile() {
  return (
    <div className="feed-mobile">
      <Media queries={{ small: { maxWidth: 768 } }}>
        {(matches) => (matches.small ? <FormMobile /> : <Form />)}
      </Media>
      <Heading classN="heading one" label="Electronics" num="12" />
      <Card img={facemask} name="Face Mask" price="UGX 185,000" />
      <Card img={facemask} name="Face Mask" price="UGX 185,000" />
      <Card img={facemask} name="Face Mask" price="UGX 185,000" />
      <Card img={facemask} name="Face Mask" price="UGX 185,000" />
      <Card img={facemask} name="Face Mask" price="UGX 185,000" />
      <Card img={woodleg} name="Face Mask" price="UGX 185,000" />
      <Card img={babycut} name="Face Mask" price="UGX 185,000" />
      <Card img={woodbench} name="Face Mask" price="UGX 185,000" />
      <Card img={proteinground} name="Face Mask" price="UGX 185,000" />
    </div>
  );
}

export default FeedMobile;

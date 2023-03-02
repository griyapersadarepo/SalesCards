import React from "react";
import LazyLoad from "react-lazy-load";
import css from "../css/cssglobal.module.css"
//Media-images
import images1 from "../../data/images/imageshow/images1.webp";
import images2 from "../../data/images/imageshow/images2.webp";
import images3 from "../../data/images/imageshow/images3.webp";
import images4 from "../../data/images/imageshow/images4.webp";
import ucimage1 from "../../data/images/imageshow/uncompressed/images1.webp";
import ucimage2 from "../../data/images/imageshow/uncompressed/images2.webp";
import ucimage3 from "../../data/images/imageshow/uncompressed/images3.webp";
import ucimage4 from "../../data/images/imageshow/uncompressed/images4.webp";


function ImagesShow() {

  return (
      <div className={css.imagediv}>
        <a href={ucimage1}
            target="_blank"
            rel="noopener noreferrer">
            <div className={css.image1}>
            <LazyLoad offset={800} placeholder={<div>Loading images.....</div>}>
                <img src={images1} alt="Image1" className={css.image1}/>
            </LazyLoad>
            </div>
            </a>
        <a href={ucimage2}
            target="_blank"
            rel="noopener noreferrer">
            <div className={css.image2}>
            <LazyLoad offset={800} placeholder={<div>Loading images.....</div>}>
                <img src={images2} alt="Image2" className={css.image2}/>
            </LazyLoad>
            </div>
        </a>
            <a href={ucimage3}
            target="_blank"
            rel="noopener noreferrer">
            <div className={css.image3}>
            <LazyLoad offset={800} placeholder={<div>Loading images.....</div>}>
                <img src={images3} alt="Image3" className={css.image3}/>
            </LazyLoad>
            </div>
            </a>
            <a href={ucimage4}
            target="_blank"
            rel="noopener noreferrer">
            <div className={css.image4}>
            <LazyLoad offset={800} placeholder={<div>Loading images.....</div>}>
                <img src={images4} alt="Image4" className={css.image4}/>
            </LazyLoad>
            </div>
            </a>
      </div>
  )
}

export default ImagesShow;

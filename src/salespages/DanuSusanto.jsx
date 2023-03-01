import React from "react";
import LazyLoad from "react-lazy-load";
//css
import css from "../salespages/css/cssglobal.module.css";
//logo
import gplogo from "../data/images/logobandungan.webp";
//avatar
import avatar from "../data/images/avatars/sales/webp/danususanto.webp"

//Icons
import igicon from "../data/images/media-icons/ig215x215.png";
import tiktokicon from "../data/images/media-icons/tiktok215x215.png";
import waicon from "../data/images/media-icons/wa215x215.png";
import smileicon from "../data/images/media-icons/smile215x215.png";

//Media-images
import images1 from "../data/images/imageshow/images1.webp";
import images2 from "../data/images/imageshow/images2.webp";
import images3 from "../data/images/imageshow/images3.webp";
import images4 from "../data/images/imageshow/images4.webp";
import ucimage1 from "../data/images/imageshow/uncompressed/images1.png";
import ucimage2 from "../data/images/imageshow/uncompressed/images2.png";
import ucimage3 from "../data/images/imageshow/uncompressed/images3.png";
import ucimage4 from "../data/images/imageshow/uncompressed/images4.png";

function DanuSusanto() {

  return (
    <div>
   <div className={css.main}>
   <div className={css.canva}>
      
    <div key="">
     
    <div className={css.wrapper}>
      <div className={css.container1}>
      <div className={css.cs1div}>
      <div className={css.footer}>
       <div className={css.footerset}>
          <div className={css.f1}>Jl. Gintungan No. 77 Bandungan, Kab. Semarang 50614</div>
          <div className={css.f2}>(0298) 60 72 093 | (0298) 60 72 502 (Fax.)</div>
          <div className={css.f3}>www.griyapersadahotel.com/bandungan</div>
          <div className={css.f4}>marketing.b01@griyapersadahotel.com</div>
          </div>
       </div>
      <div className={css.container2}></div>

      </div>
      </div>
      <div className={css.gplogo}>
        <img src={gplogo} alt="gplogo" className={css.gplogoimg}/>
      </div>
      <div className={css.circle}>
        <div className={css.avatardiv}>
          <div className={css.avatar}>
          <img src={avatar} alt="GriyaPersadaBandunganSales" className={css.avatarcss} />
          </div>
        </div>
      </div>
      <div className={css.divname}>
          <p>DANU SUSANTO, A.md.Par.</p>
        </div>
        <div className={css.divjabatan}>
          <p className={css.jabatan}>General Manager</p>
        </div>
        <p className={css.notelp}>0813 2731 9625</p>
      </div>
      <div className={css.cs2div}>
      
       <div className={css.container3}>

       <div className={css.sosflex}>
      <div className={css.instagram}>
      <a href={`https://www.instagram.com/griyapersadahotel.bandungan/`}
   target="_blank"
   rel="noopener noreferrer">
<img src={igicon} alt="igicon" className={css.igavatar}/>
</a>
        </div>
        <div className={css.tiktok}>
        <a href={`https://www.tiktok.com/@griyapersada.bandungan`}
   target="_blank"
   rel="noopener noreferrer">
<img src={tiktokicon} alt="tiktokicon" className={css.tiktokavatar}/>
</a>
        </div>
  
        <div className={css.whatsapp}>
      
   <a href={`https://api.whatsapp.com/send?phone=6281327319625`}
   target="_blank"
   rel="noopener noreferrer">
<img src={waicon} alt="waicon" className={css.whatsappavatar}/>
</a>
        </div>
        <div className={css.products}>
        <a href={`https://drive.google.com/drive/folders/114ASyPVsJ1KbBOj8qEghmDJjHE4Wxal_`}
   target="_blank"
   rel="noopener noreferrer">
<img src={smileicon} alt="smileicon" className={css.productsavatar}/>
</a>
        </div>
      </div>
       </div>
      <div className={css.text1}>
      <a href={`https://www.instagram.com/griyapersadahotel.bandungan/`}
   target="_blank"
   rel="noopener noreferrer" className={css.productstext}><p>Instagram</p></a>
        <a href={`https://www.tiktok.com/@griyapersada.bandungan`}
   target="_blank"
   rel="noopener noreferrer" className={css.productstext}><p>Tiktok</p></a>
        <a href={`https://api.whatsapp.com/send?phone=6281327319625`}
   target="_blank"
   rel="noopener noreferrer" className={css.productstext}><p>Whatsapp</p></a>
        <a href={`https://drive.google.com/drive/folders/114ASyPVsJ1KbBOj8qEghmDJjHE4Wxal_`}
   target="_blank"
   rel="noopener noreferrer" className={css.productstext}><p>Products</p></a>
      </div>
      </div>
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
       <div className={css.googlemap}>
        <div className={css.divicon}>
          <div className={css.icon}></div>
        </div>
      <div className={css.gembed}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5930.624152442228!2d110.36558652505751!3d-7.21609383054746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708732f6093c45%3A0x5bc84e52da4fac76!2sGriya%20Persada%20Convention%20Hotel%20%26%20Resort%20Bandungan!5e0!3m2!1sen!2sid!4v1676808554200!5m2!1sen!2sid" 
      style={{border:0}} 
      allowFullScreen 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"
      title="Griya Persada Location"
      className={css.ifgmap}>
    </iframe>
      </div>
      </div>
      <div className={css.cpy}>@ Copyright </div>
      </div>
    </div>
    </div>
   </div>
  )
}

export default DanuSusanto;

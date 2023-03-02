import React, { lazy, Suspense } from 'react';
//Components
//import ImagesShow from "./components/imagesShow";
//css
import css from "../salespages/css/cssglobal.module.css";
//logo
import gplogo from "../data/images/logobandungan.webp";
//avatar
import avatar from "../data/images/avatars/sales/webp/taqwimeka.webp"

//Icons
import igicon from "../data/images/media-icons/ig215x215.webp";
import tiktokicon from "../data/images/media-icons/tiktok215x215.webp";
import waicon from "../data/images/media-icons/wa215x215.webp";
import smileicon from "../data/images/media-icons/smile215x215.webp";

function TaqwimEka() {
  const ImagesShow = lazy(() => import('./components/imagesShow'));
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
          <img src={gplogo} alt="gplogo" className={css.gplogoimg} loading="lazy"/>
       </div>
       <div className={css.circle}>
         <div className={css.avatardiv}>
           <div className={css.avatar}>
           <img src={avatar} alt="GriyaPersadaBandunganSales" className={css.avatarcss} /> 
           </div>
         </div>
       </div>
       <div className={css.divname}>
           <p>TAQWIM EKA</p>
         </div>
         <div className={css.divjabatan}>
           <p className={css.jabatan}>Sales Executive</p>
         </div>
         <p className={css.notelp}>0857 0155 9949</p>
       </div>
       <div className={css.cs2div}>
       
        <div className={css.container3}>
 
        <div className={css.sosflex}>
      <div className={css.instagram}>
      <a href={`https://www.instagram.com/griyapersadahotel.bandungan/`}
   target="_blank"
   rel="noopener noreferrer">
<img src={igicon} alt="igicon" className={css.igavatar}/>
    <div className={css.igdivtext}>
      <p className={css.igtext}>Instagram</p>
    </div>
</a>
        </div>
        <div className={css.tiktok}>
        <a href={`https://www.tiktok.com/@griyapersada.bandungan`}
   target="_blank"
   rel="noopener noreferrer">
<img src={tiktokicon} alt="tiktokicon" className={css.tiktokavatar}/>
<div className={css.igdivtext}>
      <p className={css.igtext}>Tiktok</p>
    </div>
</a>
        </div>
  
        <div className={css.whatsapp}>
      
   <a href={`https://wa.me/6285701559949?text=Hallo%20Taqwim%20Eka`}
   target="_blank"
   rel="noopener noreferrer">
<img src={waicon} alt="waicon" className={css.whatsappavatar}/>
<div className={css.igdivtext}>
      <p className={css.igtext}>Whatsapp</p>
    </div>
</a>
        </div>
        <div className={css.products}>
        <a href={`https://drive.google.com/drive/folders/114ASyPVsJ1KbBOj8qEghmDJjHE4Wxal_`}
   target="_blank"
   rel="noopener noreferrer">
<img src={smileicon} alt="smileicon" className={css.productsavatar}/>
<div className={css.igdivtext}>
      <p className={css.igtext}>Products</p>
    </div>
</a>
        </div>
      </div>
        </div>
       </div>
       <Suspense fallback={<div>Loading...</div>}>
       <ImagesShow/>
     </Suspense>
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

export default TaqwimEka;

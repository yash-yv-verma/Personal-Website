export default function GlobalStyles() {
  return (
    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css?family=Poppins:300,400');
      @import url(https://fonts.googleapis.com/css?family=Roboto+Mono:400,500,700,300,100|Lora:400,400italic,700,700italic);
      
      html {
        -webkit-font-smoothing: antialiased;
        scroll-behavior: smooth;
      }
      
      html, body {
        width: 100%;
        height: 100%;
        background-color: #000000;
        color: #fff;
        min-height: 100vh;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
      }
      
      body {
        background: #000000;
        font-family: Lora, serif;
        font-style: normal;
        font-weight: normal;
        overflow-x: hidden;
        -webkit-overflow-scrolling: touch;
        padding-top: env(safe-area-inset-top);
        padding-right: env(safe-area-inset-right);
        padding-bottom: env(safe-area-inset-bottom);
        padding-left: env(safe-area-inset-left);
        /* Smooth scrolling optimizations */
        scroll-behavior: smooth;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }





      
      
      * {
        font-family: inherit;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
      }
      
      *:before,
      *:after {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
      }
      
      /* Performance optimizations for smoother scrolling */
      * {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
      }
      
      /* Optimize animations and transitions */
      .parallax-section,
      .motion-div,
      [data-framer-motion] {
        will-change: transform;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
      }
      
      /* Reduce GPU usage for smoother scrolling */
      .container,
      .row,
      .col-md-offset-5,
      .col-md-7,
      .col-sm-12,
      .col-xs-12 {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
      }
      
      /* Optimize transitions */
      a, button, .btn-custom, .service-thumb {
        transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
      }
      
      a {
        color: #ffffff;
        -webkit-transition: 0.5s;
        transition: 0.5s;
        text-decoration: none !important;
      }
      
      a:hover, a:active, a:focus {
        color: #cccccc;
        outline: none;
      }
      
      /*---------------------------------------
        Typography              
      -----------------------------------------*/
      
      h1, h2, h3, h4, h5, h6 {
        font-family: 'Roboto Mono', sans-serif;
      }
      
      .color {
        color: #303F9F;
      }
      
      h1 {
        color: #ffffff;
        font-size: 45px;
        line-height: normal;
      }
      
      h2 {
        color: #ffffff;
        font-size: 35px;
        line-height: 52px;
        margin-top: 0px;
      }
      
      h3 {
        color: #ffffff;
        font-size: 16px;
        line-height: 32px;
        letter-spacing: 6px;
        text-transform: uppercase;
      }
      
      h4 {
        color: #ffffff;
        font-size: 20px;
      }
      
      h6 {
        margin: 2px 2px;
      }
      
      p {
        color: #ffffff;
        font-size: 16px;
        font-weight: normal;
        line-height: 25px;
        letter-spacing: 0.2px;
      }
      
      .bg-grey {
        background: #2b2b2b !important;
      }
      
      .white-color {
        color: #f0f0f0;
      }
      
      /*---------------------------------------
        General Section Layout               
      -----------------------------------------*/
      
      .parallax-section {
        background-attachment: fixed !important;
        background-size: cover !important;
        /* Performance optimizations */
        will-change: transform;
        transform: translateZ(0);
        backface-visibility: hidden;
      }
      
      /* Reduce parallax intensity for smoother scrolling */
      .parallax-section[data-parallax-y] {
        transform: translateY(0) translateZ(0);
      }
      
      /* Fix gradient issues on mobile */
      @media (max-width: 768px) {
        .parallax-section {
          background-attachment: scroll !important;
          background-size: cover !important;
        }
        
        /* Improve gradient rendering on mobile */
        #about, #research, #extracurricular {
          background: linear-gradient(135deg, #000000 0%, #000000 60%, #1e3a8a 100%) !important;
          background-attachment: scroll !important;
        }
        
        /* Prevent sections from being scrollable on mobile */
        #service, #about, #work, #research, #projects, #extracurricular, #contact, footer {
          position: relative !important;
          overflow: hidden !important;
        }
        
        /* Ensure proper section spacing on mobile */
        .container {
          padding-left: 15px !important;
          padding-right: 15px !important;
        }
        
        /* Fix mobile touch scrolling */
        body {
          -webkit-overflow-scrolling: touch !important;
          overflow-x: hidden !important;
        }
        
        /* Additional mobile improvements */
        html {
          -webkit-text-size-adjust: 100% !important;
          -ms-text-size-adjust: 100% !important;
        }
        
        /* Prevent zoom on input focus on iOS */
        input, textarea, select {
          font-size: 16px !important;
        }
        
        /* Improve touch targets */
        button, a, [role="button"] {
          min-height: 44px !important;
          min-width: 44px !important;
        }
        
        /* Fix iOS Safari viewport issues */
        @supports (-webkit-touch-callout: none) {
          body {
            padding-top: env(safe-area-inset-top) !important;
            padding-bottom: env(safe-area-inset-bottom) !important;
            padding-left: env(safe-area-inset-left) !important;
            padding-right: env(safe-area-inset-right) !important;
          }
        }
      }
      
      /* Disable parallax on lower-end devices for better performance */
      @media (max-width: 1024px) {
        .parallax-section {
          background-attachment: scroll !important;
        }
      }
      
      .section-title {
        margin: 0;
        padding-bottom: 32px;
      }
      
      #service, #about, #work, #research, #projects, #extracurricular, #contact, footer {
        position: relative;
        padding-top: 80px;
        padding-bottom: 80px;
      }
      
      #home {
        position: relative;
      }
      
      .fullwidth-section {
        width: 100vw;
        max-width: 100vw;
        margin-left: calc(50% - 50vw);
        margin-right: calc(50% - 50vw);
        box-sizing: border-box;
        padding: 0;
      }
      
      /* Uniform container system for all sections */
      .container {
        width: 100% !important;
        max-width: 1200px !important;
        margin-left: auto !important;
        margin-right: auto !important;
        padding-left: 20px !important;
        padding-right: 20px !important;
        box-sizing: border-box !important;
      }
      
      .fullwidth-section .container {
        width: 100% !important;
        max-width: 1200px !important;
        margin-left: auto !important;
        margin-right: auto !important;
        padding-left: 20px !important;
        padding-right: 20px !important;
        box-sizing: border-box !important;
      }
      
      /* Ensure all rows stretch full width except form rows */
      .row {
        width: 100% !important;
      }
      
      .container > .row {
        margin-left: 0 !important;
        margin-right: 0 !important;
      }
      
      /* Clean Black & White Alternating Theme */
      #service, #work, #projects, #contact {
        background: #ffffff;
        border-bottom: 1px solid #e5e5e5;
      }
      
      #about, #research, #extracurricular {
        background: linear-gradient(90deg, #000000 0%, #000000 70%, #1e3a8a 100%);
        border-bottom: 1px solid #333333;
      }
      
      /* Text colors for white sections */
      #service h2, #service h3, #service h4, #service p,
      #work h2, #work h3, #work h4, #work p,
      #projects h2, #projects h3, #projects h4, #projects p,
      #contact h2, #contact h3, #contact h4, #contact p {
        color: #000000;
      }
      
      /* Text colors for black sections */
      #about h2, #about h3, #about h4, #about p,
      #research h2, #research h3, #research h4, #research p,
      #extracurricular h2, #extracurricular h3, #extracurricular p {
        color: #e5e5e5;
      }
      

      
      /*---------------------------------------
        Button Styling from Original
      -----------------------------------------*/
      
      .section-btn {
        background: #000000;
        border: none;
        border-radius: 50px;
        color: #f0f0f0;
        font-size: 12px;
        font-weight: bold;
        letter-spacing: 1.5px;
        padding: 18px 32px;
        margin-top: 42px;
        text-transform: uppercase;
        -webkit-transition: all ease-in-out 0.4s;
        transition: all ease-in-out 0.4s;
      }
      
      .section-btn:focus,
      .section-btn:hover {
        background: #ffffff;
        color: #000000;
      }
      
      .about-text > p {
        font-size: 14px;
        color: rgba(0,0,0,.6);
        line-height: 1.8em;
      }
      
      .about-text {
        margin-bottom: 25px;
      }
      
      .about-btns > .btn-custom {
        margin-right: 25px;
      }
      
      a.btn-custom {
        color: #FFF;
        text-decoration: none;
      }
      
      .btn-custom {
        color: #FFF;
        letter-spacing: 4px;
        text-transform: uppercase;
        text-decoration: none;
        text-align: center;
        font-size: 11px;
        font-weight: 400;
        display: inline-block;
        line-height: 1em;
        padding: 17px 32px;
        position: relative;
        z-index: 5;
        background: transparent;
        border: none;
      }
      
      .btn-custom:after {
        content: ' ';
        position: absolute;
        top: 0;
        left: -10px;
        right: -10px;
        bottom: 0;
        -webkit-transform: rotate(-4deg);
        -moz-transform: rotate(-4deg);
        -ms-transform: rotate(-4deg);
        -o-transform: rotate(-4deg);
        transform: rotate(-4deg);
        z-index: -1;
        opacity: 0;
        visibility: hidden;
        background: rgba(0,0,0,.3);
        -webkit-transition: all .3s cubic-bezier(.785,.135,.15,.86);
        -moz-transition: all .3s cubic-bezier(.785,.135,.15,.86);
        transition: all .3s cubic-bezier(.785,.135,.15,.86);
      }
      
      .btn-custom:before {
        content: ' ';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2;
        border: solid 1px #FFF;
        border-color: rgba(255,255,255,.8);
      }
      
      .btn-custom:hover:after {
        opacity: 1;
        visibility: visible;
      }
      
      .btn-custom.btn-color:after {
        background: #303F9F;
      }
      
      .btn-custom.btn-color:hover:after {
        opacity: .4;
      }
      
      .btn-custom.btn-color {
        color: #202020;
      }
      
      .btn-custom.btn-color > span:before,
      .btn-custom.btn-color > span:after {
        background: rgba(0,0,0,.2);
      }
      
      .btn-custom.btn-color:before {
        border-color: rgba(0,0,0,.2);
      }
      
      /*---------------------------------------
        Info List Styling
      -----------------------------------------*/
      
      .info-list {
        padding: 0;
        margin: 0;
        list-style: none;
      }
      
      .info-list > li {
        padding: 14px 0;
        border-bottom: solid 1px rgba(0,0,0,.1);
      }
      
      .info-list > li:last-of-type {
        border: none;
      }
      
      .info-list > li > strong {
        letter-spacing: 4px;
        color: #ffffff;
        text-transform: uppercase;
      }
      
      .info-list > li > span {
        color: #a1a1aa;
      }
      
      /*---------------------------------------
        Timeline Styling
      -----------------------------------------*/
      
      .timeline-block .section-header {
        margin-bottom: 80px;
      }
      
      .timeline {
        margin: 0;
        padding: 0;
        list-style: none;
        position: relative;
        padding: 40px 0;
      }
      
      .timeline:before {
        content: ' ';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 1px;
        background: #D0D0D0;
      }
      
      .timeline > li {
        padding-left: 40px;
        margin-bottom: 40px;
        font-size: 14px;
        color: #ffffff;
        line-height: 1.8em;
      }
      
      .timeline > li:last-of-type {
        margin-bottom: 0;
      }
      
      .timeline > li > .timeline-content {
        padding: 25px;
        border: solid 1px #B6B6B6;
        position: relative;
      }
      
      .timeline > li > .timeline-content:before {
        content: ' ';
        position: absolute;
        top: 15px;
        left: -40px;
        width: 40px;
        height: 1px;
        background: #B6B6B6;
      }
      
      .timeline > li > .timeline-content:after {
        content: ' ';
        position: absolute;
        height: 16px;
        width: 16px;
        border-radius: 50%;
        background: #F0F0F0;
        border: solid 1px #B6B6B6;
        top: 7px;
        left: -48px;
      }
      
      .timeline > li > .timeline-content > h4 {
        margin: 0;
        margin-bottom: 5px;
      }
      
      .timeline > li > .timeline-content > em {
        margin-bottom: 10px;
        display: block;
        color: #ffffff;
      }
      
      .timeline > li > .timeline-content > p {
        margin: 0;
        line-height: 1.6em;
        color: #a1a1aa;
      }
      
      /*---------------------------------------
        Service Section Styling
      -----------------------------------------*/
      
      .service-thumb {
        background: #2b2b2b;
        border-radius: 5px;
        padding: 42px 22px;
        cursor: crosshair;
        position: relative;
        top: 0;
        -webkit-transition: all ease-in-out 0.4s;
        transition: all ease-in-out 0.4s;
      }
      
      .service-thumb:hover {
        background: #ffffff;
        top: -5px;
        border: 2px solid #303F9F;
      }
      
      .service-thumb:hover .fa,
      .service-thumb:hover h4 {
        color: #2b2b2b;
      }
      
      .service-thumb h4 {
        padding-bottom: 5px;
      }
      
      .skill-container {
        margin-top: 20px;
      }
      
      .skill {
        margin-right: 10px;
        padding: 2px 7px;
        border-style: solid;
        border-radius: 2em;
        border-color: #d9d9d9;
        background: #2b2b2b;
        color: #d9d9d9;
      }
      
      .skill:hover {
        border-color: #2b2b2b;
        background: #d9d9d9;
        color: #2b2b2b;
        cursor: crosshair;
      }
      
      .service-thumb:hover .skill {
        border-color: #2b2b2b;
        background: #d9d9d9;
        color: #2b2b2b;
      }
      
      .service-thumb:hover .skill:hover {
        border-color: #d9d9d9;
        background: #2b2b2b;
        color: #d9d9d9;
      }
      
      .service-thumb .fa {
        color: #ffffff;
        font-size: 62px;
        text-align: center;
        margin-top: 32px;
        margin-bottom: 22px;
      }
      
      .bg-grey .fa {
        color: #ffffff;
      }
      
      /*---------------------------------------
        About Section Styling
      -----------------------------------------*/
      
      .about-image-thumb img {
        border-radius: 5px;
        margin-bottom: 22px;
      }
      
      .about-image-thumb .social-icon li a {
        background: #f0f0f0;
      }
      
      .about-thumb {
        padding: 32px 12px;
      }
      
      .about-thumb p {
        padding: 2px 0;
      }
      
      /*---------------------------------------
        Work Section Styling
      -----------------------------------------*/
      
      .work-thumb {
        margin: 22px 0 12px 0;
        padding: 0;
        overflow: hidden;
        position: relative;
        text-align: left;
      }
      
      .work-thumb img {
        border-radius: 5px;
      }
      
      .work-thumb h2 {
        font-size: 25px;
      }
      
      .work-thumb-overlay {
        position: absolute;
        background: #7682cc;
        border-radius: 5px;
        cursor: crosshair;
        opacity: 0;
        width: 100%;
        height: 100%;
        padding: 82px 42px;
        -webkit-transition: all ease-in-out 0.4s;
        transition: all ease-in-out 0.4s;
      }
      
      .work-thumb:hover .work-thumb-overlay {
        opacity: 1;
      }
      
      /*---------------------------------------
        Contact Section Styles
      -----------------------------------------*/
      
      .contact-info .fa {
        padding-right: 5px;
      }
      
      #contact .form-control {
        border: 1px solid #ccc;
        border-radius: 2px;
        box-shadow: none;
        background: #fff;
        height: 38px;
        font-size: 15px;
        margin-top: 10px;
        margin-bottom: 10px;
        padding: 6px 10px;
        -webkit-transition: all ease-in-out 0.4s;
        transition: all ease-in-out 0.4s;
      }
      
      #contact .form-control:focus {
        border-color: #888;
        outline: none;
      }
      
      #contact textarea.form-control {
        min-height: 80px;
        height: auto;
        resize: vertical;
      }
      
      #contact button#submit {
        background: #2b2b2b;
        border: none;
        border-radius: 50px;
        color: #ffffff;
        height: 50px;
        margin-top: 24px;
      }
      
      #contact button#submit:hover {
        background: #7682cc;
        color: #ffffff;
      }
      
      /*---------------------------------------
        Footer Section
      -----------------------------------------*/
      
      footer {
        background: #000000 !important;
        text-align: center;
        padding: 120px 0;
        border-top: 1px solid #333333;
      }
      
      footer p {
        padding-bottom: 16px;
        color: #ffffff;
      }
      
      footer h1, footer h2, footer h3, footer h4, footer h5, footer h6 {
        color: #ffffff;
      }
      
      /*---------------------------------------
        Bullet Point Styling - Uniform across all sections
      -----------------------------------------*/
      
      ul li, ol li {
        color: #666666 !important;
      }
      
      /* Ensure bullets are visible on all backgrounds - consistent light color */
      /* Bullet colors for white sections */
      #service ul li, #service ol li,
      #work ul li, #work ol li,
      #projects ul li, #projects ol li,
      #contact ul li, #contact ol li {
        color: #333333 !important;
      }
      
      /* Bullet colors for black sections */
      #about ul li, #about ol li,
      #research ul li, #research ol li,
      #extracurricular ul li, #extracurricular ol li {
        color: #cccccc !important;
      }
      
      /* Job titles in work section should be black */
      #work h4, #work .timeline > li > .timeline-content > h4 {
        color: #000000 !important;
      }
      
      /* Experience section text should be black */
      #work .timeline > li > .timeline-content > em,
      #work .timeline > li > .timeline-content > p {
        color: #000000 !important;
      }
      
      /* Info list colors for white sections */
      #service .info-list > li > strong,
      #work .info-list > li > strong,
      #projects .info-list > li > strong,
      #contact .info-list > li > strong {
        color: #000000;
      }
      
      #service .info-list > li > span,
      #work .info-list > li > span,
      #projects .info-list > li > span,
      #contact .info-list > li > span {
        color: #333333;
      }
      
      /* Info list colors for black sections */
      #about .info-list > li > strong,
      #research .info-list > li > strong,
      #extracurricular .info-list > li > strong {
        color: #e5e5e5;
      }
      
      #about .info-list > li > span,
      #research .info-list > li > span,
      #extracurricular .info-list > li > span {
        color: #cccccc;
      }
      
      /* Timeline colors for white sections */
      #work .timeline > li,
      #projects .timeline > li {
        color: #000000;
      }
      
      #work .timeline > li > .timeline-content > em,
      #projects .timeline > li > .timeline-content > em {
        color: #000000;
      }
      
      #work .timeline > li > .timeline-content > p,
      #projects .timeline > li > .timeline-content > p {
        color: #333333;
      }
      
      /* Timeline colors for black sections */
      #about .timeline > li,
      #research .timeline > li,
      #extracurricular .timeline > li {
        color: #e5e5e5;
      }
      
      #about .timeline > li > .timeline-content > em,
      #research .timeline > li > .timeline-content > em,
      #extracurricular .timeline > li > .timeline-content > em {
        color: #e5e5e5;
      }
      
      #about .timeline > li > .timeline-content > p,
      #research .timeline > li > .timeline-content > p,
      #extracurricular .timeline > li > .timeline-content > p {
        color: #cccccc;
      }
      
      /*---------------------------------------
        Social Icon Styling
      -----------------------------------------*/
      
      .social-icon {
        position: relative;
        padding: 0;
        margin: 0;
        text-align: left;
      }
      
      .social-icon li {
        display: inline-block;
        list-style: none;
      }
      
      .social-icon li a {
        background: #000000;
        border-radius: 100%;
        color: #ffffff;
        cursor: pointer;
        font-size: 20px;
        text-decoration: none;
        transition: all 0.4s ease-in-out;
        width: 45px;
        height: 45px;
        line-height: 45px;
        text-align: center;
        vertical-align: middle;
        position: relative;
        top: 0;
        margin: 0px 6px 10px 6px;
        border: 2px solid #ffffff;
      }
      
      .social-icon li a:hover {
        background: #ffffff;
        color: #000000;
        transform: scale(1.1);
        top: -5px;
      }
      
      /*---------------------------------------
        Utility Classes
      -----------------------------------------*/
      
      .timeline-edu-desc {
        font-size: 14px;
        color: rgba(0,0,0,.6);
        line-height: 1.6em;
        font-family: inherit;
      }
      
      .fullwidth-section {
        width: 100vw;
        max-width: 100vw;
        margin-left: calc(50% - 50vw);
        margin-right: calc(50% - 50vw);
        box-sizing: border-box;
      }
      
      /*---------------------------------------
        Mobile Responsive styles              
      -----------------------------------------*/
      
      @media (max-width: 980px) {
        #home {
          height: 55vh;
        }
        
        .service-thumb {
          margin-top: 12px;
          margin-bottom: 22px;
        }
        
        .contact-info {
          margin-top: 22px;
        }
      }
      
      @media (max-width: 768px) {
        #home {
          height: 85vh;
        }
      }
      
      @media (max-width: 580px) {
        h1 {
          font-size: 29px;
        }
        
        h2 {
          font-size: 23px;
        }
        
        #home {
          height: 95vh;
        }
        
        .contact-info {
          margin-top: 42px;
        }
      }
      
      @media (max-width: 320px) {
        #home {
          height: 125vh;
        }
      }
      
      @media(max-width:992px) {
        .info-list {
          margin-bottom: 25px;
        }
        .p-table,
        .service {
          margin-bottom: 25px;
        }
        .skills-block .skill {
          margin-bottom: 40px;
        }
        div:last-of-type > .p-table,
        div:last-of-type > .skill:last-of-type,
        div:last-of-type > .service {
          margin-bottom: 0;
        }
        .portfolio-items > li {
          width: 50%;
        }
        .section {
          padding-top: 90px;
        }
        .section-block {
          padding: 90px;
          padding-top: 0;
        }
        .contact-info-icons {
          margin-top: 60px;
        }
      }
      
      @media(max-width:768px) {
        .portfolio-items > li {
          width: 100%;
        }
        .main-content {
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
        .about-btns > .btn-custom {
          margin-bottom: 10px;
        }
        .intro-text > .intro-btns > .btn-custom {
          margin-bottom: 10px;
        }
        .intro-text > h1 {
          font-size: 62px;
        }
      }
      
      @media(max-width:550px) {
        .section {
          padding-top: 70px;
        }
        .section-block {
          padding: 70px;
          padding-top: 0;
        }
      }
      
      @media(max-width:400px) {
        .section {
          padding-top: 40px;
        }
        .section-block {
          padding: 40px;
          padding-top: 0;
        }
      }
      
      /* Project cards - make them black with gradient */
      .service-thumb {
        background: linear-gradient(135deg, #000000 0%, #000000 40%, #1a1a2e 70%, #1e3a8a 100%) !important;
        border: 1px solid #1e3a8a !important; /* Blue border */
      }
      
      .service-thumb h3,
      .service-thumb h4,
      .service-thumb p,
      .service-thumb .fa {
        color: #e5e5e5 !important;
      }
      
      .service-thumb:hover {
        background: #ffffff !important;
        border: 2px solid #1e3a8a !important;
      }
      
      .service-thumb:hover h3,
      .service-thumb:hover h4,
      .service-thumb:hover p {
        color: #000000 !important;
      }
      
      .service-thumb:hover .fa {
        color: #1e3a8a !important;
      }
      
      /* Skill tags - make them purple instead of gray */
      .skill {
        background: #1a1625 !important;
        color: #ffffff !important;
        border-color: #ffffff !important;
      }
      
      .skill:hover {
        background: #000000 !important;
        color: #ffffff !important;
        border-color: #000000 !important;
      }
      
      .service-thumb:hover .skill {
        background: #1e3a8a !important; /* Blue background when card hovered */
        color: #ffffff !important;
        border-color: #1e3a8a !important;
      }
      
      .service-thumb:hover .skill:hover {
        background: #ffffff !important;
        color: #000000 !important;
        border-color: #1e3a8a !important; /* Blue border on combined hover */
      }
      
      /* Button styles to match home page theme */
      .btn-custom {
        background: linear-gradient(135deg, #000000 0%, #1a1a2e 50%, #1e3a8a 100%) !important;
        color: #e5e5e5 !important;
        border: 1px solid #1e3a8a !important;
        border-radius: 2px !important;
        padding: 20px 40px !important;
        text-decoration: none !important;
        font-weight: 600 !important;
        letter-spacing: 2px !important;
        text-transform: uppercase !important;
        transition: all 0.3s ease !important;
        display: inline-block !important;
        position: relative !important;
        overflow: hidden !important;
      }
      
      .btn-custom:hover {
        background: linear-gradient(135deg, #1e3a8a 0%, #1a1a2e 50%, #000000 100%) !important;
        color: #ffffff !important;
        transform: translateY(-2px) !important;
        box-shadow: 0 8px 25px rgba(30, 58, 138, 0.3) !important;
      }
      
      .btn-custom:before {
        content: '' !important;
        position: absolute !important;
        top: 0 !important;
        left: -100% !important;
        width: 100% !important;
        height: 100% !important;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent) !important;
        transition: left 0.5s !important;
      }
      
      .btn-custom:hover:before {
        left: 100% !important;
      }
      
      /* Fix button alignment */
      .about-btns {
        text-align: left !important;
        margin-top: 30px !important;
        padding-left: 0 !important;
        margin-left: 0 !important;
      }
      
      .btn-custom {
        text-align: center !important;
        margin: 0 !important;
        vertical-align: middle !important;
        line-height: normal !important;
        display: inline-block !important;
      }
      
      /* Ensure button aligns with text content */
      .col-md-8 .about-btns {
        padding-left: 0 !important;
        margin-left: 0 !important;
      }
    `}</style>
  );
} 
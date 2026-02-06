<template>

    <header data-elementor-type="header" data-elementor-id="10626" class="elementor elementor-10626 elementor-location-header" data-elementor-post-type="elementor_library">
        <div class="elementor-element elementor-element-12e5c54 e-con-full e-flex e-con e-parent e-lazyloaded" data-id="12e5c54" data-element_type="container" id="header-new">
            <div class="elementor-element elementor-element-6549a9c elementor-widget elementor-widget-html" data-id="6549a9c" data-element_type="widget" data-widget_type="html.default">
            <div class="elementor-widget-container">
            <header class="custom-header">
            <div class="header-top">
            <div class="container-head">
            <div class="contact-info-head">
            <a href="tel:6513009730" aria-label="Call St. Croix Trailers"><i class="fas fa-phone"></i> (651) 300-9730</a>
            <a href="mailto:sales@stcroixtrailers.com" aria-label="Email St. Croix Trailers"><i class="fas fa-envelope"></i> sales@stcroixtrailers.com</a>
            <span class="location"><i class="fas fa-map-marker-alt"></i> Stillwater, MN</span>
            </div>
            <div class="social-links">
            <a href="https://www.facebook.com/profile.php?id=61568302030883" target="_blank" aria-label="St. Croix Trailers on Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/stcroixtrailers" target="_blank" aria-label="St. Croix Trailers on Instagram"><i class="fab fa-instagram"></i></a>
            </div>
            </div>
            </div>
            <div class="header-main">
            <div class="container-head">
            <div class="logo">
            <p class="logo-text"><a href="https://stcroixtrailers.com/"><img src="https://stcroixtrailers.com/wp-content/uploads/2024/08/cropped-St-Croix-Trailers-22082024.png" width="100px"></a></p>
            </div>
            <nav aria-label="Main Navigation">
            <button class="mobile-menu-toggle" aria-label="Toggle menu">
            <i class="fas fa-bars"></i>
            </button>
            <ul>
            <li><a href="/" class="">Home</a></li>
            <li><a href="https://stcroixtrailers.com/custom-design-process/">Custom Design Process</a></li>
            <li><a href="https://stcroixtrailers.com/blog">Resources</a></li>
            <li><a href="https://stcroixtrailers.com/trailers-gallery">Trailers Gallery</a></li>
            <li><a href="https://stcroixtrailers.com/faqs">FAQs</a></li>
            <li><a href="https://stcroixtrailers.com/about-us">About Us</a></li>
            <li><a href="https://stcroixtrailers.com/contact-us">Contact</a></li>
            </ul>
            </nav>
            <a href="https://stcroixtrailers.com/get-a-quote" class="cta-button">Get Quote</a>
            <a href="https://stcroixtrailers.com/builder" class="cta-button">Builder</a>
            </div>
            </div>
            </header>				</div>
            </div>
            <div class="elementor-element elementor-element-6221528 elementor-widget elementor-widget-spacer" data-id="6221528" data-element_type="widget" data-widget_type="spacer.default">
                <div class="elementor-widget-container">
                <div class="elementor-spacer">
                <div class="elementor-spacer-inner"></div>
                </div>
                </div>
            </div>
        </div>
    </header>

</template>

<script setup>

    import { ref, onMounted, onBeforeUnmount, computed, watch , defineEmits} from 'vue'


    onMounted(()=>{
        document.addEventListener('DOMContentLoaded', function () {
		  const toggles = document.querySelectorAll('header .mobile-menu-toggle');

		  toggles.forEach(function (toggle) {
			toggle.addEventListener('click', function () {
			  const menu = this.parentElement.querySelector('ul');
			  if (menu) {
				menu.classList.toggle('show');
			  }
			});
		  });
		});
    })

</script>


<style lang="scss">


.choice-element--33 {
	width: calc( 32% - 16px );
	    margin-left: calc(0.65% + 8px);
    margin-right: calc(0.65% + 8px);
}
.choice-element {
	padding: 10px 12px 12px;
}
		@media only screen and (max-width: 1350px) {
    .choice-element--33 {
        width: calc(50% - 15px);
        margin: 0 7px 15px;
    }
}
		@media only screen and (max-width: 760px) {
    .choice-element--33 {
        width: calc(100% - 10px);
        margin: 0 5px 10px;
    }
}
		
		header.custom-header {
            background-color: white;
            box-shadow: 0 2px 15px rgba(93, 63, 211, 0.1);
            position: static;
            width: 100%;
            top: 0;
            z-index: 1000;
        }
		.container-head {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}
        
        .header-top {
            background: linear-gradient(to right, #5D3FD3, #3e277e);
            color: white;
            padding: 8px 0;
            font-size: 14px;
        }
        
        .header-top .container-head {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
       .custom-header .contact-info-head a {
            color: white;
            text-decoration: none;
            margin-right: 20px;
            transition: color 0.3s;
        }
        
        .custom-header .contact-info-head a:hover {
            color: #61CE70;
        }
        
        .custom-header .contact-info-head .location {
            color: #78BE20;
            font-weight: 600;
        }
        
        .social-links a {
            color: white;
            margin-left: 10px;
            font-size: 16px;
            transition: color 0.3s;
        }
        
        .social-links a:hover {
            color: #61CE70;
        }
        
        .header-main {
            padding: 15px 0;
            background-color: white;
        }
        
        .header-main .container-head {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .logo {
            display: flex;
            align-items: center;
        }
        
        .logo-text {
            font-family: 'Teko', sans-serif;
            font-size: 28px;
            color: #5D3FD3;
            margin: 0;
            margin-left: 10px;
            text-transform: uppercase;
            font-weight: 600;
            line-height: 1.2;
            letter-spacing: 0.5px;
        }
        
        .logo-text span {
            color: #3e277e;
        }
        
        .custom-header nav ul {
            display: flex;
            list-style: none;
                        margin: 0;
        }
        
        .custom-header nav ul li {
            margin-left: 20px;
        }
        
        .custom-header nav ul li a {
            text-decoration: none;
            color: #232323;
            font-weight: 500;
            text-transform: uppercase;
            font-size: 14px;
            transition: color 0.3s;
            letter-spacing: 0.5px;
        }
        
        .custom-header nav ul li a:hover, 
        .custom-header nav ul li a.active {
            color: #5D3FD3;
        }
        
        .cta-button {
            background: linear-gradient(to right, #5D3FD3, #3e277e);
            color: white;
            border: none;
            padding: 12px 30px;
            border-radius: 30px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
            text-transform: uppercase;
            font-size: 14px;
            letter-spacing: 1px;
            box-shadow: 0 4px 15px rgba(93, 63, 211, 0.3);
            font-family: 'Teko', sans-serif;
            font-size: 18px;
            text-decoration: none;
            display: inline-block;
        }
        
        .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(93, 63, 211, 0.4);
            background: linear-gradient(to right, #3e277e, #5D3FD3);
        }
        
        .btn-secondary {
            background: transparent;
            border: 2px solid #5D3FD3;
            color: #5D3FD3;
        }
        
        .btn-secondary:hover {
            background-color: #5D3FD3;
            color: white;
            transform: translateY(-3px);
        }
        
        .btn-white {
            background: transparent;
            border: 2px solid white;
            color: white;
        }
        
        .btn-white:hover {
            background-color: rgba(255, 255, 255, 0.1);
            transform: translateY(-3px);
        }
            /* Footer */
        footer.custom-footer {
            background: linear-gradient(to right, #3e277e, #5D3FD3);
            color: white;
            padding: 60px 0 30px;
        }
        .footer-col a {
                    color: #000;
            }
        .footer-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 40px;
            margin-bottom: 40px;
        }
        
        .footer-col h3 {
            font-size: 1.6rem;
            margin-bottom: 20px;
            color: #4f34ad;
            position: relative;
            padding-bottom: 10px;
        }
        
        .footer-col h3:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 50px;
            height: 2px;
            background-color: #61CE70;
        }
        
        .footer-links {
            list-style: none;
                    margin-left: 0;
        }
        
        .footer-links li {
            margin-bottom: 12px;
        }
        
        .footer-links a {
            color: #000;
            text-decoration: none;
            transition: color 0.3s;
        }
        
        .footer-links a:hover {
            color: #61CE70 !important;
        }
        
        .contact-info-footer {
            margin-top: 20px;
        }
        
        .contact-info-footer p {
            margin-bottom: 10px;
            display: flex;
            align-items: flex-start;
        }
        
        .contact-info-footer i {
            margin-right: 10px;
            color: #61CE70;
            min-width: 20px;
        }
        
        .social-footer {
            display: flex;
            gap: 15px;
            margin-top: 20px;
        }
        
        .social-footer a {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            background-color: rgba(255,255,255,0.1);
            border-radius: 50%;
            color: #000;
            transition: all 0.3s;
        }
        
        .social-footer a:hover {
            background-color: #61CE70;
            color: #5D3FD3;
            transform: translateY(-3px);
        }
        
        .copyright {
            text-align: center;
            padding-top: 30px;
            border-top: 1px solid rgba(255,255,255,0.1);
            font-size: 14px;
            color: #000;
        }
       
        /* Mobile Menu Toggle */
        .mobile-menu-toggle {
            display: none;
            background: none;
            border: none;
            font-size: 1.5rem;
            color: #5D3FD3;
            cursor: pointer;
            padding: 10px;
        }
        @media (max-width: 768px) {
            .mobile-menu-toggle {
                display: block;
            }
            
          .custom-header  nav ul {
                display: none;
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: white;
                flex-direction: column;
                box-shadow: 0 5px 15px rgba(0,0,0,0.1);
                z-index: 999;
            }
            
            .custom-header nav ul.show {
                display: flex;
            }
            
            .custom-header nav ul li {
                margin: 0;
                border-bottom: 1px solid #eee;
            }
            
            .custom-header nav ul li a {
                display: block;
                padding: 15px 20px;
            }
            
            .hero-new h1 {
                font-size: 3rem;
            }
            
            .hero-buttons {
                flex-direction: column;
            }
            
            .section-title h2 {
                font-size: 2.4rem;
            }
            
            .founding-content {
                flex-direction: column;
                gap: 15px;
            }
        }
         @media (max-width: 576px) {
            .header-top .container-head {
                flex-direction: column;
                gap: 10px;
            }
            
            .custom-header .contact-info-head a {
                display: block;
                margin: 5px 0;
            }
        }
		
		
.builder-page header .header-main .container-head nav + a{
	margin-left: auto;
	margin-right: 24px;
}
footer .social-footer {
	margin-left: -15px;
}
@media (max-width: 768px) {
    body #content .step-number-circle {
        left: 40px;
        top: 15px;
    }
    body #content .elementor-widget-posts .elementor-pagination {
        margin-top: 24px;
    }
    .page-id-10166 #content,
    .page-id-455 #content,
    .page-id-8140 #content,
    .page-id-893 #content,
    .page-id-9211 #content,
    .page-id-10213 #content {
        padding-top: 124px;
    }
    body #content .header-main .cta-button {
        display: block;
    }
    body #content .highlight-item i {
        width: 1.35rem;
        height: 1.35rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
@media(max-width: 576px) {
	body .custom-header .header-top .container-head {
		width: fit-content;
	}
	.home #content {
	padding-top: 60px;
}
	
	body header.custom-header .header-main.fixed {
		position: fixed;
		top: 0;
		left: 0; 
		width: 100%;
	}
    body .custom-header .container-head {
        align-items: flex-start;
    }
	header .social-links a:first-child{
		margin-left: 0;
	}
}
.contact-info-footer a {
	display: flex;
	margin-bottom: 10px;
}

.founding-content{
	flex-direction: column;
}
header .header-main .container-head nav + a {
	margin-right: -1%;
}
.header-main .container-head {
	max-width: 1240px;
}
@media (max-width: 768px) {
    header.header-main .cta-button {
        display: block;
    }
}
header .custom-header nav ul li {
	margin-left: 16px;
}
body header.custom-header .cta-button {
	padding: 10px 26px; 
	font-size: 16px;
}
@media(max-width: 1200px) {
	@media(min-width: 769px) {
		body header.custom-header .cta-button {
			font-size: 16px;
			padding: 8px 24px;
		}
		header .header-main .container-head {
			flex-wrap: wrap;
		}
		header .header-main .container-head nav {
			    order: 1;
    margin-top: 20px;
			width: 100%;
		}
		header .header-main .container-head nav ul {
			justify-content: space-between;
		}
		header .header-main .container-head nav ul a {
			font-size: 13px;
		}
		header .header-main .container-head nav ul li {
			margin-left: 16px;
		} 
		header .header-main .container-head nav + a {
			    margin-left: auto;
    margin-right: 24px;
		}
	}
}
header .header-main .container-head .mobile {
	display: none;
}
@media(max-width: 768px) {
	header .header-main .container-head {
			flex-wrap: wrap;
			position: relative;
		}
	body header.custom-header .cta-button {
    padding: 6px 12px;
    font-size: 12px;
		margin: 0;
}
	header .header-main .container-head {
		align-items: center;
	}
	header .header-main .container-head nav {
		order: 1;
	}
	header .header-main .logo img {
		width: 75px;
	}
	header .header-main .container-head .mobile {
		display: block;
	}
	#content .trust-item h3 {
		line-height: 1.1;
		margin-bottom: 0;
	}
	#content .trust-grid {
		gap: 32px;
	}
	#content .trust-item p:last-child {
		margin-bottom: 0;
	}
	#content .founding-content {
		gap: 24px;
	}
	#content .timeline-step{
		margin-bottom: 64px;
	}
	.builder-page #content header {
		display: none;
	}
	.social-footer a {
		width: 24px;
		height: 32px; 
		
	}
	footer .social-footer {
		margin-left: -6px;
	}
	.page-id-9211 .rounded-full {
		align-items: flex-start;
	}
	.page-id-9211 .rounded-full span.w-2 {
		margin-top: 0.45rem;
		min-width: 0.5rem;
	}
	#content .warranty-table-block,
	#content .warranty-points-block,
	#content .warranty-faq,
	#content .warranty-faq + section{
		padding-top: 3.5rem;
		padding-bottom: 3.5rem;
	}
	#content .warranty-top {
		padding-top: 1rem;
	}
	footer .footer-grid {
		gap: 28px;
	}
	footer .footer-links li {
		margin-bottom: 8px;
	}
	#content .refund-banner {
		padding-bottom: 0;
	}
	#content .refund-page {
		    padding-top: 0;
    margin-top: -1rem;
	}
}
.cta-button:hover,
.intro-badge:hover {
	color: #fff;
}
.social-footer a:hover {
	color: #fff;
}
a.intro-badge.cta-button:hover {
    background: var(--primary);
}





header .social-links{
	    display: flex;
    gap: 4px;
}
header .social-links a{
	    margin: 0;
    width: 28px;
    height: 28px;
    display: block;
    background: #FFFFFF1A;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .3s;
	text-decoration: none !important;
}
header .social-links a:hover {
	background-color: #fff;
}
body .hero-buttons .cta-button {
	    height: 100%;
    min-height: auto;
    line-height: 1.2;
    padding: 16px 36px;
    padding-top: 19px;
}
body .hero-buttons .cta-button.btn-white {
	padding-top: 17px;
	padding-bottom: 14px;
}


body .founding-banner {
	background: #EAE7FB;
    padding: 97px 0;
}
.founding-banner .founding-content {
	gap: 0;
}
.founding-banner .founding-counter {
	    font-size: 3rem;
    line-height: 1.2;
    margin-bottom: 20px;
}
.founding-banner .founding-counter p {
	margin-bottom: 0;
	color: #5D3FD3;
}
.founding-banner .founding-content > p {
	color: #334155;
	font-size: 1.25rem;
	margin-bottom: 2.25rem;
}
.founding-banner .founding-content .cta-button {
	    color: #5D3FD3;
    background: #fff;
    box-shadow: none;
    padding: 16px 36px 13px;
}
.page-id-6166 footer .social-footer {
	    margin-left: 0;
    gap: 8px;
}
.page-id-6166 footer .social-footer a {
	color: #fff; 
}
.page-id-6166 footer .footer-col .menu a{
	color: #FFFFFF;
}
.page-id-6166 .cta-content h2{
	color: #fff;
}
.step-content ul {
	margin-left: 0;
}
.footer-col a:hover {
	color: #5D3FD3;
}
#stc-faq-override-container {
	padding-top: 10rem;
	padding-bottom: 8rem;
}
footer .social-footer {
	    margin: 0;
    gap: 8px;
}
footer .social-footer a{
	background: #5D3FD31A;
    color: #5D3FD3;
}
footer .social-footer a:hover {
	    background: #5D3FD3;
    color: #fff;
}
.page-template-about-us #content {
	padding-top: 7.5rem;
}
.page-template-about-us .hero {
	background: #EAE7FB
}
.page-template-about-us .hero p {
	color: #000000;
}

.page-template-about-us .gallery-img-block .gallery-caption {
	padding: 20px;
}
.page-template-about-us .review-block {
	max-width: 1136px;
	width: calc( 100vw - 44px );
}
.page-template-about-us .final-cta {
	position: relative;
	padding-top: 100px;
	padding-bottom: 100px;
}
.page-template-about-us .final-cta > *:not(div) {
	position: relative;
	z-index: 1;
}
.page-template-about-us .final-cta-img {
	    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}
.page-template-about-us .final-cta-img::after {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.34);
}
.page-template-about-us .final-cta-img img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 29%;
}
.page-template-about-us .faq-link-section {
	padding: 90px 0;
	background-color: #EAE7FB;
}
.page-template-about-us .faq-link-section h3 {
	line-height: 1;
	margin-bottom: 32px;
}
.page-template-about-us .faq-link-section p {
	margin-bottom: 36px;
}
.page-template-about-us .faq-link-section .cta-button {
	background: #fff;
	color: #5D3FD3;
}
.builder-page .cta-card + .features-section {
	padding: 0;
	background: transparent;
}
.builder-page header .cta-button{
	    background: linear-gradient(to right, #5D3FD3, #3e277e);
	text-decoration: none;
}
.builder .header-top {
	    background: linear-gradient(to right, #5D3FD3, #3E277E);
}
.builder .header-top .social-links a {
	text-decoration: none;
}
#intro-section .cta-subtitle {
	margin-bottom: 0;
}
#intro-section .quick-highlights {
	margin-top: 0;
	margin-bottom: 3rem;
}
#intro-section #start-builder-btn {
	border-radius: 36px;
	    background: linear-gradient(135deg, #5D3FD3, #7A5DC7);
    color: white;
    box-shadow: 0 10px 25px -5px rgba(74, 63, 142, 0.4);
}

.elementor-9257 .elementor-element.elementor-element-018cd8b:not(.elementor-motion-effects-element-type-background) {
	background: linear-gradient(90deg, #5E40D2 0%, #3F2882 100%);

}
.elementor-9257 .elementor-element.elementor-element-bc2bd87 .elementor-heading-title {
	font-family: "Teko", sans-serif;
}
.elementor-9257 .elementor-element.elementor-element-bc2bd87 .elementor-heading-title span {
	    color: #78BE20 !important;
}
.elementor-9257 .elementor-widget-hubspot-form {
	    background: #5D3FD31A;
    padding: 60px;
}
.elementor-9257 .elementor-element-0ad9edb .e-con-inner {
	padding: 60px 0 !important;
}

.contact-info-head .location {
	display: none;
}

@media(max-width: 768px) {
	#stc-faq-override-container {
		padding-top: 7.5rem;
		padding-bottom: 6rem;
	}
}
	

</style>
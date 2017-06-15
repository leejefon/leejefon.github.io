/*
 * Home
 *
 * @author: Jeff Lee
 * @createdAt: 2017/06/14
 */

import React, { Component } from 'react';
import App from './App';

class Home extends Component {
  componentDidMount() {
    $(window)
      .on('load', () => {
        // Animation on Page Loading
        $('.preloader').fadeOut('slow');

        // initializing page transition.
        const ptPage = $('.subpages');
        if (ptPage[0]) {
          PageTransitions.init({
            menu: 'ul.site-main-menu'
          });
        }

        // Custom Subpage Scroll
        $('.pt-page').mCustomScrollbar({
          scrollInertia: 8
        });

        // Custom Header Scroll
        $('#site_header').mCustomScrollbar({
          scrollInertia: 8
        });
      })
      .on('resize', () => {
        this.mobileMenuHide();
      });

      $(document).on('ready', () => {
        // Initialize Portfolio grid
        const $portfolio_container = $('#portfolio-grid');

        $portfolio_container.imagesLoaded(() => {
          setTimeout(() => {
            this.portfolio_init();
          }, 500);
        });

        // Portfolio hover effect init
        $('#portfolio_grid > figure > a').each(function x() { $(this).hoverdir(); });

        // Mobile menu
        $('.menu-toggle').on('click', () => {
          $('#site_header').toggleClass('mobile-menu-hide');
        });

        // Mobile menu hide on main menu item click
        $('.site-main-menu').on('click', 'a', () => {
          this.mobileMenuHide();
        });

        // Testimonials Slider
        $('.testimonials.owl-carousel').owlCarousel({
          nav: true, // Show next/prev buttons.
          items: 3, // The number of items you want to see on the screen.
          loop: false, // Infinity loop. Duplicate last and first items to get loop illusion.
          navText: false,
          margin: 10,
          responsive: {
            // breakpoint from 0 up
            0: {
              items: 1
            },
            // breakpoint from 480 up
            480: {
              items: 1
            },
            // breakpoint from 768 up
            768: {
              items: 2
            },
            1200: {
              items: 3
            }
          }
        });

        // Text rotation
        $('.text-rotation').owlCarousel({
          loop: true,
          dots: false,
          nav: false,
          margin: 10,
          items: 1,
          autoplay: true,
          autoplayHoverPause: false,
          autoplayTimeout: 3800,
          animateOut: 'zoomOut',
          animateIn: 'zoomIn'
        });

        // Lightbox init
        $('.lightbox').magnificPopup({
          type: 'image',
          removalDelay: 300,

          // Class that is added to popup wrapper and background
          // make it unique to apply your CSS animations just to this exact popup
          mainClass: 'mfp-fade',
          image: {
            // options for image content type
            titleSrc: 'title',
            gallery: {
              enabled: true
            }
          },

          iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                      '<div class="mfp-close"></div>' +
                      '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                      '<div class="mfp-title mfp-bottom-iframe-title"></div>' +
                    '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

            patterns: {
              youtube: {
                index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

                id: 'v=', // String that splits URL in a two parts, second part should be %id%
                          // Or null - full URL will be returned
                          // Or a function that should return %id%, for example:
                          // id: function(url) { return 'parsed id'; }

                src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
              },
              vimeo: {
                index: 'vimeo.com/',
                id: '/',
                src: '//player.vimeo.com/video/%id%?autoplay=1'
              },
              gmaps: {
                index: '//maps.google.',
                src: '%id%&output=embed'
              }
            },

            srcAction: 'iframe_src' // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
          },

          callbacks: {
            markupParse: (template, values, item) => {
              values.title = item.el.attr('title');
            }
          }
        });

        $('.ajax-page-load-link').magnificPopup({
          type: 'ajax',
          removalDelay: 300,
          mainClass: 'mfp-fade',
          gallery: {
            enabled: true
          }
        });

        $('.tilt-effect').tilt({

        });
      });
  }

  mobileMenuHide() {
    const windowWidth = $(window).width();
    if (windowWidth < 1024) {
      $('#site_header').addClass('mobile-menu-hide');
    }
  }

  portfolio_init() {
    const portfolioGrid = $('#portfolio_grid');
    const portfolioFilter = $('#portfolio_filters');

    if (portfolioGrid) {
      portfolioGrid.shuffle({
        speed: 450,
        itemSelector: 'figure'
      });

      $('.site-main-menu').on('click', 'a', () => {
        portfolioGrid.shuffle('update');
      });

      portfolioFilter.on('click', '.filter', function x(e) {
        portfolioGrid.shuffle('update');
        e.preventDefault();
        $('#portfolio_filters .filter').parent().removeClass('active');
        $(this).parent().addClass('active');
        portfolioGrid.shuffle('shuffle', $(this).attr('data-group'));
      });
    }
  }

  render() {
    return (
      <App>
        <section className="pt-page pt-page-1 section-without-bg section-paddings-0 table" data-id="home">
          <div className="section-inner">
            <div className="home-page-block">
              <h2>Jeff Lee</h2>
              <div className="owl-carousel text-rotation">
                <div className="item">
                  <p className="home-page-description">Software Engineer</p>
                </div>
                <div className="item">
                  <p className="home-page-description">Backend Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </App>
    );
  }
}

export default Home;

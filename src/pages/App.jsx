/*
 * App
 *
 * @author: Jeff Lee
 * @createdAt: 2017/06/14
 */

import React, { Component } from 'react';
import Nav from '../components/Nav';

import '../css/main.scss';

class App extends Component {
  componentDidMount() {
    $(window)
      .on('load', () => {
        // Animation on Page Loading
        $('.preloader').fadeOut('slow');
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
      });
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
      <div id="page" className="page">
        <Nav />

        <div id="main" className="site-main">
          <div className="pt-wrapper" style={{ backgroundImage: 'url(images/main_bg_light.jpg)' }}>
            <div className="subpages">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

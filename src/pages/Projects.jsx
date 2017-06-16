/*
 * Projects
 *
 * @author: Jeff Lee
 * @createdAt: 2017/06/15
 */

import React, { Component } from 'react';
import App from './App';

class Projects extends Component {
  componentDidMount() {
    $('.pt-page').addClass('pt-page-current');
    $('.pt-page').mCustomScrollbar({
      scrollInertia: 8
    });

    // Initialize Portfolio grid
    $('#portfolio-grid').imagesLoaded(() => {
      setTimeout(() => {
        this.portfolioInit();
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
  }

  componentWillUnmount() {
    $('.pt-page').removeClass('pt-page-current');
  }

  portfolioInit() {
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
        <section className="pt-page pt-page-4" data-id="portfolio">
          <div className="border-block-top-110" />
          <div className="section-inner">
            <div className="section-title-block">
              <div className="section-title-wrapper">
                <h2 className="section-title">Portfolio</h2>
                <h5 className="section-description">My Best Works</h5>
              </div>
            </div>

            <div className="portfolio-content">
              <ul id="portfolio_filters" className="portfolio-filters">
                <li className="active">
                  <a className="filter btn btn-sm btn-link active" data-group="all">All</a>
                </li>
                <li>
                  <a className="filter btn btn-sm btn-link" data-group="media">Media</a>
                </li>
                <li>
                  <a className="filter btn btn-sm btn-link" data-group="illustration">Illustration</a>
                </li>
                <li>
                  <a className="filter btn btn-sm btn-link" data-group="video">Video</a>
                </li>
              </ul>

              <div id="portfolio_grid" className="portfolio-grid portfolio-masonry masonry-grid-3">
                <figure className="item" data-groups='["all", "media"]'>
                  <a className="ajax-page-load" href="portfolio-1.html">
                    <img src="images/portfolio/1.jpg" alt="" />
                    <div>
                      <h5 className="name">Project Name</h5>
                      <small>Media</small>
                      <i className="pe-7s-icon pe-7s-display2" />
                    </div>
                  </a>
                </figure>

                <figure className="item" data-groups='["all", "video"]'>
                  <a href="https://player.vimeo.com/video/97102654?autoplay=1" title="Praesent Dolor Ex" className="lightbox mfp-iframe">
                    <img src="images/portfolio/2.jpg" alt="" />
                    <div>
                      <h5 className="name">Project Name</h5>
                      <small>Video</small>
                      <i className="pe-7s-icon pe-7s-video" />
                    </div>
                  </a>
                </figure>

                <figure className="item" data-groups='["all","illustration"]'>
                  <a href="images/portfolio/full/3.jpg" className="lightbox" title="Duis Eu Eros Viverra">
                    <img src="images/portfolio/3.jpg" alt="" />
                    <div>
                      <h5 className="name">Project Name</h5>
                      <small>Illustration</small>
                      <i className="pe-7s-icon pe-7s-photo" />
                    </div>
                  </a>
                </figure>

                <figure className="item" data-groups='["all", "media"]'>
                  <a className="ajax-page-load" href="portfolio-2.html">
                    <img src="images/portfolio/4.jpg" alt="" />
                    <div>
                      <h5 className="name">Project Name</h5>
                      <small>Media</small>
                      <i className="pe-7s-icon pe-7s-display2" />
                    </div>
                  </a>
                </figure>

                <figure className="item" data-groups='["all", "illustration"]'>
                  <a href="images/portfolio/full/5.jpg" className="lightbox" title="Aliquam Condimentum Magna Rhoncus">
                    <img src="images/portfolio/5.jpg" alt="" />
                    <div>
                      <h5 className="name">Project Name</h5>
                      <small>Illustration</small>
                      <i className="pe-7s-icon pe-7s-photo" />
                    </div>
                  </a>
                </figure>

                <figure className="item" data-groups='["all", "media"]'>
                  <a className="ajax-page-load" href="portfolio-3.html">
                    <img src="images/portfolio/6.jpg" alt="" />
                    <div>
                      <h5 className="name">Project Name</h5>
                      <small>Media</small>
                      <i className="pe-7s-icon pe-7s-display2" />
                    </div>
                  </a>
                </figure>

                <figure className="item" data-groups='["all", "video"]'>
                  <a href="https://player.vimeo.com/video/97102654?autoplay=1" title="Nulla Facilisi" className="lightbox mfp-iframe">
                    <img src="images/portfolio/7.jpg" alt="" />
                    <div>
                      <h5 className="name">Project Name</h5>
                      <small>Video</small>
                      <i className="pe-7s-icon pe-7s-video" />
                    </div>
                  </a>
                </figure>

                <figure className="item" data-groups='["all",  "media"]'>
                  <a className="ajax-page-load" href="portfolio-4.html">
                    <img src="images/portfolio/8.jpg" alt="" />
                    <div>
                      <h5 className="name">Project Name</h5>
                      <small>Media</small>
                      <i className="pe-7s-icon pe-7s-display2" />
                    </div>
                  </a>
                </figure>

                <figure className="item" data-groups='["all","illustration"]'>
                  <a href="images/portfolio/full/9.jpg" className="lightbox" title="Mauris Neque Dolor">
                    <img src="images/portfolio/9.jpg" alt="" />
                    <div>
                      <h5 className="name">Project Name</h5>
                      <small>Illustration</small>
                      <i className="pe-7s-icon pe-7s-photo" />
                    </div>
                  </a>
                </figure>

                <figure className="item" data-groups='["all", "video"]'>
                  <a href="https://player.vimeo.com/video/97102654?autoplay=1" title="Donec Lectus Arcu" className="lightbox mfp-iframe">
                    <img src="images/portfolio/10.jpg" alt="" />
                    <div>
                      <h5 className="name">Project Name</h5>
                      <small>Video</small>
                      <i className="pe-7s-icon pe-7s-video" />
                    </div>
                  </a>
                </figure>

                <figure className="item" data-groups='["all","illustration"]'>
                  <a href="images/portfolio/full/11.jpg" className="lightbox" title="Duis Eu Eros Viverra">
                    <img src="images/portfolio/11.jpg" alt="" />
                    <div>
                      <h5 className="name">Project Name</h5>
                      <small>Illustration</small>
                      <i className="pe-7s-icon pe-7s-photo" />
                    </div>
                  </a>
                </figure>

                <figure className="item" data-groups='["all","media"]'>
                  <a className="ajax-page-load" href="portfolio-5.html">
                    <img src="images/portfolio/12.jpg" alt="" />
                    <div>
                      <h5 className="name">Project Name</h5>
                      <small>Media</small>
                      <i className="pe-7s-icon pe-7s-display2" />
                    </div>
                  </a>
                </figure>
              </div>
            </div>
          </div>
        </section>
      </App>
    );
  }
}

export default Projects;

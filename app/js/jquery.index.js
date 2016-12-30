"use strict";

( function () {

  $( function() {

    $.each( $( '.site__footer-scroll' ), function() {

      new  Scroll ( $( this ) );

    } );

      $.each( $( '.promo__swiper' ), function() {

          new PromoGallery ( $( this ) );

      } );

  } );


  var Scroll = function ( obj ) {

    //private properties
    var _self = this,
        _btn = obj,
        _html = $('body,html');

    //private methods
    var _constructor = function () {

           _onEvents();

        },
    _onEvents = function () {

        _btn.on ( {
            click: function () {

             _scrollToTop();

            }
        } );

    },
    _scrollToTop = function () {

      _html.animate({
                 			scrollTop: 0
             				}, 400);

    }


    _constructor ();

  };

    var PromoGallery = function( obj ) {

        //private properties
        var _self = this,
            _obj = obj,
            _swiper;

        //private methods
        var _addEvents = function() {



            },
            _initSwiper = function() {

                _swiper = new Swiper( _obj, {
                    loop: true,
                    pagination: '.swiper-pagination',
                    autoplay: 5000,
                    speed: 600,
                    autoplayDisableOnInteraction: false
                });

            },
            _init = function() {
                _obj[ 0 ].obj = _self;
                _addEvents();
                _initSwiper();
            };

        _init();
    };

} ) ();

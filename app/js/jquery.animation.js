( function() {
    "use strict";

    $( function() {

        $.each( $( '.slides' ), function() {
            new Slides ( $( this ) );
        } );

    });

    $( function() {

        $.each( $( '.news' ), function() {
            new Anim ( $( this ) );
        } );

    });

    var Slides = function ( obj ) {

        //private properties
        var _self = this,
            _obj = obj,
            _window = $( window );

        //private methods
        var _onEvents = function () {
                _window.on({
                    scroll: function () {

                        _checkScroll();

                    }
                });
            },
            _checkScroll = function(){

                var windowH = _window.height();

                _obj.each(function () {

                    var curItem = $(this),
                        topPos = _obj.offset().top;

                    if( _window.scrollTop() > (topPos - windowH/1.8) && !curItem.hasClass( 'animation' ) ){

                        curItem.addClass( 'animation' );

                    }
                })
            },
            _init = function () {
                _obj[0].slides = _self;
                _onEvents();
                _checkScroll();
            };

        //public properties

        //public methods

        _init();
    };

    var Anim = function ( obj ) {

        //private properties
        var _self = this,
            _news = obj,
            _item = _news.find( '.news__item' ),
            _window = $( window );

        //private methods
        var _onEvents = function () {
                _window.on({
                    scroll: function () {

                        _checkScroll();

                    }
                });
            },
            _checkScroll = function(){

                var windowH = _window.height(),

                    topPos = _news.offset().top-windowH+60;

                if( _window.scrollTop() > topPos ){
                    
                    _item.addClass('animation');

                }

            },
            _init = function () {
                _onEvents();
                _checkScroll();
            };

        //public properties

        //public methods

        _init();
    };
} )();

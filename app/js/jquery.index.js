"use strict";

( function () {

  $( function() {

    $.each( $( '.site__footer-scroll' ), function() {
       
      new  Scroll ( $( this ) );
       
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
  
  }
 
} ) ();

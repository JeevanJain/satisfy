/*
 * Satisfy theme customize script
 */

jQuery(function ( $ ) {
    'use strict';

    if ( window.wp ) {
        var hero = $( '#site-hero .cover-img' );

        if ( hero.length && hero.get( 0 ).style.minHeight ) {
            hero.append(
                '<div style="position:absolute;bottom:0;right:5px;color:#fff;font-size:14px;">(height: ' + parseInt( hero.get( 0 ).style.minHeight ) + 'vh)</div>'
            );
        }
    }
});

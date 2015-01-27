(function() {
  'use strict';

  /**
   * @ngdoc service
   * @name optimizeApp.directive:twitterTimeline
   *
   * @requires jQuery
   *
   * @description
   * Directive for twitter timeline elements
   *
   *
   *
   * @example
   * ```html
   *
   *    <div twitter-timeline="559276129027371009" auto-resize="true" data-tweet-limit="5">
   *    Loading tweets...
   *    </div>
   *
   *
   *
   * ```
   */
  angular.module('optimizeApp')
    .directive('twitterTimeline', function() {
      return {
        restrict: 'A',
        scope: {
          cssUrl: '@',
          autoResize: '='
        },
        link: function(scope, element, attrs) {
          $('body').removeAttr('data-twttr-rendered');

          element
            .attr('id', 'twitter-feed')
            .attr('width', '100%' || attrs.width)
            .attr('data-chrome', 'noheader transparent')
            .attr('data-widget-id', attrs.twitterTimeline)
            .addClass('twitter-timeline');

          /**
           * @ngdoc method
           * @name render
           * @methodOf optimizeApp.directive:twitterTimeline
           *
           * @description
           * render the twitter data inside html element
           *
           *
           */
          function render() {
            var body = $('.twitter-timeline').contents().find('body');

            if (scope.cssUrl) {
              body.append($('<link/>', {
                rel: 'stylesheet',
                href: scope.cssUrl,
                type: 'text/css'
              }));
            }

            function setHeight() {
              if (body.find('.stream').length === 0) {
                setTimeout(setHeight, 100);
              } else {
                body.find('.stream').addClass('stream-new').removeClass('stream').css('height', 'auto');
                $('.twitter-timeline').css('height', (body.height() + 20) + 'px');
              }
            }

            if (scope.autoResize) {
              setHeight();
            }
          }

          if (!$('#twitter-wjs').length) {
            $.getScript((/^http:/.test(document.location) ? 'http' : 'https') + '://platform.twitter.com/widgets.js', function() {
              render();
              $('.twitter-timeline').load(render);
            });
          }
        }
      };
    });
}());
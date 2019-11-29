(function($) {
    "use strict"
    $(function() {

        function startAnimationBlocks() {
            var blockItems = $('.is--animate-block')
            blockItems.each(function() {
                var thisBlock = $(this)
                var thisAnim = $(this).data('animname')
                var thisDelay = $(this).data('animdelay')

                if($(this).visible(true) && !$(this).hasClass('is--finish')) {
                    thisBlock
                        .addClass('animated')
                        .addClass(thisAnim)
                        .css({
                            "-webkit-animation-delay": thisDelay + 's',
                            "-moz-animation-delay": thisDelay + 's',
                            "-o-animation-delay": thisDelay + 's',
                            "animation-delay": thisDelay + 's'
                        })
                }
            })
        }

        startAnimationBlocks()

        $(document).scroll(function() {
            startAnimationBlocks()
        })

    })
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHN0YXJ0QW5pbWF0aW9uQmxvY2tzKCkge1xyXG4gICAgICAgICAgICB2YXIgYmxvY2tJdGVtcyA9ICQoJy5pcy0tYW5pbWF0ZS1ibG9jaycpXHJcbiAgICAgICAgICAgIGJsb2NrSXRlbXMuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0aGlzQmxvY2sgPSAkKHRoaXMpXHJcbiAgICAgICAgICAgICAgICB2YXIgdGhpc0FuaW0gPSAkKHRoaXMpLmRhdGEoJ2FuaW1uYW1lJylcclxuICAgICAgICAgICAgICAgIHZhciB0aGlzRGVsYXkgPSAkKHRoaXMpLmRhdGEoJ2FuaW1kZWxheScpXHJcblxyXG4gICAgICAgICAgICAgICAgaWYoJCh0aGlzKS52aXNpYmxlKHRydWUpICYmICEkKHRoaXMpLmhhc0NsYXNzKCdpcy0tZmluaXNoJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzQmxvY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdhbmltYXRlZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcyh0aGlzQW5pbSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi13ZWJraXQtYW5pbWF0aW9uLWRlbGF5XCI6IHRoaXNEZWxheSArICdzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLW1vei1hbmltYXRpb24tZGVsYXlcIjogdGhpc0RlbGF5ICsgJ3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCItby1hbmltYXRpb24tZGVsYXlcIjogdGhpc0RlbGF5ICsgJ3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbmltYXRpb24tZGVsYXlcIjogdGhpc0RlbGF5ICsgJ3MnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGFydEFuaW1hdGlvbkJsb2NrcygpXHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc3RhcnRBbmltYXRpb25CbG9ja3MoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiXX0=

"use strict";
$(document).ready(function () {
    renderImages();
});
var sendMail = function () {
    var link = 'mailto:test@test.com?subject=' +
                   $("input[name='first_name']").val() + '&body=' + $("input[name='last_name']").val();
    window.location.href = link;

},
renderImages = function () {
    $.get('img/ImageList.txt', function (data) {
        var lines = data.split('\n');
        for (var iCount = 0; iCount < lines.length; iCount++) {
            var item = 'img/DilSePhotoshoot/' + lines[iCount];
            var portfolioGallery = '<div class="col-lg-4 col-sm-6">'
                + '<a href="{0}" class="portfolio-box">'
                   + '<img src="{1}" class="img-responsive" alt="">'
                   + '<div class="portfolio-box-caption">'
                     + '<div class="portfolio-box-caption-content">'
                           + '<div class="project-category text-faded">'
                           + '</div>'
                           + ' <div class="project-name">'
                           + '</div>'
                        + '</div>'
                   + '</div>'
               + ' </a>'
            + '</div>';
            $("#dilseGallery").append(portfolioGallery.replace("{0}", item).replace("{1}", item));
        }
        $.getScript('//cdnjs.cloudflare.com/ajax/libs/jquery.lazyload/1.9.1/jquery.lazyload.min.js', function () {
            $('#portfolio .img-responsive').lazyload({
            });
        });
    });
};

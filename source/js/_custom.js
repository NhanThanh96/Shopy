$(document).ready(function() {
  // price filter
  $(".js-price-range").slider({
    tooltip: 'always'
  });

  // scrollbar
  function makeScrollbar(element){
    if($(element).length > 0) {
      new PerfectScrollbar(element, {
        wheelPropagation: false
      });
    }
  }

  makeScrollbar(".js-cart-dropdown-scrollbar");

  // decrease/increase quantity product

  $('.js-quantity-increase').on('click', function(){
    var currentVal = parseInt($(this).next('input').val());

    $(this).next("input").val(currentVal + 1);
  });

  $('.js-quantity-decrease').on('click', function(){
    var currentVal = parseInt($(this).prev('input').val());

    if(currentVal >= 1) $(this).prev("input").val(currentVal - 1);
  });

  // make slide carousel
  $('.js-new-product-carousel').slick({
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  });   

  $('.js-related-product-carousel').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
        }
      }
    ]
  });

  $('.js-multiple-row-product').slick({
    dots: true,
    infinite: true,
    slidesPerRow: 3,
    rows: 3,
    autoplay: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
        arrows: false,
        slidesPerRow: 2,
        rows: 3,
        dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
        arrows: false,
        slidesPerRow: 1,
        rows: 1,
        dots: false
        }
      }
    ]
  });
});

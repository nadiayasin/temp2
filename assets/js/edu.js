$('.slideHeighlight').owlCarousel({
  
  items:1,
  loop:true,
  merge:true,
  rtl: true,
  margin: 10,
  nav: true,
  loop: false,
  autoplay:false,
  singleItem: true,
  video: true,
  lazyLoad:true,
  center:true,
  responsive: {
    480:{
      items:2
  },
  600:{
      items:4
  }

  }
   });

        $(document).on('click', '.slideHeighlight', function () {
       if ($(this).next().hasClass('item-video')) {
        $(this).find(" video").play();
       }
  });

/*------------------------------------------ */


  $('.btn-secondary').first().addClass('active');

  $('.btn-secondary').click(function(){
    var $this = $(this);
    $siblings = $this.parent().children(),
    position = $siblings.index($this);
    console.log (position);
    
    $(' .content div').removeClass('active').eq(position).addClass('active');
    
    $siblings.removeClass('active');
    $this.addClass('active');
  })

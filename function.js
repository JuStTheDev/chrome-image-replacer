chrome.storage.sync.get('state', function(data) {
  if (data.state == 'off') {
    return;
  }
  else {
    $("img").click( function(event){
      event.preventDefault();
      if ($(this).hasClass('ir-processed')) {
        this.src = '';
        this.src = $(this).data('ir-original-src');
        $(this).removeClass('ir-processed');
      }
      else {
        var width = this.naturalWidth;
        var height = this.naturalHeight;
        if (!(width > 1) || !(height > 1) ) {
            return false;
        }
        var theme = (this.alt == '') ? '' : '/' + this.alt;
        var random = Math.floor(Math.random() * Math.floor(1000));
        var url = 'https://picsum.photos/' + width + '/' + height + '/?' + random;
        $(this).data('ir-original-src',this.src);
        $(this).addClass('ir-processed');
        this.src = url;
      }


      return false;
    });

    $(window).load(function () {
      $('img').each(function () {
        $(this).data('ir-original-src',this.src);
        var width = this.naturalWidth;
        var height = this.naturalHeight;
        if (!(width > 1) || !(height > 1) ) {
          return;
        }
        var theme = (this.alt == '') ? '' : '/' + this.alt;
        var random = Math.floor(Math.random() * Math.floor(1000));
        var url = 'https://picsum.photos/' + width + '/' + height + '/?' + random;
        $(this).addClass('ir-processed');
        this.src = url;
	$('picture source').remove();
      });
    });
  }
});


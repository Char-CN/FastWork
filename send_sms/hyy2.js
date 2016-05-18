var page = require('webpage').create();
//console.log('The default user agent is ' + page.settings.userAgent);
page.settings.userAgent = 'SpecialAgent';
page.open('https://www.hdfax.com/snow/invitation/reward/156******08/8a81810f549988a501549f6118981010', function(status) {
  if (status !== 'success') {
    console.log('Unable to access network');
    phantom.exit();
  }
  var code = page.evaluate(function() {
    $("#phoneNo").val('15618194808');
    code = $("#captcha-img")[0].src;
    return code;
  });
  console.log(code);
  page.render('hyy2.png');
  
  var images = page.evaluate(function() {
    var images = [];
    function getImgDimensions($i) {
      return {
        top : $i.offset().top,
        left : $i.offset().left,
        width : $i.width(),
        height : $i.height()
      }
    }
    $('.get_reward_down img').each(function() {
      var img = getImgDimensions($(this));
      images.push(img);
    });

    return images;
  });

  images.forEach(function(imageObj, index, array){
    page.clipRect = imageObj;
    page.render('images/'+index+'.png') 
  });
  
  phantom.exit();
});

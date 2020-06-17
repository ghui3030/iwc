$(function(){
  var bodyHeight=$('body').height();
  var footerHeight=$('.footer').height();
  var scrollHeight=bodyHeight-footerHeight;
  // console.log(scrollHeight);
  $(document).scroll(function(){
    var docTop=$(document).scrollTop();
    if(docTop>=scrollHeight){
      $('#link_top>a').addClass('active');
      $('#link_top').addClass('active').css('right','30%').css('top','97%');
      $('.header>.content1').slideup(300);
    }else if(docTop>=80){
      $('#link_top>a').removeClass('active');
      $('#link_top').addClass('active').css('right','0').css('top','80%');
      $('.header>.content1').slideUp(300);
    }else{
      $('#link_top').removeClass('active');
      $('.header>.content1').slideDown(300);
    }
  });
});
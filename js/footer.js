$(function(){
  $('#footer_nat').change(function(){
    var tmp=$(this).val();
    if(tmp=="ko"){
      $('#phone').text('+82 2 3440 5876');
    }else if(tmp=="us"){
      $('#phone').text('+81 1 1234 5678');
    }else if(tmp=="ch"){
      $('#phone').text('+80 2 2345 6789');
    }else if(tmp=="uk"){
      $('#phone').text('+79 3 3456 7890');
    }else if(tmp=="aus"){
      $('#phone').text('+61 1800 870 830');
    }
  });
});
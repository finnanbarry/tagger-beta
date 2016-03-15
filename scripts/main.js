function progressStatus(vr) {
    document.getElementById("progress").style.width = (vr + "%");
};

function replaceR(boo){
  var span    = document.getElementById('quota');
  var spanCon = span.textContent;
  var spanInt = spanCon.replace ( /[^\d.]/g, '' );
  if (boo === true) {
    var spanVal    = parseInt(spanInt) + 1;
  } else if (boo === false){
    var spanVal    = parseInt(spanInt) - 1;
  }
  span.innerHTML = spanVal;

  var prog = (spanVal * 4);
  document.getElementById("progress").style.width = (prog + "%");
};

function noteGet() {
  var achieve = document.getElementById('test-achieve');
  achieve.style.right = '0';
}



$(document).ready(function(){

  $('.test-score-button-add').click(function(){
    replaceR(true);
    console.log('Add');
  });

  $('.test-score-button-sub').click(function(){
    replaceR(false);
    console.log('Sub');
  });

  $('.note-close').click(function(){
    $(this).parent().parent().fadeOut(200);
  });

});

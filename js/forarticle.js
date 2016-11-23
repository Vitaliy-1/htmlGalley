



/* Bootstrap intra-article navigation */

$('#myAffix').affix({
  offset: {
    top: 400,
    bottom: function () {
      return (this.bottom = $('.ref-list').outerHeight(true))
    }
  }
});

/* Bootstrap tabs */

$('#myTabs a:first').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
});

$('#myTabs li:eq(2) a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
});

$('#myTabs li:eq(1) a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
});

/* Clone figures for tabs */

$("div.row.tab-content").append("<div class='col-lg-8 col-md-8 col-sm-12 col-xs-12 tab-pane fade' id='figuresdata'></div>")

$(document).ready(function(){
    $("div.figure-wrap").each(function(){
        $(this).clone().appendTo("#figuresdata");
    });
});


/* Hide inra-navigation on figures click */

$("a[href='#figuresdata']").click(function() {
  $("#myAffix").css("display","none");
});

/* Reference pop-ups */


$(function () {
  $('[class="ref-tip"]').tooltip()
})


var bibArr = jQuery.makeArray(document.getElementsByClassName("bib"));

for (var i = 0; i < bibArr.length; i++) {
	bibArr[i] = bibArr[i].innerText;
    var p = i + 1;
	$("[rid='bib" + p + "']").attr("title", bibArr[i]);
}



/*
bibArr[0] = bibArr[0].innerText;
$("[reference=1]")[0].setAttribute("title", bibArr[0]);

bibArr[1] = bibArr[1].innerText;
$("[reference=2]")[0].setAttribute("title", bibArr[1]);
*/
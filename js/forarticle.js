



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

/*

$(function () {
  $('[class="ref-tip"]').tooltip()
})


var bibArr = jQuery.makeArray(document.getElementsByClassName("bib"));

for (var i = 0; i < bibArr.length; i++) {
	bibArr[i] = bibArr[i].innerText;
      var p = i + 1;
  	$("[rid='bib" + p + "']").attr("title", bibArr[i]);
}

*/

$(function () {
  $('[class="ref-tip btn btn-default"]').popover()
});

/*
$("button.ref-tip.btn.btn-default").attr("data-placement", "top");

var myText = $("span.bib#bib1").html();

$(myText).appendTo("body");
*/
$('[class="ref-tip btn btn-default"]').attr("data-placement", "top")

var refAuth = jQuery.makeArray(document.getElementsByClassName("ref-auth"));
var refTitle = jQuery.makeArray(document.getElementsByClassName("ref-title"));
var refSource = jQuery.makeArray(document.getElementsByClassName("ref-source"));
var refInfo = jQuery.makeArray(document.getElementsByClassName("ref-info"));
var refFullText = jQuery.makeArray(document.getElementsByClassName("ref-full"));

for (var i = 0; i < refAuth.length; i++) {
  refAuth[i] = refAuth[i].innerHTML;
  refTitle[i] = refTitle[i].innerHTML;
  refSource[i] = refSource[i].innerHTML;
  refInfo[i] = refInfo[i].innerHTML;
  refFullText[i] = refFullText[i].interHTML;
};
  
for (var i = 0; i < refAuth.length; i++) {
    output = [refAuth[i] + refSource[i] + refInfo[i]];
    for (var s = 0; s < output.length; s++) {
     var p = i + 1;
    $("[rid='bib" + p + "']").attr("data-content", output);
    }
};
 
for (var i = 0; i < refTitle.length; i++) {
      var p = i + 1;
    $("[rid='bib" + p + "']").attr("title", refTitle[i]);
}



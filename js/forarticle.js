



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
  $("#myAffix").css("visibility","hidden");
});

$("a[href='#article']").click(function() {
  $("#myAffix").css("visibility","visible");
});

/* Reference pop-ups */


$(function () {
  $('[class="ref-tip btn btn-info"]').popover()
});


$('[class="ref-tip btn btn-info"]').attr("data-placement", "top");
$('[class="ref-tip btn btn-info"]').attr("tabindex", "0");
$('[class="ref-tip btn btn-info"]').attr("role", "button");
$('[class="ref-tip btn btn-info"]').attr("data-trigger", "hover");




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
  refFullText[i] = refFullText[i].innerHTML;
};
  
for (var i = 0; i < refAuth.length; i++) {
    output = [refAuth[i] + ' ' + refSource[i] + ' ' + refInfo[i]];
    for (var s = 0; s < output.length; s++) {
     var p = i + 1;
    $("[rid='bib" + p + "']").attr("data-content", output);
    }
};
 
for (var i = 0; i < refTitle.length; i++) {
      var p = i + 1;
    $("[rid='bib" + p + "']").attr("title", refTitle[i]);
};



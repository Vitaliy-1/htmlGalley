



/* Bootstrap intra-article navigation */

$("nav.bs-docs-sidebar").prepend("<ul class='nav nav-tabs bs-docs-sidenav' id='navblock' role='tablist'></ul>");

$("div.article-content h2").each(function(i) {
    var current = $(this);
    current.attr("id", "title" + i);
    $(".nav.bs-docs-sidenav").append("<li><a id='link" + i + "' href='#title" + i + "'class='" + current.prop("tagName") + "'>" + 
        current.html() + "</a></li>");
});


$('#myAffix').affix({
  offset: {
    top: function () {
      return (this.top = $('#title0').outerWidth(true))
    },
    bottom: function () {
      return (this.bottom = $('h2.title:last').outerHeight(true))
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

$("div.row.tab-content").append("<div class='col-lg-7 col-md-7 col-sm-12 col-xs-12 tab-pane fade' id='figuresdata'></div>")

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
  refTitle[i] = refTitle[i].innerHTML;
  refFullText[i] = refFullText[i].innerHTML;
};
  
for (var i = 0; i < refAuth.length; i++) {
    output = [refAuth[i].innerHTML + ' ' + refSource[i].innerHTML];
    for (var s = 0; s < output.length; s++) {
    $("[rid='bib" + (i + 1) + "']").attr("data-content", output);
    }
};
 
for (var i = 0; i < refTitle.length; i++) {
      var p = i + 1;
    $("[rid='bib" + p + "']").attr("title", refTitle[i]);
};

/* Author popover */
$("[ref='aff1'").hover(function(){
        $("[iid='aff1']").show();
      },
      function() {
        $("[iid='aff1']").hide();
      
    });


/* Tables */

$('table').attr("class", "table table-striped table-bordered");


/* Collapseble menu. Disable on desktop */

function refresh() {
   ww = $(window).width();
   var w =  ww<limit ? (location.reload(true)) :  ( ww>limit ? (location.reload(true)) : ww=limit );
}

(function (p) {
  if ($(window).width() <= 974) {
    $("div.article-text").attr({
      id: "accordion",
      role: "tablist",
      "aria-multiselectable": "true",
      class: "article-text panel-group"
    });

    $("div.front").attr("class", "front panel panel-default");

    $("div.panwrap").each(function(i) {
    $(this).attr("class", "panwrap panel panel-default")
    });

    $("h2.title").each(function() {
    $(this).attr("class", "title panel-title collapsed")
    });

    $("div.section").each(function(i) {
    $(this).attr("href", "#collapse" + i)
    });

    $("div.forpan").each(function(i) {
    $(this).attr("id", "collapse" + i)
      if (i==0) {
        $(this).attr("class", "forpan panel-collapse collapse in")
        } else {$(this).attr("class", "forpan panel-collapse collapse")}
      });


    $("div.section").each(function(i) {
      if (i==0) {
        $(this).attr("aria-expanded", "true")
        } else {$(this).attr("aria-expanded", "false")}
      });

    $("div.section").each(function(i) {
      $(this).attr({
        id: "s" + i,
        role: "button",
        "data-toggle": "collapse",
        "data-parent": "#accordion",
    });
      if (i==0) {
        $(this).attr("class", "section abstract panel-heading")
        } else {$(this).attr("class", "section panel-heading")}
    });
    
  } else {return false}
})(jQuery); //end of if 
  
var ww = $(window).width();
var limit = 974;

var tOut;
$(window).resize(function() {
    var resW = $(window).width();
    clearTimeout(tOut);
    if ( (ww>limit && resW<limit) || (ww<limit && resW>limit) ) {        
        tOut = setTimeout(refresh, 0);
    }
});


/* Scroll to head of section */

(function($) {
    $.fn.goTo = function() {
        $('html, body').animate({
            scrollTop: $(this).offset().top + 'px'
        }, 'fast');
        
    }
})(jQuery);



/* There is a need to write a cycle */

var collapseNumber = jQuery.makeArray(document.getElementsByClassName("panel panel-default"));
for (let i = 0; i < collapseNumber.length; i++) {
  $('#collapse' + i).on('shown.bs.collapse', function () {
     $('#s' + i).goTo();  
   });
}


/*
$('#collapse1').on('shown.bs.collapse', function () {
     $('#s1').goTo();  
});

$('#collapse2').on('shown.bs.collapse', function () {
     $('#s2').goTo();  
});

$('#collapse3').on('shown.bs.collapse', function () {
     $('#s3').goTo();  
});

$('#collapse4').on('shown.bs.collapse', function () {
     $('#s4').goTo();  
});

$('#collapse5').on('shown.bs.collapse', function () {
     $('#s5').goTo();  
});

$('#collapse6').on('shown.bs.collapse', function () {
     $('#s6').goTo();  
});

$('#collapse7').on('shown.bs.collapse', function () {
     $('#s7').goTo();  
});

$('#collapse8').on('shown.bs.collapse', function () {
     $('#s8').goTo();  
});

$('#collapse9').on('shown.bs.collapse', function () {
     $('#s9').goTo();  
});

$('#collapse10').on('shown.bs.collapse', function () {
     $('#s10').goTo();  
});

$('#collapse11').on('shown.bs.collapse', function () {
     $('#s11').goTo();  
});

$('#collapse12').on('shown.bs.collapse', function () {
     $('#s12').goTo();  
});
*/
/*Scroll-spy */



$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
})

$('body').scrollspy({ target: 'myAffix' })
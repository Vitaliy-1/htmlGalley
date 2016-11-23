



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

$("a[href='#figuresdata']").click(function() {
  $("#navwrap").css("display","none");
});
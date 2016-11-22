$('#myAffix').affix({
  offset: {
    top: 300,
    bottom: function () {
      return (this.bottom = $('.footer').outerHeight(true))
    }
  }
})
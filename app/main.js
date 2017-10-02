// Create a vue instance

var demo = new Vue({

  // A DOM element to mount our initial view model.
  el: '#main',

  // Define some data and properties
  data: {
    show_tooltip: true,
    text_content: 'SQUEEEEEEE!'
  },



  // Define some functions
  methods: {
    toggleTooltip: function() {
      this.show_tooltip = !this.show_tooltip;
    }


  }



});
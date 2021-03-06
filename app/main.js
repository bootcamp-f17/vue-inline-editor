// Create a vue instance

var demo = new Vue({

  // A DOM element to mount our initial view model.
  el: '#main',

  // Define some data and properties
  data: {
    show_tooltip: false,
    text_content: 'Click me to edit my text!'
  },

  // Define some functions
  methods: {
    toggleTooltip: function() {
      this.show_tooltip = !this.show_tooltip;
    },
    hideTooltip: function() {
      this.show_tooltip = false;
    }

  }



});
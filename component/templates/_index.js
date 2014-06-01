'use strict';

var <%= _.camelize(name) %> = {
    className: '<%= _.slugify(name) %>',
    template: require('./template.html'),
    created: function() {

    },
    ready: function() {

    },
    methods: {
      update: function () {

      }
    }
  };

module.exports = <%= _.camelize(name) %> ;

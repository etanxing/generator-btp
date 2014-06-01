'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');


var ApiGenerator = yeoman.generators.NamedBase.extend({
  init: function () {
    console.log('You called the api subgenerator with the argument ' + this.name + '.');
    this.schemaName = this._.capitalize(this.name);
  },

  files: function () {
    this.template('_api.js', this.name + '.js');
  }
});

module.exports = ApiGenerator;
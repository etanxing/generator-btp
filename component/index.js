'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');


var ComponentGenerator = yeoman.generators.NamedBase.extend({
  init: function () {
    console.log('You called the component subgenerator with the argument ' + this.name + '.');
  },

  files: function () {
  	var dirName = this._.camelize(this.name);
  	this.mkdir(dirName);
    this.template('_index.js', dirName + '/index.js');
    this.template('_style.scss', dirName + '/_style.scss');
    this.template('_template.html', dirName + '/template.html');
  }
});

module.exports = ComponentGenerator;
'use strict';

var mongoose = require('mongoose'),
  <%=  schemaName %> = mongoose.model('<%=  schemaName %>');

exports.create<%=  schemaName %> = function(req, res, next) {
  var <%=  name %> = new <%=  schemaName %>(req.body);

  // Additional properties. For example:
  /*
    <%=  name %>.creator = {
      name: req.user.name,
      avatar: req.user.avatar,
      _id: req.user.id
    };
  */

  <%=  name %>.create(function(err, <%=  name %>, numberAffected) {
    if (err || numberAffected === 0) return next(err);
    res.json(<%=  name %>.toJSON());
  });
};

exports.update<%=  schemaName %> = function(req, res, next) {
  <%=  schemaName %>.update(req.body, function(err, <%=  name %>, numberAffected) {
    if (err || numberAffected === 0) return next(err);
    res.json(<%=  name %>.toJSON());
  });
};

exports.delete<%=  schemaName %> = function(req, res, next) {
  <%=  schemaName %>.findByIdAndRemove(req.params.id, function(err) {
    if (err) return next(err);
    res.send(200);
  })
};

exports.get<%=  schemaName %>s = function(req, res, next) {
  var options;

  // Generate search conditions. For example:
  /*
    if (req.query.type === 'creator') {
      options = {
       'creator._id': req.user.id
      };
    }
  */

  <%=  schemaName %>.list(options || {}, function(err, <%=  name %>s) {
    if (err) return next(err);
    res.json(<%=  name %>s);
  });
};

exports.get<%=  schemaName %> = function(req, res, next) {
  <%=  schemaName %>.load(req.params, function(err, <%=  name %>) {
    if (err) return next(err);
    res.json(<%=  name %>);
  });
};

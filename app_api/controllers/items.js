var mongoose = require('mongoose');
var Item = mongoose.model('Item');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

/* GET list of items */
module.exports.itemsForBid = function(req, res) {
    Item
        .find()
        .exec(
            function(err, results) {
                if (err) {
                    console.log('results error:', err);
                    sendJSONresponse(res, 404, err);
                } else {
                    sendJSONresponse(res, 200, results);
                }
            });
};

/* GET a item by the id */
module.exports.itemsReadOne = function(req, res) {
  console.log('Finding item details', req.params);
  if (req.params && req.params.itemId) {
    Loc
      .findById(req.params.itemId)
      .exec(function(err, item) {
        if (!item) {
          sendJSONresponse(res, 404, {
            "message": "itemId not found"
          });
          return;
        } else if (err) {
          console.log(err);
          sendJSONresponse(res, 404, err);
          return;
        }
        console.log(item);
        sendJSONresponse(res, 200, item);
      });
  } else {
    console.log('No itemId specified');
    sendJSONresponse(res, 404, {
      "message": "No itemId in request"
    });
  }
};


/* Copyright 2015-2016 PayPal, Inc. */
"use strict";

var generate = require("../generate");
var api = require("../api");

/**
 * Refunds on direct and captured payments
 * @return {Object} refund functions
 */
function shipping() {
  var baseURL = "/v1/shipping/";
  var operations = ["create", "update"];

  var ret = {
    baseURL: baseURL,
    addTracking: function (data, config, cb) {
      api.executeHttp(
        "POST",
        this.baseURL + "trackers-batch",
        data,
        config,
        cb
      );
    },
    updateTracking: function (trackerId, data, config, cb) {
      api.executeHttp(
        "PUT",
        this.baseURL + "trackers/" + trackerId,
        data,
        config,
        cb
      );
    },
  };

  ret = generate.mixin(ret, operations);
  return ret;
}

module.exports = shipping;

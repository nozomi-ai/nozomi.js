/**
 * Nozomi API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 5
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.NozomiApi);
  }
}(this, function(expect, NozomiApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new NozomiApi.WebsocketCommandViewModelICollectionPaginatedViewModel();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('WebsocketCommandViewModelICollectionPaginatedViewModel', function() {
    it('should create an instance of WebsocketCommandViewModelICollectionPaginatedViewModel', function() {
      // uncomment below and update the code to test WebsocketCommandViewModelICollectionPaginatedViewModel
      //var instane = new NozomiApi.WebsocketCommandViewModelICollectionPaginatedViewModel();
      //expect(instance).to.be.a(NozomiApi.WebsocketCommandViewModelICollectionPaginatedViewModel);
    });

    it('should have the property totalCount (base name: "totalCount")', function() {
      // uncomment below and update the code to test the property totalCount
      //var instane = new NozomiApi.WebsocketCommandViewModelICollectionPaginatedViewModel();
      //expect(instance).to.be();
    });

    it('should have the property payload (base name: "payload")', function() {
      // uncomment below and update the code to test the property payload
      //var instane = new NozomiApi.WebsocketCommandViewModelICollectionPaginatedViewModel();
      //expect(instance).to.be();
    });

  });

}));

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
    instance = new NozomiApi.CreateComponentInputModel();
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

  describe('CreateComponentInputModel', function() {
    it('should create an instance of CreateComponentInputModel', function() {
      // uncomment below and update the code to test CreateComponentInputModel
      //var instane = new NozomiApi.CreateComponentInputModel();
      //expect(instance).to.be.a(NozomiApi.CreateComponentInputModel);
    });

    it('should have the property guid (base name: "guid")', function() {
      // uncomment below and update the code to test the property guid
      //var instane = new NozomiApi.CreateComponentInputModel();
      //expect(instance).to.be();
    });

    it('should have the property componentTypeId (base name: "componentTypeId")', function() {
      // uncomment below and update the code to test the property componentTypeId
      //var instane = new NozomiApi.CreateComponentInputModel();
      //expect(instance).to.be();
    });

    it('should have the property identifier (base name: "identifier")', function() {
      // uncomment below and update the code to test the property identifier
      //var instane = new NozomiApi.CreateComponentInputModel();
      //expect(instance).to.be();
    });

    it('should have the property query (base name: "query")', function() {
      // uncomment below and update the code to test the property query
      //var instane = new NozomiApi.CreateComponentInputModel();
      //expect(instance).to.be();
    });

    it('should have the property isDenominated (base name: "isDenominated")', function() {
      // uncomment below and update the code to test the property isDenominated
      //var instane = new NozomiApi.CreateComponentInputModel();
      //expect(instance).to.be();
    });

    it('should have the property anomalyIgnorance (base name: "anomalyIgnorance")', function() {
      // uncomment below and update the code to test the property anomalyIgnorance
      //var instane = new NozomiApi.CreateComponentInputModel();
      //expect(instance).to.be();
    });

    it('should have the property storeHistoricals (base name: "storeHistoricals")', function() {
      // uncomment below and update the code to test the property storeHistoricals
      //var instane = new NozomiApi.CreateComponentInputModel();
      //expect(instance).to.be();
    });

    it('should have the property requestId (base name: "requestId")', function() {
      // uncomment below and update the code to test the property requestId
      //var instane = new NozomiApi.CreateComponentInputModel();
      //expect(instance).to.be();
    });

  });

}));

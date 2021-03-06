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
    instance = new NozomiApi.ComputeViewModel();
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

  describe('ComputeViewModel', function() {
    it('should create an instance of ComputeViewModel', function() {
      // uncomment below and update the code to test ComputeViewModel
      //var instane = new NozomiApi.ComputeViewModel();
      //expect(instance).to.be.a(NozomiApi.ComputeViewModel);
    });

    it('should have the property guid (base name: "guid")', function() {
      // uncomment below and update the code to test the property guid
      //var instane = new NozomiApi.ComputeViewModel();
      //expect(instance).to.be();
    });

    it('should have the property key (base name: "key")', function() {
      // uncomment below and update the code to test the property key
      //var instane = new NozomiApi.ComputeViewModel();
      //expect(instance).to.be();
    });

    it('should have the property formula (base name: "formula")', function() {
      // uncomment below and update the code to test the property formula
      //var instane = new NozomiApi.ComputeViewModel();
      //expect(instance).to.be();
    });

    it('should have the property delay (base name: "delay")', function() {
      // uncomment below and update the code to test the property delay
      //var instane = new NozomiApi.ComputeViewModel();
      //expect(instance).to.be();
    });

    it('should have the property failCount (base name: "failCount")', function() {
      // uncomment below and update the code to test the property failCount
      //var instane = new NozomiApi.ComputeViewModel();
      //expect(instance).to.be();
    });

    it('should have the property isEnabled (base name: "isEnabled")', function() {
      // uncomment below and update the code to test the property isEnabled
      //var instane = new NozomiApi.ComputeViewModel();
      //expect(instance).to.be();
    });

    it('should have the property expressions (base name: "expressions")', function() {
      // uncomment below and update the code to test the property expressions
      //var instane = new NozomiApi.ComputeViewModel();
      //expect(instance).to.be();
    });

    it('should have the property childComputes (base name: "childComputes")', function() {
      // uncomment below and update the code to test the property childComputes
      //var instane = new NozomiApi.ComputeViewModel();
      //expect(instance).to.be();
    });

    it('should have the property parentComputes (base name: "parentComputes")', function() {
      // uncomment below and update the code to test the property parentComputes
      //var instane = new NozomiApi.ComputeViewModel();
      //expect(instance).to.be();
    });

    it('should have the property values (base name: "values")', function() {
      // uncomment below and update the code to test the property values
      //var instane = new NozomiApi.ComputeViewModel();
      //expect(instance).to.be();
    });

  });

}));

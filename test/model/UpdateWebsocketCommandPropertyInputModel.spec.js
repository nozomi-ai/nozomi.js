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
    instance = new NozomiApi.UpdateWebsocketCommandPropertyInputModel();
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

  describe('UpdateWebsocketCommandPropertyInputModel', function() {
    it('should create an instance of UpdateWebsocketCommandPropertyInputModel', function() {
      // uncomment below and update the code to test UpdateWebsocketCommandPropertyInputModel
      //var instane = new NozomiApi.UpdateWebsocketCommandPropertyInputModel();
      //expect(instance).to.be.a(NozomiApi.UpdateWebsocketCommandPropertyInputModel);
    });

    it('should have the property guid (base name: "guid")', function() {
      // uncomment below and update the code to test the property guid
      //var instane = new NozomiApi.UpdateWebsocketCommandPropertyInputModel();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new NozomiApi.UpdateWebsocketCommandPropertyInputModel();
      //expect(instance).to.be();
    });

    it('should have the property key (base name: "key")', function() {
      // uncomment below and update the code to test the property key
      //var instane = new NozomiApi.UpdateWebsocketCommandPropertyInputModel();
      //expect(instance).to.be();
    });

    it('should have the property value (base name: "value")', function() {
      // uncomment below and update the code to test the property value
      //var instane = new NozomiApi.UpdateWebsocketCommandPropertyInputModel();
      //expect(instance).to.be();
    });

    it('should have the property isEnabled (base name: "isEnabled")', function() {
      // uncomment below and update the code to test the property isEnabled
      //var instane = new NozomiApi.UpdateWebsocketCommandPropertyInputModel();
      //expect(instance).to.be();
    });

    it('should have the property commandGuid (base name: "commandGuid")', function() {
      // uncomment below and update the code to test the property commandGuid
      //var instane = new NozomiApi.UpdateWebsocketCommandPropertyInputModel();
      //expect(instance).to.be();
    });

    it('should have the property commandId (base name: "commandId")', function() {
      // uncomment below and update the code to test the property commandId
      //var instane = new NozomiApi.UpdateWebsocketCommandPropertyInputModel();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new NozomiApi.UpdateWebsocketCommandPropertyInputModel();
      //expect(instance).to.be();
    });

  });

}));

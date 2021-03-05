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
    instance = new NozomiApi.ComputeValueApi();
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

  describe('ComputeValueApi', function() {
    describe('computeValueAllIndexGet', function() {
      it('should call computeValueAllIndexGet successfully', function(done) {
        //uncomment below and update the code to test computeValueAllIndexGet
        //instance.computeValueAllIndexGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('computeValueGetGuidGet', function() {
      it('should call computeValueGetGuidGet successfully', function(done) {
        //uncomment below and update the code to test computeValueGetGuidGet
        //instance.computeValueGetGuidGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('computeValueLastComputeGuidGet', function() {
      it('should call computeValueLastComputeGuidGet successfully', function(done) {
        //uncomment below and update the code to test computeValueLastComputeGuidGet
        //instance.computeValueLastComputeGuidGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));

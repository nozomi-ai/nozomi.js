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

import ApiClient from "../ApiClient";
import ComponentViewModel from '../model/ComponentViewModel';
import ComponentViewModelIEnumerablePaginatedViewModel from '../model/ComponentViewModelIEnumerablePaginatedViewModel';
import CreateComponentInputModel from '../model/CreateComponentInputModel';
import UpdateComponentInputModel from '../model/UpdateComponentInputModel';

/**
* Component service.
* @module api/ComponentApi
* @version 5
*/
export default class ComponentApi {

    /**
    * Constructs a new ComponentApi. 
    * @alias module:api/ComponentApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the componentAllGet operation.
     * @callback module:api/ComponentApi~componentAllGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ComponentViewModelIEnumerablePaginatedViewModel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Obtain all components you have created.
     * @param {Object} opts Optional parameters
     * @param {module:api/ComponentApi~componentAllGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ComponentViewModelIEnumerablePaginatedViewModel}
     */
    componentAllGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'requestGuid': opts['requestGuid'],
        'index': opts['index']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['API Key'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = ComponentViewModelIEnumerablePaginatedViewModel;

      return this.apiClient.callApi(
        '/Component/All', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the componentCreatePost operation.
     * @callback module:api/ComponentApi~componentCreatePostCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a component.
     * @param {Object} opts Optional parameters
     * @param {module:api/ComponentApi~componentCreatePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    componentCreatePost(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['API Key'];
      let contentTypes = ['application/json', 'text/json', 'application/_*+json'];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = 'String';

      return this.apiClient.callApi(
        '/Component/Create', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the componentDeleteDelete operation.
     * @callback module:api/ComponentApi~componentDeleteDeleteCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a component.
     * @param {Object} opts Optional parameters
     * @param {module:api/ComponentApi~componentDeleteDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    componentDeleteDelete(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'guid': opts['guid']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['API Key'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = 'String';

      return this.apiClient.callApi(
        '/Component/Delete', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the componentGetGuidGet operation.
     * @callback module:api/ComponentApi~componentGetGuidGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ComponentViewModel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Obtain the component and its historical values.
     * @param {Object} opts Optional parameters
     * @param {module:api/ComponentApi~componentGetGuidGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ComponentViewModel}
     */
    componentGetGuidGet(guid, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'guid': guid
      };
      let queryParams = {
        'index': opts['index']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['API Key'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = ComponentViewModel;

      return this.apiClient.callApi(
        '/Component/Get/{guid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the componentUpdatePut operation.
     * @callback module:api/ComponentApi~componentUpdatePutCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a component.
     * @param {Object} opts Optional parameters
     * @param {module:api/ComponentApi~componentUpdatePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    componentUpdatePut(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['API Key'];
      let contentTypes = ['application/json', 'text/json', 'application/_*+json'];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = 'String';

      return this.apiClient.callApi(
        '/Component/Update', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}

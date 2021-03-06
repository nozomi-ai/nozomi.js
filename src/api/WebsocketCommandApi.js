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
import WebsocketCommandViewModelICollectionPaginatedViewModel from '../model/WebsocketCommandViewModelICollectionPaginatedViewModel';
import WebsocketCommandViewModelIEnumerablePaginatedViewModel from '../model/WebsocketCommandViewModelIEnumerablePaginatedViewModel';

/**
* WebsocketCommand service.
* @module api/WebsocketCommandApi
* @version 5
*/
export default class WebsocketCommandApi {

    /**
    * Constructs a new WebsocketCommandApi. 
    * @alias module:api/WebsocketCommandApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the websocketCommandAllByRequestGet operation.
     * @callback module:api/WebsocketCommandApi~websocketCommandAllByRequestGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WebsocketCommandViewModelICollectionPaginatedViewModel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Obtain all of the websocket commands created, relative to the request.
     * @param {Object} opts Optional parameters
     * @param {module:api/WebsocketCommandApi~websocketCommandAllByRequestGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WebsocketCommandViewModelICollectionPaginatedViewModel}
     */
    websocketCommandAllByRequestGet(opts, callback) {
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
      let returnType = WebsocketCommandViewModelICollectionPaginatedViewModel;

      return this.apiClient.callApi(
        '/WebsocketCommand/AllByRequest', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the websocketCommandAllGet operation.
     * @callback module:api/WebsocketCommandApi~websocketCommandAllGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WebsocketCommandViewModelIEnumerablePaginatedViewModel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Obtain all websocket commands you have created/own.
     * @param {Object} opts Optional parameters
     * @param {module:api/WebsocketCommandApi~websocketCommandAllGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WebsocketCommandViewModelIEnumerablePaginatedViewModel}
     */
    websocketCommandAllGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
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
      let returnType = WebsocketCommandViewModelIEnumerablePaginatedViewModel;

      return this.apiClient.callApi(
        '/WebsocketCommand/All', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}

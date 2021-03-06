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
import WebsocketCommandPropertyViewModelICollectionPaginatedViewModel from '../model/WebsocketCommandPropertyViewModelICollectionPaginatedViewModel';
import WebsocketCommandPropertyViewModelIEnumerablePaginatedViewModel from '../model/WebsocketCommandPropertyViewModelIEnumerablePaginatedViewModel';

/**
* WebsocketCommandProperty service.
* @module api/WebsocketCommandPropertyApi
* @version 5
*/
export default class WebsocketCommandPropertyApi {

    /**
    * Constructs a new WebsocketCommandPropertyApi. 
    * @alias module:api/WebsocketCommandPropertyApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the websocketCommandPropertyAllByCommandGet operation.
     * @callback module:api/WebsocketCommandPropertyApi~websocketCommandPropertyAllByCommandGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WebsocketCommandPropertyViewModelIEnumerablePaginatedViewModel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves all websocket command properties relevant to its parent command.
     * @param {Object} opts Optional parameters
     * @param {module:api/WebsocketCommandPropertyApi~websocketCommandPropertyAllByCommandGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WebsocketCommandPropertyViewModelIEnumerablePaginatedViewModel}
     */
    websocketCommandPropertyAllByCommandGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'commandGuid': opts['commandGuid'],
        'index': opts['index']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['API Key'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = WebsocketCommandPropertyViewModelIEnumerablePaginatedViewModel;

      return this.apiClient.callApi(
        '/WebsocketCommandProperty/AllByCommand', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the websocketCommandPropertyAllGet operation.
     * @callback module:api/WebsocketCommandPropertyApi~websocketCommandPropertyAllGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WebsocketCommandPropertyViewModelICollectionPaginatedViewModel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves all websocket command properties owned by the stated user with a pagination of  1000 items.
     * @param {Object} opts Optional parameters
     * @param {module:api/WebsocketCommandPropertyApi~websocketCommandPropertyAllGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WebsocketCommandPropertyViewModelICollectionPaginatedViewModel}
     */
    websocketCommandPropertyAllGet(opts, callback) {
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
      let returnType = WebsocketCommandPropertyViewModelICollectionPaginatedViewModel;

      return this.apiClient.callApi(
        '/WebsocketCommandProperty/All', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}

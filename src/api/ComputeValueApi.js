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
import ComputeValueViewModel from '../model/ComputeValueViewModel';
import ComputeValueViewModelIEnumerablePaginatedViewModel from '../model/ComputeValueViewModelIEnumerablePaginatedViewModel';

/**
* ComputeValue service.
* @module api/ComputeValueApi
* @version 5
*/
export default class ComputeValueApi {

    /**
    * Constructs a new ComputeValueApi. 
    * @alias module:api/ComputeValueApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the computeValueAllIndexGet operation.
     * @callback module:api/ComputeValueApi~computeValueAllIndexGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ComputeValueViewModelIEnumerablePaginatedViewModel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Obtain all compute value generated.
     * @param {Object} opts Optional parameters
     * @param {module:api/ComputeValueApi~computeValueAllIndexGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ComputeValueViewModelIEnumerablePaginatedViewModel}
     */
    computeValueAllIndexGet(index, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'index': index
      };
      let queryParams = {
        'computeGuid': opts['computeGuid']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['API Key'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = ComputeValueViewModelIEnumerablePaginatedViewModel;

      return this.apiClient.callApi(
        '/ComputeValue/All/{index}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the computeValueGetGuidGet operation.
     * @callback module:api/ComputeValueApi~computeValueGetGuidGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ComputeValueViewModel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Obtain the compute value specified.
     * @param {module:api/ComputeValueApi~computeValueGetGuidGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ComputeValueViewModel}
     */
    computeValueGetGuidGet(guid, callback) {
      let postBody = null;

      let pathParams = {
        'guid': guid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['API Key'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = ComputeValueViewModel;

      return this.apiClient.callApi(
        '/ComputeValue/Get/{guid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the computeValueLastComputeGuidGet operation.
     * @callback module:api/ComputeValueApi~computeValueLastComputeGuidGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ComputeValueViewModel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Obtain the last compute value of the compute in question.
     * @param {module:api/ComputeValueApi~computeValueLastComputeGuidGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ComputeValueViewModel}
     */
    computeValueLastComputeGuidGet(computeGuid, callback) {
      let postBody = null;

      let pathParams = {
        'computeGuid': computeGuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['API Key'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = ComputeValueViewModel;

      return this.apiClient.callApi(
        '/ComputeValue/Last/{computeGuid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
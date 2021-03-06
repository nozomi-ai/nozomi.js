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

import ApiClient from '../ApiClient';
import RequestViewModel from './RequestViewModel';

/**
* The RequestViewModelIEnumerablePaginatedViewModel model module.
* @module model/RequestViewModelIEnumerablePaginatedViewModel
* @version 5
*/
export default class RequestViewModelIEnumerablePaginatedViewModel {
    /**
    * Constructs a new <code>RequestViewModelIEnumerablePaginatedViewModel</code>.
    * @alias module:model/RequestViewModelIEnumerablePaginatedViewModel
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>RequestViewModelIEnumerablePaginatedViewModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/RequestViewModelIEnumerablePaginatedViewModel} obj Optional instance to populate.
    * @return {module:model/RequestViewModelIEnumerablePaginatedViewModel} The populated <code>RequestViewModelIEnumerablePaginatedViewModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RequestViewModelIEnumerablePaginatedViewModel();
                        
            
            if (data.hasOwnProperty('totalCount')) {
                obj['totalCount'] = ApiClient.convertToType(data['totalCount'], 'Number');
            }
            if (data.hasOwnProperty('payload')) {
                obj['payload'] = ApiClient.convertToType(data['payload'], [RequestViewModel]);
            }
        }
        return obj;
    }

    /**
    * @member {Number} totalCount
    */
    'totalCount' = undefined;
    /**
    * @member {Array.<module:model/RequestViewModel>} payload
    */
    'payload' = undefined;




}

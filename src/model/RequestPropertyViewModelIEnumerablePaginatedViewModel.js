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
import RequestPropertyViewModel from './RequestPropertyViewModel';

/**
* The RequestPropertyViewModelIEnumerablePaginatedViewModel model module.
* @module model/RequestPropertyViewModelIEnumerablePaginatedViewModel
* @version 5
*/
export default class RequestPropertyViewModelIEnumerablePaginatedViewModel {
    /**
    * Constructs a new <code>RequestPropertyViewModelIEnumerablePaginatedViewModel</code>.
    * @alias module:model/RequestPropertyViewModelIEnumerablePaginatedViewModel
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>RequestPropertyViewModelIEnumerablePaginatedViewModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/RequestPropertyViewModelIEnumerablePaginatedViewModel} obj Optional instance to populate.
    * @return {module:model/RequestPropertyViewModelIEnumerablePaginatedViewModel} The populated <code>RequestPropertyViewModelIEnumerablePaginatedViewModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RequestPropertyViewModelIEnumerablePaginatedViewModel();
                        
            
            if (data.hasOwnProperty('totalCount')) {
                obj['totalCount'] = ApiClient.convertToType(data['totalCount'], 'Number');
            }
            if (data.hasOwnProperty('payload')) {
                obj['payload'] = ApiClient.convertToType(data['payload'], [RequestPropertyViewModel]);
            }
        }
        return obj;
    }

    /**
    * @member {Number} totalCount
    */
    'totalCount' = undefined;
    /**
    * @member {Array.<module:model/RequestPropertyViewModel>} payload
    */
    'payload' = undefined;




}

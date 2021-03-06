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
import ComponentTypeViewModel from './ComponentTypeViewModel';

/**
* The ComponentTypeViewModelIEnumerablePaginatedViewModel model module.
* @module model/ComponentTypeViewModelIEnumerablePaginatedViewModel
* @version 5
*/
export default class ComponentTypeViewModelIEnumerablePaginatedViewModel {
    /**
    * Constructs a new <code>ComponentTypeViewModelIEnumerablePaginatedViewModel</code>.
    * @alias module:model/ComponentTypeViewModelIEnumerablePaginatedViewModel
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>ComponentTypeViewModelIEnumerablePaginatedViewModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ComponentTypeViewModelIEnumerablePaginatedViewModel} obj Optional instance to populate.
    * @return {module:model/ComponentTypeViewModelIEnumerablePaginatedViewModel} The populated <code>ComponentTypeViewModelIEnumerablePaginatedViewModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ComponentTypeViewModelIEnumerablePaginatedViewModel();
                        
            
            if (data.hasOwnProperty('totalCount')) {
                obj['totalCount'] = ApiClient.convertToType(data['totalCount'], 'Number');
            }
            if (data.hasOwnProperty('payload')) {
                obj['payload'] = ApiClient.convertToType(data['payload'], [ComponentTypeViewModel]);
            }
        }
        return obj;
    }

    /**
    * @member {Number} totalCount
    */
    'totalCount' = undefined;
    /**
    * @member {Array.<module:model/ComponentTypeViewModel>} payload
    */
    'payload' = undefined;




}

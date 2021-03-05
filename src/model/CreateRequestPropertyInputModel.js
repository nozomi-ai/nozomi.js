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
import RequestPropertyType from './RequestPropertyType';

/**
* The CreateRequestPropertyInputModel model module.
* @module model/CreateRequestPropertyInputModel
* @version 5
*/
export default class CreateRequestPropertyInputModel {
    /**
    * Constructs a new <code>CreateRequestPropertyInputModel</code>.
    * @alias module:model/CreateRequestPropertyInputModel
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>CreateRequestPropertyInputModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/CreateRequestPropertyInputModel} obj Optional instance to populate.
    * @return {module:model/CreateRequestPropertyInputModel} The populated <code>CreateRequestPropertyInputModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateRequestPropertyInputModel();
                        
            
            if (data.hasOwnProperty('guid')) {
                obj['guid'] = ApiClient.convertToType(data['guid'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = RequestPropertyType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('requestGuid')) {
                obj['requestGuid'] = ApiClient.convertToType(data['requestGuid'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} guid
    */
    'guid' = undefined;
    /**
    * @member {module:model/RequestPropertyType} type
    */
    'type' = undefined;
    /**
    * @member {String} key
    */
    'key' = undefined;
    /**
    * @member {String} value
    */
    'value' = undefined;
    /**
    * @member {String} requestGuid
    */
    'requestGuid' = undefined;




}
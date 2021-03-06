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

/**
* The UpdateItemPropertyInputModel model module.
* @module model/UpdateItemPropertyInputModel
* @version 5
*/
export default class UpdateItemPropertyInputModel {
    /**
    * Constructs a new <code>UpdateItemPropertyInputModel</code>.
    * @alias module:model/UpdateItemPropertyInputModel
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>UpdateItemPropertyInputModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/UpdateItemPropertyInputModel} obj Optional instance to populate.
    * @return {module:model/UpdateItemPropertyInputModel} The populated <code>UpdateItemPropertyInputModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateItemPropertyInputModel();
                        
            
            if (data.hasOwnProperty('guid')) {
                obj['guid'] = ApiClient.convertToType(data['guid'], 'String');
            }
            if (data.hasOwnProperty('isEnabled')) {
                obj['isEnabled'] = ApiClient.convertToType(data['isEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('isDeleted')) {
                obj['isDeleted'] = ApiClient.convertToType(data['isDeleted'], 'Boolean');
            }
            if (data.hasOwnProperty('permanentDeletion')) {
                obj['permanentDeletion'] = ApiClient.convertToType(data['permanentDeletion'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * @member {String} guid
    */
    'guid' = undefined;
    /**
    * @member {Boolean} isEnabled
    */
    'isEnabled' = undefined;
    /**
    * @member {String} name
    */
    'name' = undefined;
    /**
    * @member {String} value
    */
    'value' = undefined;
    /**
    * @member {Boolean} isDeleted
    */
    'isDeleted' = undefined;
    /**
    * @member {Boolean} permanentDeletion
    */
    'permanentDeletion' = undefined;




}

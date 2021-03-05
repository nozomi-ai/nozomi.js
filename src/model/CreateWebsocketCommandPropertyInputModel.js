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
import CommandPropertyType from './CommandPropertyType';

/**
* The CreateWebsocketCommandPropertyInputModel model module.
* @module model/CreateWebsocketCommandPropertyInputModel
* @version 5
*/
export default class CreateWebsocketCommandPropertyInputModel {
    /**
    * Constructs a new <code>CreateWebsocketCommandPropertyInputModel</code>.
    * @alias module:model/CreateWebsocketCommandPropertyInputModel
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>CreateWebsocketCommandPropertyInputModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/CreateWebsocketCommandPropertyInputModel} obj Optional instance to populate.
    * @return {module:model/CreateWebsocketCommandPropertyInputModel} The populated <code>CreateWebsocketCommandPropertyInputModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateWebsocketCommandPropertyInputModel();
                        
            
            if (data.hasOwnProperty('guid')) {
                obj['guid'] = ApiClient.convertToType(data['guid'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = CommandPropertyType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
            if (data.hasOwnProperty('isEnabled')) {
                obj['isEnabled'] = ApiClient.convertToType(data['isEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('commandGuid')) {
                obj['commandGuid'] = ApiClient.convertToType(data['commandGuid'], 'String');
            }
            if (data.hasOwnProperty('commandId')) {
                obj['commandId'] = ApiClient.convertToType(data['commandId'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {String} guid
    */
    'guid' = undefined;
    /**
    * @member {module:model/CommandPropertyType} type
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
    * @member {Boolean} isEnabled
    */
    'isEnabled' = undefined;
    /**
    * @member {String} commandGuid
    */
    'commandGuid' = undefined;
    /**
    * @member {Number} commandId
    */
    'commandId' = undefined;




}

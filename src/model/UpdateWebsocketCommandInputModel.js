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
import CommandType from './CommandType';
import UpdateWebsocketCommandPropertyInputModel from './UpdateWebsocketCommandPropertyInputModel';

/**
* The UpdateWebsocketCommandInputModel model module.
* @module model/UpdateWebsocketCommandInputModel
* @version 5
*/
export default class UpdateWebsocketCommandInputModel {
    /**
    * Constructs a new <code>UpdateWebsocketCommandInputModel</code>.
    * @alias module:model/UpdateWebsocketCommandInputModel
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>UpdateWebsocketCommandInputModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/UpdateWebsocketCommandInputModel} obj Optional instance to populate.
    * @return {module:model/UpdateWebsocketCommandInputModel} The populated <code>UpdateWebsocketCommandInputModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateWebsocketCommandInputModel();
                        
            
            if (data.hasOwnProperty('type')) {
                obj['type'] = CommandType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('delay')) {
                obj['delay'] = ApiClient.convertToType(data['delay'], 'Number');
            }
            if (data.hasOwnProperty('requestGuid')) {
                obj['requestGuid'] = ApiClient.convertToType(data['requestGuid'], 'String');
            }
            if (data.hasOwnProperty('isEnabled')) {
                obj['isEnabled'] = ApiClient.convertToType(data['isEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('guid')) {
                obj['guid'] = ApiClient.convertToType(data['guid'], 'String');
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], [UpdateWebsocketCommandPropertyInputModel]);
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
    * @member {module:model/CommandType} type
    */
    'type' = undefined;
    /**
    * @member {String} name
    */
    'name' = undefined;
    /**
    * @member {Number} delay
    */
    'delay' = undefined;
    /**
    * @member {String} requestGuid
    */
    'requestGuid' = undefined;
    /**
    * @member {Boolean} isEnabled
    */
    'isEnabled' = undefined;
    /**
    * @member {Number} id
    */
    'id' = undefined;
    /**
    * @member {String} guid
    */
    'guid' = undefined;
    /**
    * @member {Array.<module:model/UpdateWebsocketCommandPropertyInputModel>} properties
    */
    'properties' = undefined;
    /**
    * @member {Boolean} isDeleted
    */
    'isDeleted' = undefined;
    /**
    * @member {Boolean} permanentDeletion
    */
    'permanentDeletion' = undefined;




}
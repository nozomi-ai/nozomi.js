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
import CreateComponentInputModel from './CreateComponentInputModel';
import CreateItemRequestInputModel from './CreateItemRequestInputModel';
import CreateRequestPropertyInputModel from './CreateRequestPropertyInputModel';
import CreateWebsocketCommandInputModel from './CreateWebsocketCommandInputModel';
import RequestType from './RequestType';
import ResponseType from './ResponseType';

/**
* The CreateRequestInputModel model module.
* @module model/CreateRequestInputModel
* @version 5
*/
export default class CreateRequestInputModel {
    /**
    * Constructs a new <code>CreateRequestInputModel</code>.
    * @alias module:model/CreateRequestInputModel
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>CreateRequestInputModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/CreateRequestInputModel} obj Optional instance to populate.
    * @return {module:model/CreateRequestInputModel} The populated <code>CreateRequestInputModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateRequestInputModel();
                        
            
            if (data.hasOwnProperty('guid')) {
                obj['guid'] = ApiClient.convertToType(data['guid'], 'String');
            }
            if (data.hasOwnProperty('requestType')) {
                obj['requestType'] = RequestType.constructFromObject(data['requestType']);
            }
            if (data.hasOwnProperty('responseType')) {
                obj['responseType'] = ResponseType.constructFromObject(data['responseType']);
            }
            if (data.hasOwnProperty('endpoint')) {
                obj['endpoint'] = ApiClient.convertToType(data['endpoint'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('delay')) {
                obj['delay'] = ApiClient.convertToType(data['delay'], 'Number');
            }
            if (data.hasOwnProperty('failureDelay')) {
                obj['failureDelay'] = ApiClient.convertToType(data['failureDelay'], 'Number');
            }
            if (data.hasOwnProperty('isEnabled')) {
                obj['isEnabled'] = ApiClient.convertToType(data['isEnabled'], 'Boolean');
            }
            if (data.hasOwnProperty('components')) {
                obj['components'] = ApiClient.convertToType(data['components'], [CreateComponentInputModel]);
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], [CreateRequestPropertyInputModel]);
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [CreateItemRequestInputModel]);
            }
            if (data.hasOwnProperty('websocketCommands')) {
                obj['websocketCommands'] = ApiClient.convertToType(data['websocketCommands'], [CreateWebsocketCommandInputModel]);
            }
            if (data.hasOwnProperty('socketDataCount')) {
                obj['socketDataCount'] = ApiClient.convertToType(data['socketDataCount'], 'Number');
            }
            if (data.hasOwnProperty('socketKillSwitchDelay')) {
                obj['socketKillSwitchDelay'] = ApiClient.convertToType(data['socketKillSwitchDelay'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {String} guid
    */
    'guid' = undefined;
    /**
    * @member {module:model/RequestType} requestType
    */
    'requestType' = undefined;
    /**
    * @member {module:model/ResponseType} responseType
    */
    'responseType' = undefined;
    /**
    * @member {String} endpoint
    */
    'endpoint' = undefined;
    /**
    * @member {String} name
    */
    'name' = undefined;
    /**
    * @member {Number} delay
    */
    'delay' = undefined;
    /**
    * @member {Number} failureDelay
    */
    'failureDelay' = undefined;
    /**
    * @member {Boolean} isEnabled
    */
    'isEnabled' = undefined;
    /**
    * @member {Array.<module:model/CreateComponentInputModel>} components
    */
    'components' = undefined;
    /**
    * @member {Array.<module:model/CreateRequestPropertyInputModel>} properties
    */
    'properties' = undefined;
    /**
    * @member {Array.<module:model/CreateItemRequestInputModel>} items
    */
    'items' = undefined;
    /**
    * @member {Array.<module:model/CreateWebsocketCommandInputModel>} websocketCommands
    */
    'websocketCommands' = undefined;
    /**
    * @member {Number} socketDataCount
    */
    'socketDataCount' = undefined;
    /**
    * @member {Number} socketKillSwitchDelay
    */
    'socketKillSwitchDelay' = undefined;




}

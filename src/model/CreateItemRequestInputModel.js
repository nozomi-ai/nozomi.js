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
import ItemViewModel from './ItemViewModel';
import RequestViewModel from './RequestViewModel';

/**
* The CreateItemRequestInputModel model module.
* @module model/CreateItemRequestInputModel
* @version 5
*/
export default class CreateItemRequestInputModel {
    /**
    * Constructs a new <code>CreateItemRequestInputModel</code>.
    * @alias module:model/CreateItemRequestInputModel
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>CreateItemRequestInputModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/CreateItemRequestInputModel} obj Optional instance to populate.
    * @return {module:model/CreateItemRequestInputModel} The populated <code>CreateItemRequestInputModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateItemRequestInputModel();
                        
            
            if (data.hasOwnProperty('requestId')) {
                obj['requestId'] = ApiClient.convertToType(data['requestId'], 'String');
            }
            if (data.hasOwnProperty('request')) {
                obj['request'] = RequestViewModel.constructFromObject(data['request']);
            }
            if (data.hasOwnProperty('itemGuid')) {
                obj['itemGuid'] = ApiClient.convertToType(data['itemGuid'], 'String');
            }
            if (data.hasOwnProperty('item')) {
                obj['item'] = ItemViewModel.constructFromObject(data['item']);
            }
        }
        return obj;
    }

    /**
    * @member {String} requestId
    */
    'requestId' = undefined;
    /**
    * @member {module:model/RequestViewModel} request
    */
    'request' = undefined;
    /**
    * @member {String} itemGuid
    */
    'itemGuid' = undefined;
    /**
    * @member {module:model/ItemViewModel} item
    */
    'item' = undefined;




}

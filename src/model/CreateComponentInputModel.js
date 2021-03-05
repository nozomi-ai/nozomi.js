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
* The CreateComponentInputModel model module.
* @module model/CreateComponentInputModel
* @version 5
*/
export default class CreateComponentInputModel {
    /**
    * Constructs a new <code>CreateComponentInputModel</code>.
    * @alias module:model/CreateComponentInputModel
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>CreateComponentInputModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/CreateComponentInputModel} obj Optional instance to populate.
    * @return {module:model/CreateComponentInputModel} The populated <code>CreateComponentInputModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateComponentInputModel();
                        
            
            if (data.hasOwnProperty('guid')) {
                obj['guid'] = ApiClient.convertToType(data['guid'], 'String');
            }
            if (data.hasOwnProperty('componentTypeId')) {
                obj['componentTypeId'] = ApiClient.convertToType(data['componentTypeId'], 'Number');
            }
            if (data.hasOwnProperty('identifier')) {
                obj['identifier'] = ApiClient.convertToType(data['identifier'], 'String');
            }
            if (data.hasOwnProperty('query')) {
                obj['query'] = ApiClient.convertToType(data['query'], 'String');
            }
            if (data.hasOwnProperty('isDenominated')) {
                obj['isDenominated'] = ApiClient.convertToType(data['isDenominated'], 'Boolean');
            }
            if (data.hasOwnProperty('anomalyIgnorance')) {
                obj['anomalyIgnorance'] = ApiClient.convertToType(data['anomalyIgnorance'], 'Boolean');
            }
            if (data.hasOwnProperty('storeHistoricals')) {
                obj['storeHistoricals'] = ApiClient.convertToType(data['storeHistoricals'], 'Boolean');
            }
            if (data.hasOwnProperty('requestId')) {
                obj['requestId'] = ApiClient.convertToType(data['requestId'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} guid
    */
    'guid' = undefined;
    /**
    * @member {Number} componentTypeId
    */
    'componentTypeId' = undefined;
    /**
    * @member {String} identifier
    */
    'identifier' = undefined;
    /**
    * @member {String} query
    */
    'query' = undefined;
    /**
    * @member {Boolean} isDenominated
    */
    'isDenominated' = undefined;
    /**
    * @member {Boolean} anomalyIgnorance
    */
    'anomalyIgnorance' = undefined;
    /**
    * @member {Boolean} storeHistoricals
    */
    'storeHistoricals' = undefined;
    /**
    * @member {String} requestId
    */
    'requestId' = undefined;




}
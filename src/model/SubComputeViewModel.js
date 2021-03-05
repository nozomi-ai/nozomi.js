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
import ComputeViewModel from './ComputeViewModel';

/**
* The SubComputeViewModel model module.
* @module model/SubComputeViewModel
* @version 5
*/
export default class SubComputeViewModel {
    /**
    * Constructs a new <code>SubComputeViewModel</code>.
    * @alias module:model/SubComputeViewModel
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>SubComputeViewModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SubComputeViewModel} obj Optional instance to populate.
    * @return {module:model/SubComputeViewModel} The populated <code>SubComputeViewModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubComputeViewModel();
                        
            
            if (data.hasOwnProperty('parentComputeGuid')) {
                obj['parentComputeGuid'] = ApiClient.convertToType(data['parentComputeGuid'], 'String');
            }
            if (data.hasOwnProperty('parentCompute')) {
                obj['parentCompute'] = ComputeViewModel.constructFromObject(data['parentCompute']);
            }
            if (data.hasOwnProperty('childComputeGuid')) {
                obj['childComputeGuid'] = ApiClient.convertToType(data['childComputeGuid'], 'String');
            }
            if (data.hasOwnProperty('childCompute')) {
                obj['childCompute'] = ComputeViewModel.constructFromObject(data['childCompute']);
            }
            if (data.hasOwnProperty('isEnabled')) {
                obj['isEnabled'] = ApiClient.convertToType(data['isEnabled'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * @member {String} parentComputeGuid
    */
    'parentComputeGuid' = undefined;
    /**
    * @member {module:model/ComputeViewModel} parentCompute
    */
    'parentCompute' = undefined;
    /**
    * @member {String} childComputeGuid
    */
    'childComputeGuid' = undefined;
    /**
    * @member {module:model/ComputeViewModel} childCompute
    */
    'childCompute' = undefined;
    /**
    * @member {Boolean} isEnabled
    */
    'isEnabled' = undefined;




}
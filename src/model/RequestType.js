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
* Enum class RequestType.
* @enum {}
* @readonly
*/
export default class RequestType {
        /**
         * value: "HttpGet"
         * @const
         */
        HttpGet = "HttpGet";

        /**
         * value: "HttpPost"
         * @const
         */
        HttpPost = "HttpPost";

        /**
         * value: "HttpPut"
         * @const
         */
        HttpPut = "HttpPut";

        /**
         * value: "HttpPatch"
         * @const
         */
        HttpPatch = "HttpPatch";

        /**
         * value: "HttpDelete"
         * @const
         */
        HttpDelete = "HttpDelete";

        /**
         * value: "WebSocket"
         * @const
         */
        WebSocket = "WebSocket";


    /**
    * Returns a <code>RequestType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/RequestType} The enum <code>RequestType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

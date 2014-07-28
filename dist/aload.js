/*!
 * aload.js v1.1.1
 *
 * Copyright (c) 2014, @pazguille
 * Released under the MIT license.
 */
(function (window) {
    'use strict';

    /**
     * Loads images, scripts, styles, iframes, videos and audios asynchronously.
     * @param {NodeList} [nodes] - A NodeList of elements. By default, it is the result of `querySelectorAll('[data-aload]')`.
     * @returns {NodeList}
     */
    function aload(nodes) {

        nodes = nodes || window.document.querySelectorAll('[data-aload]');

        if (nodes.length === undefined) {
            nodes = [nodes];
        }

        var i = 0,
            len = nodes.length,
            src,
            node;

        for (i; i < len; i += 1) {
            node = nodes[i];
            src = (node.tagName) !== 'LINK' ? 'src' : 'href';
            node[src] = node.getAttribute('data-aload');
            node.removeAttribute('data-aload');
        }

        return nodes;
    }

    /**
     * Expose aload
     */
    // AMD suppport
    if (typeof window.define === 'function' && window.define.amd !== undefined) {
        window.define('aload', [], function () {
            return aload;
        });

    // CommonJS suppport
    } else if (typeof module !== 'undefined' && module.exports !== undefined) {
        module.exports = aload;

    // Default
    } else {
        window.aload = aload;
    }

}(this));

// ==UserScript==
// @name         Less Confusing Kitsu Quick Update
// @namespace    http://layton.in
// @version      1
// @description  Makes the quick update banner show the number of episodes/chapters completed, rather than the next one to watch/read
// @author       awlayton
// @match        https://kitsu.io/
// @require      https://code.jquery.com/jquery-2.1.4.min.js
// @grant        none
// @license      MIT (See file header)
// @copyright    (c) 2017 Alex Layton
// ==/UserScript==

// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files
// (the "Software"), to deal in the Software without restriction,
// including without limitation the rights to use, copy, modify, merge,
// publish, distribute, sublicense, and/or sell copies of the Software, and
// to permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
// IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
// CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
// TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
// SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

(function() {
    'use strict';

    // select the target node
    // TODO: Do it a better way? Stupid front-end stuff.
    var target =  $('body');

    // create an observer instance
    var observer = new MutationObserver(function(mutations) {
        var elms = $('.series-progress:not(:contains("Completed"))');
        elms.text(function(i, text) {
            return text.replace(/(\d+)/, function(str) {
                return (+str - 1);
            }) + ' Completed';
        });
    });

    // configuration of the observer:
    var config = {
        attributes: true,
        childList: true,
        subtree: true,
        characterData: true
    };

    // pass in the target node, as well as the observer options
    observer.observe(target.get(0), config);
})();

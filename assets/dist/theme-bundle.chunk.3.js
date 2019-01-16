webpackJsonp([3],{

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nod_validate__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nod_validate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_nod_validate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nod_functions_min_max_validate__ = __webpack_require__(372);
// Hook our SCSS framework form field status classes into the nod validation system before use
__WEBPACK_IMPORTED_MODULE_0_nod_validate___default.a.classes.errorClass='form-field--error';__WEBPACK_IMPORTED_MODULE_0_nod_validate___default.a.classes.successClass='form-field--success';__WEBPACK_IMPORTED_MODULE_0_nod_validate___default.a.classes.errorMessageClass='form-inlineMessage';// Register validate functions
__WEBPACK_IMPORTED_MODULE_0_nod_validate___default.a.checkFunctions['min-max']=__WEBPACK_IMPORTED_MODULE_1__nod_functions_min_max_validate__["a" /* default */];/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_nod_validate___default.a);

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var forms={email:function email(value){var re=/^.+@.+\..+/;return re.test(value)},/**
     * Validates a password field
     * @param value
     * @returns {boolean}
     */password:function password(value){return this.notEmpty(value)},/**
     * validates if a field is empty
     * @param value
     * @returns {boolean}
     *
     */notEmpty:function notEmpty(value){return value.length>0}};/* harmony default export */ __webpack_exports__["a"] = (forms);

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_lang_isNaN__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_lang_isNaN___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_lang_isNaN__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
function minMaxValidate(minInputSelector,maxInputSelector){function validate(cb){var minValue=parseFloat(__WEBPACK_IMPORTED_MODULE_1_jquery___default()(minInputSelector).val());var maxValue=parseFloat(__WEBPACK_IMPORTED_MODULE_1_jquery___default()(maxInputSelector).val());if(maxValue>minValue||__WEBPACK_IMPORTED_MODULE_0_lodash_lang_isNaN___default()(maxValue)||__WEBPACK_IMPORTED_MODULE_0_lodash_lang_isNaN___default()(minValue)){return cb(true)}return cb(false)}return validate}/* harmony default export */ __webpack_exports__["a"] = (minMaxValidate);

/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

var indexOfNaN = __webpack_require__(382);

/**
 * The base implementation of `_.indexOf` without support for binary searches.
 *
 * @private
 * @param {Array} array The array to search.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  if (value !== value) {
    return indexOfNaN(array, fromIndex);
  }
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = baseIndexOf;


/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

var isNumber = __webpack_require__(241);

/**
 * Checks if `value` is `NaN`.
 *
 * **Note:** This method is not the same as [`isNaN`](https://es5.github.io/#x15.1.2.4)
 * which returns `true` for `undefined` and other non-numeric values.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 * @example
 *
 * _.isNaN(NaN);
 * // => true
 *
 * _.isNaN(new Number(NaN));
 * // => true
 *
 * isNaN(undefined);
 * // => true
 *
 * _.isNaN(undefined);
 * // => false
 */
function isNaN(value) {
  // An `NaN` primitive is the only value that is not equal to itself.
  // Perform the `toStringTag` check first to avoid errors with some host objects in IE.
  return isNumber(value) && value != +value;
}

module.exports = isNaN;


/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery) {
/**
 *
 *
 * nod v.2.0.12
 * Gorm Casper
 *
 *
 *
 * This is a short breakdown of the code to help you find your way around.
 *
 *
 * An `element` always refer to some input element defined by the user via the
 * `selector` key.
 *
 * A `metric` is the user created objects that is used to add checks to
 * nod.
 *
 * Each `element` will have at most one of a `listener`, a `checker`, a
 * `checkHandler`, and a `domNode` "attached" to it. The `listener` listens
 * for inputs or changes to the `element` and passes the new value on to to the
 * `checker` which performs its checks and passes the the results on to the
 * `checkHandler` which calculates the new state of the `element` which it
 * passes on to the `domNode` which will update the dom.
 *
 * The four main parts, the listener, the checker, the checkHandler, and the
 * domNode all communicate through the `mediator` by firing events identified
 * by a unique id. They do not know of each other's existance, and so no
 * communication flows directly between them.
 *
 * All listeners, checkers, handlers, and domNodes are grouped together in
 * `collections`, which are basically a glorified array that makes it easy
 * not to get duplicate items for each element (for instance two listeners
 * listening to the same element).
 *
 * The communication flow looks like this:
 * listener -> checker -> checkHandler -> domNode
 *
 * Between each part, you have the mediator.
 *
 *
 * `Metrics` are added by the user, which sets up the system above. Notice
 * that a metric can target multiple elements at once, and that there can
 * be overlaps. One metric definitely does not equal one element or one
 * check.
 *
 */

function nod (config) {
    var form,
        configuration   = {},
        mediator        = nod.makeMediator(),
        eventEmitter    = nod.makeEventEmitter(mediator),

        // Creating (empty) collections
        listeners       = nod.makeCollection(nod.makeListener),
        checkers        = nod.makeCollection(nod.makeChecker),
        checkHandlers   = nod.makeCollection(nod.makeCheckHandler),
        domNodes        = nod.makeCollection(nod.makeDomNode);

    /**
     * Entry point for the user. The user passes in an array of metrics (an
     * object containing a selector, a validate string/function, etc.) and it
     * gets processed from here.
     *
     * This function, is mostly about cleaning up what the user passed us.
     */
    function addMetrics (metrics) {
        // Make sure we are dealing with an array of metrics.
        var arrayMetrics = Array.isArray(metrics) ? metrics : [metrics];

        arrayMetrics.forEach(function (metric) {
            var validateArray, errorMessageArray,
                notArray = !Array.isArray(metric.validate);

            // If the 'validate' is not an array, then we're good to go.
            if (notArray) {
                addMetric(metric);

            // If it is an array (e.g., validate: ['email', 'max-length:10']),
            // then we need to split them up into multiple metrics, and add
            // them individually.
            } else {
                if (!Array.isArray(metric.errorMessage)) {
                    var errorMsg = 'If you pass in `validate:...` as an ' +
                        ' array, then `errorMessage:...` also needs to be an ' +
                        ' array. "' + metric.validate + '", and "' +
                        metric.errorMessage + '"';

                    throw Error(errorMsg);
                }

                // We store each as arrays, and then run through them,
                // overwriting each of the keys accordingly.
                validateArray     = metric.validate;
                errorMessageArray = metric.errorMessage;

                validateArray.forEach(function (validate, i) {
                    // Overwrite the array with the individual 'validate' and
                    // 'errorMessage'.
                    metric.validate     = validate;
                    metric.errorMessage = errorMessageArray[i];

                    addMetric(metric);
                });
            }
        });
    }

    function addMetric (metric) {
        var specialTriggers = [],

            // The function that will check the value of the element.
            checkFunction = nod.getCheckFunction(metric),

            // A list of elements that this metric will target.
            elements = nod.getElements(metric.selector),

            // A "set" here, refers to an obj with one listener, one checker,
            // and one checkHandler. Only every one for each element in the
            // dom.
            metricSets = elements.map(function (element) {
                return {
                    listener:       listeners.findOrMake(element,
                                                         mediator,
                                                         metric.triggerEvents,
                                                         configuration),
                    checker:        checkers.findOrMake(element, mediator),
                    checkHandler:   checkHandlers.findOrMake(element,
                                                             mediator,
                                                             configuration),
                    domNode:        domNodes.findOrMake(element,
                                                        mediator,
                                                        configuration)
                };
            });

        // Saved for later reference in case the user has a `tap` function
        // defined.
        checkFunction.validate = (typeof metric.validate === 'function')
            ? metric.validate.toString()
            : metric.validate;

        // Special cases. These `validates` affect each other, and their state
        // needs to update each time either of the elements' values change.
        if (metric.validate === 'one-of'
            || metric.validate === 'only-one-of'
            || metric.validate === 'some-radio') {
            specialTriggers.push(metric.selector);
        }

        if (typeof metric.validate === 'string'
            && metric.validate.indexOf('same-as') > -1) {
            specialTriggers.push(metric.validate.split(':')[1]);
        }

        // Helper function, used in the loop below.
        function subscribeToTriggers (checker, selector) {
            var triggerElements = nod.getElements(selector);

            triggerElements.forEach(function (element) {
                var listener = listeners.findOrMake(element,
                                                    mediator,
                                                    null,
                                                    configuration);

                checker.subscribeTo(listener.id);
            });
        }

        // Here we set up the "connections" between each of our main parts.
        // They communicate only through the mediator.
        metricSets.forEach(function (metricSet) {
            // :: Listener -> Checker

            // We want our checker to listen to the listener. A listener has an
            // id, which it uses when it fires events to the mediator (which
            // was set up when the listener was created).
            metricSet.checker.subscribeTo(metricSet.listener.id);

            // If the user set a `triggeredBy`, the checker need to listen to
            // changes on this element as well.
            // Same goes for special triggers that we set.
            subscribeToTriggers(metricSet.checker, metric.triggeredBy);
            subscribeToTriggers(metricSet.checker, specialTriggers);

            // :: Checker -> checkHandler

            var checkId = nod.unique();

            // We add the check function as one to be checked when the user
            // inputs something. (There might be more than this one).
            metricSet.checker.addCheck(checkFunction, checkId);

            // We want the check handler to listen for results from the checker
            metricSet.checkHandler.subscribeTo(checkId,
                                               metric.errorMessage,
                                               metric.defaultStatus);

            if (configuration.noDom) {
                eventEmitter.subscribe(metricSet.checkHandler.id);
            } else {
                // :: checkHandler -> domNode

                // The checkHandler has its own id (and only ever needs one), so
                // we just ask the domNode to listen for that.
                metricSet.domNode.subscribeTo(metricSet.checkHandler.id);
            }
        });

        // After all is done, we may have to enable/disable a submit button.
        toggleSubmit();
    }

    /**
     * If a form is added, we listen for submits, and if the has also set
     * `preventSubmit` in the configuration, then we stop the commit from
     * happening unless all the elements are valid.
     */
    function addForm (selector) {
        var form = nod.getElement(selector);

        form.addEventListener('submit', possiblePreventSubmit, false);
    }

    // Prevent function, used above
    function possiblePreventSubmit (event) {
        if (configuration.preventSubmit && !areAll(nod.constants.VALID)) {
            event.preventDefault();

            // Show errors to the user
            checkers.forEach(function (checker) {
                checker.performCheck({
                    event: event
                });
            });

            // Focus on the first invalid element
            for (var i = 0, len = checkHandlers.length; i < len; i++) {
                var checkHandler = checkHandlers[i];

                if (checkHandler.getStatus().status === nod.constants.INVALID) {
                    checkHandler.element.focus();
                    break;
                }
            }
        }
    }

    /**
     * Removes elements completely.
     */
    function removeElement (selector) {
        var elements = nod.getElements(selector);

        elements.forEach(function (element) {
            listeners.removeItem(element);
            checkers.removeItem(element);
            checkHandlers.removeItem(element);
            domNodes.removeItem(element);
        });
    }

    /**
     * configure
     *
     * Changes the configuration object used throughout the code for classes,
     * delays, messages, etc.
     *
     * It can either be called with a key/value pair (two arguments), or with
     * an object with key/value pairs.
     */
    function configure (key, value) {
        var attributes = {};

        if (arguments.length > 1) {
            attributes[key] = value;
        } else {
            attributes = key;
        }

        for (var k in attributes) {
            configuration[k] = attributes[k];
        }

        if (attributes.submit || attributes.disableSubmit) {
            toggleSubmit();
        }

        if (attributes.form) {
            addForm(attributes.form);
        }
    }

    /**
     * toggleSubmit
     *
     * Toggles the submit button (enabled if every element is valid, otherwise
     * disabled).
     */
    function toggleSubmit () {
        if (configuration.submit && configuration.disableSubmit) {
            nod.getElements(configuration.submit).forEach(function (submitBtn) {
                submitBtn.disabled = !areAll(nod.constants.VALID);
            });
        }
    }

    /**
     * Listen to all checks, and if the user has set in the configuration to
     * enable/disabled the submit button, we do that.
     */
    mediator.subscribe('all', toggleSubmit);

    function areAll (status) {
        for (var i = 0, len = checkHandlers.length; i < len; i++) {
            if (checkHandlers[i].getStatus().status !== status) {
                return false;
            }
        }

        return true;
    }

    function setMessageOptions (options) {
        options = Array.isArray(options) ? options : [options];

        options.forEach(function (option) {
            var elements = nod.getElements(option.selector);

            elements.forEach(function (element) {
                var domNode = domNodes.findOrMake(element,
                                                  mediator,
                                                  configuration);

                domNode.setMessageOptions(option.parent, option.errorSpan);
            });
        });
    }

    /**
     * Listen to all checks and allow the user to listen in, if he set a `tap`
     * function in the configuration.
     */
    mediator.subscribe('all', function (options) {
        if (typeof configuration.tap === 'function'
            && options.type === 'check') {
            configuration.tap(options);
        }
    });

    function getStatus (selector, showErrorMessage) {
        var element = nod.getElement(selector),
            status  = checkHandlers.findOrMake(element).getStatus();

        return showErrorMessage ? status : status.status;
    }

    function performCheck (selector) {
        var cs = selector
            ? nod.getElements(selector).map(checkers.findOrMake)
            : checkers;

        cs.forEach(function (checker) {
            checker.performCheck();
        });
    }

    function setInvalid (selector, errorMessage) {
        var element = nod.getElement(selector),
            domNode  = domNodes.findOrMake(element);

        domNode.set({
            result: nod.constants.INVALID,
            errorMessage: errorMessage || ''
        });
    }

    function setValid (selector) {
        var element = nod.getElement(selector),
            domNode  = domNodes.findOrMake(element);

        domNode.set({
            result: nod.constants.VALID,
            errorMessage: ''
        });
    }

    function setAllNodeValid () {
        for (var i = 0, len = domNodes.length; i < len; i++) {
            setValid(domNodes[i].element);
        }
    }

    /**
     * Internal functions that are exposed to the public.
     */
    var nodInstace = {
        add:                    addMetrics,
        remove:                 removeElement,
        areAll:                 areAll,
        getStatus:              getStatus,
        configure:              configure,
        setMessageOptions:      setMessageOptions,
        performCheck:           performCheck,
        setInvalid:             setInvalid,
        setValid:               setValid,
        setAllNodeValid:        setAllNodeValid
    };

    if (config) {
        nodInstace.configure(config);
    }

    return nodInstace;
}

nod.constants = {
    VALID:          'valid',
    INVALID:        'invalid',
    UNCHECKED:      'unchecked',

    DELAY:          700
};

nod.classes = {
    successClass:         'nod-success',
    successMessageClass:  'nod-success-message',
    errorClass:           'nod-error',
    errorMessageClass:    'nod-error-message'
};

// Helper function to create unique id's
nod.unique = (function () {
    var uniqueCounter = 0;

    return function () {
        return uniqueCounter++;
    };
})();

/** makeMediator
 *
 * Minimal implementation of a mediator pattern, used for communication between
 * checkers and checkHandlers (checkers fires events which handlers can
 * subscribe to). Unique ID's are used to tell events apart.
 *
 * Subscribing to 'all' will give you all results from all checks.
 */
nod.makeMediator = function () {
    var subscribers = [],
        all = [];

    return {
        subscribe: function subscribe (id, fn) {
            if (id === 'all') {
                all.push(fn);
            } else {
                if (!subscribers[id]) {
                    subscribers[id] = [];
                }

                if (subscribers[id].indexOf(fn) === -1) {
                    subscribers[id].push(fn);
                }
            }
        },

        fire: function fire (options) {
            var subscribedFunctions = subscribers[options.id].concat(all);

            subscribedFunctions.forEach(function (subscribedFunction) {
                subscribedFunction(options);
            });
        }
    };
};

nod.findCollectionIndex = function (collection, element) {
    for (var i in collection) {
        if (collection[i].element === element) {
            return i;
        }
    }

    return -1;
};

/**
 * makeCollection
 *
 * A minimal implementation of a "collection", inspired by collections from
 * BackboneJS. Used by listeners, checkers, and checkHandlers.
 */
nod.makeCollection = function (maker) {
    var collection = [];

    collection.findOrMake = function (element) {
        var index = nod.findCollectionIndex(collection, element);

        // Found
        if (index !== -1) {
            return collection[index];
        }

        // None found, let's make one then.
        var item = maker.apply(null, arguments);

        collection.push(item);

        return item;
    };

    collection.removeItem = function (element) {
        var index = nod.findCollectionIndex(collection, element),
            item = collection[index];

        if (!item) {
            return;
        }

        // Call .dispose() if it exists
        if (typeof item.dispose === 'function') {
            item.dispose();
        }

        // Remove item
        collection.splice(index, 1);
    };

    return collection;
};

/**
 * makeListener
 *
 * Takes care of listening to changes to its element and fire them off as
 * events on the mediator for checkers to listen to.
 */
nod.makeListener = function (element, mediator, triggerEvents, configuration) {
    var id = nod.unique(),
        $element;

    function changed (event) {
        mediator.fire({
            id:     id,
            event:  event,
            type:   'change'
        });
    }

    element.addEventListener('input', changed, false);
    element.addEventListener('change', changed, false);
    element.addEventListener('blur', changed, false);

    if (configuration.jQuery) {
        $element = configuration.jQuery(element);

        $element.on('propertychange change click keyup input paste', changed);
    }

    if (triggerEvents) {
        triggerEvents = Array.isArray(triggerEvents)
            ? triggerEvents
            : [triggerEvents];

        triggerEvents.forEach(function (eventName) {
            element.addEventListener(eventName, changed, false);
        });
    }

    function dispose () {
        element.removeEventListener('input', changed, false);
        element.removeEventListener('change', changed, false);
        element.removeEventListener('blur', changed, false);

        if ($element) {
            $element.off();
        }

        if (triggerEvents) {
            triggerEvents.forEach(function (eventName) {
                element.removeEventListener(eventName, changed, false);
            });
        }
    }

    return {
        element:    element,
        dispose:    dispose,
        id:         id
    };
};

/**
 * makeChecker
 *
 * An "checker" communicates primarily with the mediator. It listens for input
 * changes (coming from listeners), performs its checks and fires off results
 * back to the mediator for checkHandlers to handle.
 *
 * The checker has a 1 to 1 relationship with an element, an listeners, and an
 * checkHandler; although they may communicate with other "sets" of listeners,
 * checkers and handlers.
 *
 * Checks are added, from the outside, and consists of a checkFunction (see
 * nod.checkFunctions) and a unique id.
 */
nod.makeChecker = function (element, mediator) {
    var checks = [];

    function subscribeTo (id) {
        mediator.subscribe(id, performCheck);
    }

    // Run every check function against the value of the element.
    function performCheck (options) {
        checks.forEach(function (check) {
            check(options || {});
        });
    }

    // Add a check function to the element. The result will be handed off to the
    // mediator (for checkHandlers to evaluate).
    function addCheck (checkFunction, id) {
        function callback (result) {
            mediator.fire({
                id: id,
                type: 'check',
                result: result,
                element: element,
                validate: checkFunction.validate
            });
        }

        checks.push(function (options) {
            // If element.value is undefined, then we might be dealing with
            // another type of element; like <div contenteditable='true'>
            var value = element.value === undefined
                ? element.innerHTML
                : element.value;

            options.element = element;

            checkFunction(callback, value, options);
        });
    }

    return {
        subscribeTo:    subscribeTo,
        addCheck:       addCheck,
        performCheck:   performCheck,
        element:        element
    };
};

/**
 * makeCheckHandler
 *
 * Handles checks coming in from the mediator and takes care of calculating the
 * state and error messages.
 *
 * The checkHandlers lives in one to one with the element parsed in, and listens
 * for (usually) multiple error checks.
 */
nod.makeCheckHandler = function (element, mediator, configuration) {
    var results     = {},
        id          = nod.unique();

    function subscribeTo (id, errorMessage, defaultStatus) {
        // Create a representation of the type of error in the results object.
        if (!results[id]) {
            results[id] = {
                status: defaultStatus || nod.constants.UNCHECKED,
                errorMessage: errorMessage
            };
        }

        // Subscribe to error id.
        mediator.subscribe(id, checkHandler);
    }

    function checkHandler (result) {
        results[result.id].status = result.result
            ? nod.constants.VALID
            : nod.constants.INVALID;

        notifyMediator();
    }

    // Runs through all results to see what kind of feedback to show the user.
    function notifyMediator () {
        var status = getStatus();

        // Event if might be valid we pass along an undefined errorMessage.
        mediator.fire({
            id:             id,
            type:           'result',
            result:         status.status,
            element:        element,
            errorMessage:   status.errorMessage
        });
    }

    function getStatus () {
        var status, errorMessage;

        for (var id in results) {
            status = results[id].status;

            if (results[id].status === nod.constants.INVALID) {
                errorMessage = results[id].errorMessage;
                break;
            }
        }

        return {
            status:        status,
            errorMessage:  errorMessage
        };
    }

    return {
        id:             id,
        subscribeTo:    subscribeTo,
        checkHandler:   checkHandler,
        getStatus:      getStatus,
        element:        element
    };
};

// Helper functions for `makeDomNode`.
nod.hasClass = function (className, el) {
    if (el.classList) {
        return el.classList.contains(className);
    } else {
        var regex = new RegExp('(\\s|^)' + className + '(\\s|$)');
        return !!el.className.match(regex);
    }
};

nod.removeClass = function (className, el) {
    if (el.classList) {
        el.classList.remove(className);
    } else if (nod.hasClass(className, el)) {
        var regex = new RegExp('(?:^|\\s)' + className + '(?!\\S)');
        el.className = el.className.replace(regex, '');
    }
};

nod.addClass = function (className, el) {
    if (el.classList) {
        el.classList.add(className);
    } else if (!nod.hasClass(className, el)) {
        el.className += ' ' + className;
    }
};

nod.getParent = function (element, configuration) {
    var klass = configuration.parentClass;

    if (klass) {
        klass = klass.charAt(0) === '.' ? klass.slice(1) : klass;
        return nod.findParentWithClass(element.parentNode, klass);
    } else {
        return element.parentNode;
    }
};

nod.findParentWithClass = function (parent, klass) {
    // Guard (only the `window` does not have a parent).
    if (!parent.parentNode) {
        return parent;
    }

    // Found it
    if (nod.hasClass(klass, parent)) {
        return parent;
    }

    // Try next parent (recursion)
    return nod.findParentWithClass(parent.parentNode, klass);
};

/**
 * makeDomNode
 *
 * This creates the error/success message behind the input element, as well as
 * takes care of updating classes and taking care of its own state.
 *
 * The dom node is owned by checkHandler, and has a one to one relationship with
 * both the checkHandler and the input element being checked.
 *
 */
nod.makeDomNode = function (element, mediator, configuration) {
    // A 'domNode' consists of two elements: a 'parent', and a 'span'. The
    // parent is given as a paremeter, while the span is created and added as a
    // child to the parent.
    var parent              = nod.getParent(element, configuration),
        _status             = nod.constants.UNCHECKED,
        pendingUpdate       = null,
        span                = document.createElement('span'),
        customSpan          = false;

    span.style.display = 'none';

    if (!configuration.noDom) {
        parent.appendChild(span);
    }

    // Updates the class of the parent to match the status of the element.
    function updateParent (status) {
        var successClass = configuration.successClass
                           || nod.classes.successClass,
            errorClass = configuration.errorClass
                         || nod.classes.errorClass;

        switch (status) {
        case nod.constants.VALID:
            nod.removeClass(errorClass, parent);
            nod.addClass(successClass, parent);
            break;

        case nod.constants.INVALID:
            nod.removeClass(successClass, parent);
            nod.addClass(errorClass, parent);
            break;
        }
    }

    // Updates the text and class according to the status.
    function updateSpan (status, errorMessage) {
        var successMessageClass = configuration.successMessageClass
                                  || nod.classes.successMessageClass,
          errorMessageClass   = configuration.errorMessageClass
                                || nod.classes.errorMessageClass;

        span.style.display = 'none';

        switch (status) {
        case nod.constants.VALID:
            nod.removeClass(errorMessageClass, span);
            nod.addClass(successMessageClass, span);

            if (configuration.successMessage) {
                span.textContent = configuration.successMessage;
                span.style.display = '';
            }

            break;

        case nod.constants.INVALID:
            nod.removeClass(successMessageClass, span);
            nod.addClass(errorMessageClass, span);
            span.textContent = errorMessage;
            span.style.display = '';
            break;
        }
    }

    function set (options) {
        var status              = options.result,
            errorMessage        = options.errorMessage;

        // If the dom is showing an invalid message, we want to update the dom
        // right away.
        if (_status === nod.constants.INVALID || configuration.delay === 0) {
            _status = status;
            updateParent(status);
            updateSpan(status, errorMessage);
        } else {
            // If the dom shows either an unchecked or a valid state we won't
            // rush to tell them they are wrong. Instead we use a method similar
            // to "debouncing" the update
            clearTimeout(pendingUpdate);

            pendingUpdate = setTimeout(function () {
                _status = status;
                updateParent(status);
                updateSpan(status, errorMessage);
                pendingUpdate = null;
            }, configuration.delay || nod.constants.DELAY);
        }
    }

    function subscribeTo (id) {
        mediator.subscribe(id, set);
    }

    function setMessageOptions (parentContainer, message) {
        if (parentContainer) {
            parent = nod.getElement(parentContainer);
        }

        if (message) {
            span.parentNode.removeChild(span);      // Remove old span.
            span = nod.getElement(message);         // Set the new one.
            customSpan = true;                      // So we won't delete it.
        }
    }

    function dispose () {
        // First remove any classes
        nod.removeClass(configuration.errorClass
                        || nod.classes.errorClass, parent);
        nod.removeClass(configuration.successClass
                        || nod.classes.successClass, parent);

        // Then we remove the span if it wasn't one that was set by the user.
        // If `noDom` was used, then there won't be any to remove.
        if (span.parentNode && !customSpan) {
            span.parentNode.removeChild(span);
        }
    }

    return {
        subscribeTo:        subscribeTo,
        element:            element,
        setMessageOptions:  setMessageOptions,
        dispose:            dispose,
        set:                set
    };
};

nod.makeEventEmitter = function (mediator) {
    var customEvent;

    function emit (options) {
        if (CustomEvent) {
            customEvent = new CustomEvent('nod.validation', {detail: options});

            options.element.dispatchEvent(customEvent);
        } else {
            var errorMsg = 'nod.validate tried to fire a custom event, but ' +
                           'the browser does not support CustomEvent\'s';

            throw Error(errorMsg);
        }
    }

    function subscribe (id) {
        mediator.subscribe(id, emit);
    }

    return {
        subscribe: subscribe
    };
};

/**
 * getElement
 *
 * Returns the first element targeted by the selector. (see `getElements`)
 */
nod.getElement = function (selector) {
    return nod.getElements(selector)[0];
};

/**
 * getElements
 *
 * Takes some sort of selector, and returns an array of element(s). The applied
 * selector can be one of:
 *
 * - Css type selector (e.g., ".foo")
 * - A jQuery element (e.g., $('.foo))
 * - A single raw dom element (e.g., document.getElementById('foo'))
 * - A list of raw dom element (e.g., $('.foo').get())
 */
nod.getElements = function (selector) {
    if (!selector) {
        return [];
    }

    // Normal css type selector is assumed
    if (typeof selector === 'string') {
        // If we have jQuery, then we use that to create a dom list for us.
        if (__webpack_provided_window_dot_jQuery) {
            return __webpack_provided_window_dot_jQuery(selector).get();
        }

        // If not, then we do it the manual way.
        var nodeList = document.querySelectorAll(selector);

        return [].map.call(nodeList, function (el) {
            return el;
        });
    }

    // if user gave us jQuery elements
    if (selector.jquery) {
        return selector.get();
    }

    // Raw DOM element
    if (selector.nodeType === 1) {
        return [selector];
    }

    if (Array.isArray(selector)) {
        var result = [];

        selector.forEach(function (sel) {
            var elements = nod.getElements(sel);

            result = result.concat(elements);
        });

        return result;
    }

    throw Error('Unknown type of elements in your `selector`: ' + selector);
};

nod.getCheckFunction = function (metric) {
    if (typeof metric.validate === 'function') {
        return metric.validate;
    }

    if (metric.validate instanceof RegExp) {
        return nod.checkFunctions.regexp(metric.validate);
    }

    var args   = metric.validate.split(':'),
        fnName = args.shift();

    if (fnName === 'one-of' || fnName === 'only-one-of' ||
        fnName === 'same-as' || fnName === 'some-radio') {
        args.push(metric.selector);
    }

    if (typeof nod.checkFunctions[fnName] === 'function') {
        return nod.checkFunctions[fnName].apply(null, args);
    } else {
        var errorMsg = 'Couldn\'t find your validator function "' +
                       fnName + '" for "' + metric.selector + '"';

        throw Error(errorMsg);
    }
};

// Collection of built-in check functions
nod.checkFunctions = {
    'presence': function () {
        return function presence (callback, value) {
            callback(value.length > 0);
        };
    },

    'exact': function (exactValue) {
        return function exact (callback, value) {
            callback(value === exactValue);
        };
    },

    'contains': function (containsValue) {
        return function contains (callback, value) {
            callback(value.indexOf(containsValue) > -1);
        };
    },

    'not': function (exactValue) {
        return function not (callback, value) {
            callback(value !== exactValue);
        };
    },

    'min-length': function (minimumLength) {
        return function minLength (callback, value) {
            callback(value.length >= minimumLength);
        };
    },

    'max-length': function (maximumLength) {
        return function maxLength (callback, value) {
            callback(value.length <= maximumLength);
        };
    },

    'exact-length': function (exactLen) {
        return function exactLength (callback, value) {
            callback(value.length === +exactLen);
        };
    },

    'between-length': function (minimumLength, maximumLength) {
        return function betweenLength (callback, value) {
            var aboveMinLength = value.length >= minimumLength,
                belowMaxLength = value.length <= maximumLength;

            callback(aboveMinLength && belowMaxLength);
        };
    },

    'max-number': function (maximumNumber) {
        return function maxNumber (callback, value) {
            callback(+value <= maximumNumber);
        };
    },

    'min-number': function (minimumNumber) {
        return function minNumber (callback, value) {
            callback(+value >= minimumNumber);
        };
    },

    'between-number': function (minimumNumber, maximumNumber) {
        return function betweenNumber (callback, value) {
            callback(+value >= minimumNumber && +value <= maximumNumber);
        };
    },

    'integer': function () {
        return function (callback, value) {
            callback(/^\s*\d+\s*$/.test(value));
        };
    },

    'float': function () {
        return function (callback, value) {
            callback(/^[-+]?[0-9]+(\.[0-9]+)?$/.test(value));
        };
    },

    'same-as': function (selector) {
        var sameAsElement = nod.getElement(selector);

        return function sameAs (callback, value, options) {
            // 'same-as' is special, in that if it is triggered by another field
            // (the one it should be similar to), and the field itself is empty,
            // then it bails out without a check. This is to avoid showing an
            // error message before the user has even reached the element.
            if (options &&
                options.event &&
                options.event.target &&
                options.event.target !== options.element &&
                value.length === 0) {
                return;
            }

            callback(value === sameAsElement.value);
        };
    },

    'one-of': function (selector) {
        var elements = nod.getElements(selector);

        function getValues () {
            return elements.reduce(function (memo, element) {
                return memo + '' + (element.value || '');
            }, '');
        }

        return function oneOf (callback) {
            callback(getValues().trim().length > 0);
        };
    },

    'only-one-of': function (selector) {
        var elements = nod.getElements(selector);

        return function onlyOneOf (callback, value) {
            var numOfValues = 0;

            elements.forEach(function (element) {
                if (element.value) {
                    numOfValues++;
                }
            });

            callback(numOfValues === 1);
        };
    },

    'checked': function () {
        return function checked (callback, value, options) {
            callback(options.element.checked);
        };
    },

    'some-radio': function (selector) {
        var radioElements = nod.getElements(selector);

        return function someRadio (callback, value, options) {
            var result = radioElements.reduce(function (memo, element) {
                return memo || element.checked;
            }, false);

            callback(result);
        };
    },

    'regexp': function (reg) {
        return function regExp (callback, value) {
            callback(reg.test(value));
        };
    },

    'email': function () {
        var RFC822 = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/;

        return function email (callback, value) {
            callback(RFC822.test(value));
        };
    }
};

// CustomEvent polyfill for older IE versions. Taken from
// github.com/d4tocchini/customevent-polyfill/blob/master/CustomEvent.js
try {
    new CustomEvent("test");
} catch (e) {
    var CustomEvent = function (event, params) {
        var evt;
        params = params || {
            bubbles: false,
            cancelable: false,
            detail: undefined
        };

        evt = document.createEvent("CustomEvent");
        evt.initCustomEvent(event,
                            params.bubbles,
                            params.cancelable,
                            params.detail);
        return evt;
    };

    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
}

// Safely export nod.
if (typeof module !== 'undefined' && module.exports) {
    module.exports = nod;
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = classifyForm;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Validators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return insertStateHiddenField; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_string_capitalize__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_string_capitalize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_string_capitalize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_string_camelCase__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_string_camelCase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_string_camelCase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_collection_contains__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_collection_contains___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_collection_contains__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nod__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_forms__ = __webpack_require__(371);
var inputTagNames=['input','select','textarea'];/**
 * Apply class name to an input element on its type
 * @param {object} input
 * @param {string} formFieldClass
 * @return {object} Element itself
 */function classifyInput(input,formFieldClass){var $input=__WEBPACK_IMPORTED_MODULE_3_jquery___default()(input);var $formField=$input.parent('.'+formFieldClass);var tagName=$input.prop('tagName').toLowerCase();var className=formFieldClass+'--'+tagName;var specificClassName=void 0;// Input can be text/checkbox/radio etc...
if(tagName==='input'){var inputType=$input.prop('type');if(__WEBPACK_IMPORTED_MODULE_2_lodash_collection_contains___default()(['radio','checkbox','submit'],inputType)){// ie: .form-field--checkbox, .form-field--radio
className=formFieldClass+'--'+__WEBPACK_IMPORTED_MODULE_1_lodash_string_camelCase___default()(inputType)}else{// ie: .form-field--input .form-field--inputText
specificClassName=''+className+__WEBPACK_IMPORTED_MODULE_0_lodash_string_capitalize___default()(inputType)}}// Apply class modifier
return $formField.addClass(className).addClass(specificClassName)}/**
 * Apply class name to each input element in a form based on its type
 * @example
 * // Before
 * <form id="form">
 *     <div class="form-field">
 *         <input type="text">
 *     </div>
 *     <div class="form-field">
 *         <select>...</select>
 *     </div>
 * </form>
 *
 * classifyForm('#form', { formFieldClass: 'form-field' });
 *
 * // After
 * <div class="form-field form-field--input form-field--inputText">...</div>
 * <div class="form-field form-field--select">...</div>
 *
 * @param {string|object} formSelector - selector or element
 * @param {object} options
 * @return {jQuery} Element itself
 */function classifyForm(formSelector){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var $form=__WEBPACK_IMPORTED_MODULE_3_jquery___default()(formSelector);var $inputs=$form.find(inputTagNames.join(', '));// Obtain options
var _options$formFieldCla=options.formFieldClass,formFieldClass=_options$formFieldCla===undefined?'form-field':_options$formFieldCla;// Classify each input in a form
$inputs.each(function(__,input){classifyInput(input,formFieldClass)});return $form}/**
 * Get id from given field
 * @param {object} $field JQuery field object
 * @return {string}
 */function getFieldId($field){var fieldId=$field.prop('name').match(/(\[.*\])/);if(fieldId&&fieldId.length!==0){return fieldId[0]}return''}/**
 * Insert hidden field after State/Province field
 * @param {object} $stateField JQuery field object
 */function insertStateHiddenField($stateField){var fieldId=getFieldId($stateField);var stateFieldAttrs={type:'hidden',name:'FormFieldIsText'+fieldId,value:'1'};$stateField.after(__WEBPACK_IMPORTED_MODULE_3_jquery___default()('<input />',stateFieldAttrs))}var Validators={/**
     * Sets up a new validation when the form is dirty
     * @param validator
     * @param field
     */setEmailValidation:function setEmailValidation(validator,field){if(field){validator.add({selector:field,validate:function validate(cb,val){var result=__WEBPACK_IMPORTED_MODULE_5__models_forms__["a" /* default */].email(val);cb(result)},errorMessage:'You must enter a valid email.'})}},/**
     * Validate password fields
     * @param validator
     * @param passwordSelector
     * @param password2Selector
     * @param requirements
     * @param isOptional
     */setPasswordValidation:function setPasswordValidation(validator,passwordSelector,password2Selector,requirements,isOptional){var $password=__WEBPACK_IMPORTED_MODULE_3_jquery___default()(passwordSelector);var passwordValidations=[{selector:passwordSelector,validate:function validate(cb,val){var result=val.length;if(isOptional){return cb(true)}cb(result)},errorMessage:'You must enter a password.'},{selector:passwordSelector,validate:function validate(cb,val){var result=val.match(new RegExp(requirements.alpha))&&val.match(new RegExp(requirements.numeric))&&val.length>=requirements.minlength;// If optional and nothing entered, it is valid
if(isOptional&&val.length===0){return cb(true)}cb(result)},errorMessage:requirements.error},{selector:password2Selector,validate:function validate(cb,val){var result=val.length;if(isOptional){return cb(true)}cb(result)},errorMessage:'You must enter a password.'},{selector:password2Selector,validate:function validate(cb,val){var result=val===$password.val();cb(result)},errorMessage:'Your passwords do not match.'}];validator.add(passwordValidations)},/**
     * Validate password fields
     * @param {Nod} validator
     * @param {Object} selectors
     * @param {string} selectors.errorSelector
     * @param {string} selectors.fieldsetSelector
     * @param {string} selectors.formSelector
     * @param {string} selectors.maxPriceSelector
     * @param {string} selectors.minPriceSelector
     */setMinMaxPriceValidation:function setMinMaxPriceValidation(validator,selectors){var errorSelector=selectors.errorSelector,fieldsetSelector=selectors.fieldsetSelector,formSelector=selectors.formSelector,maxPriceSelector=selectors.maxPriceSelector,minPriceSelector=selectors.minPriceSelector;validator.configure({form:formSelector,preventSubmit:true,successClass:'_'// KLUDGE: Don't apply success class
});validator.add({errorMessage:'Min price must be less than max. price.',selector:minPriceSelector,validate:'min-max:'+minPriceSelector+':'+maxPriceSelector});validator.add({errorMessage:'Min price must be less than max. price.',selector:maxPriceSelector,validate:'min-max:'+minPriceSelector+':'+maxPriceSelector});validator.add({errorMessage:'Max. price is required.',selector:maxPriceSelector,validate:'presence'});validator.add({errorMessage:'Min. price is required.',selector:minPriceSelector,validate:'presence'});validator.add({errorMessage:'Input must be greater than 0.',selector:[minPriceSelector,maxPriceSelector],validate:'min-number:0'});validator.setMessageOptions({selector:[minPriceSelector,maxPriceSelector],parent:fieldsetSelector,errorSpan:errorSelector})},/**
     * Sets up a new validation when the form is dirty
     * @param validator
     * @param field
     */setStateCountryValidation:function setStateCountryValidation(validator,field){if(field){validator.add({selector:field,validate:'presence',errorMessage:'The \'State/Province\' field cannot be blank.'})}},/**
     * Removes classes from dirty form if previously checked
     * @param field
     */cleanUpStateValidation:function cleanUpStateValidation(field){var $fieldClassElement=__WEBPACK_IMPORTED_MODULE_3_jquery___default()('[data-type="'+field.data('field-type')+'"]');Object.keys(__WEBPACK_IMPORTED_MODULE_4__nod__["a" /* default */].classes).forEach(function(value){if($fieldClassElement.hasClass(__WEBPACK_IMPORTED_MODULE_4__nod__["a" /* default */].classes[value])){$fieldClassElement.removeClass(__WEBPACK_IMPORTED_MODULE_4__nod__["a" /* default */].classes[value])}})}};

/***/ }),

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(379);


/***/ }),

/***/ 378:
/***/ (function(module, exports) {

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Native method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates a function that invokes `func` with the `this` binding of the
 * created function and arguments from `start` and beyond provided as an array.
 *
 * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/Web/JavaScript/Reference/Functions/rest_parameters).
 *
 * @static
 * @memberOf _
 * @category Function
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var say = _.restParam(function(what, names) {
 *   return what + ' ' + _.initial(names).join(', ') +
 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
 * });
 *
 * say('hello', 'fred', 'barney', 'pebbles');
 * // => 'hello fred, barney, & pebbles'
 */
function restParam(func, start) {
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        rest = Array(length);

    while (++index < length) {
      rest[index] = args[start + index];
    }
    switch (start) {
      case 0: return func.call(this, rest);
      case 1: return func.call(this, args[0], rest);
      case 2: return func.call(this, args[0], args[1], rest);
    }
    var otherArgs = Array(start + 1);
    index = -1;
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = rest;
    return func.apply(this, otherArgs);
  };
}

module.exports = restParam;


/***/ }),

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(373),
    getLength = __webpack_require__(98),
    isArray = __webpack_require__(16),
    isIterateeCall = __webpack_require__(239),
    isLength = __webpack_require__(46),
    isString = __webpack_require__(242),
    values = __webpack_require__(383);

/* Native method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Checks if `target` is in `collection` using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
 * for equality comparisons. If `fromIndex` is negative, it's used as the offset
 * from the end of `collection`.
 *
 * @static
 * @memberOf _
 * @alias contains, include
 * @category Collection
 * @param {Array|Object|string} collection The collection to search.
 * @param {*} target The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @param- {Object} [guard] Enables use as a callback for functions like `_.reduce`.
 * @returns {boolean} Returns `true` if a matching element is found, else `false`.
 * @example
 *
 * _.includes([1, 2, 3], 1);
 * // => true
 *
 * _.includes([1, 2, 3], 1, 2);
 * // => false
 *
 * _.includes({ 'user': 'fred', 'age': 40 }, 'fred');
 * // => true
 *
 * _.includes('pebbles', 'eb');
 * // => true
 */
function includes(collection, target, fromIndex, guard) {
  var length = collection ? getLength(collection) : 0;
  if (!isLength(length)) {
    collection = values(collection);
    length = collection.length;
  }
  if (typeof fromIndex != 'number' || (guard && isIterateeCall(target, fromIndex, guard))) {
    fromIndex = 0;
  } else {
    fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : (fromIndex || 0);
  }
  return (typeof collection == 'string' || !isArray(collection) && isString(collection))
    ? (fromIndex <= length && collection.indexOf(target, fromIndex) > -1)
    : (!!length && baseIndexOf(collection, target, fromIndex) > -1);
}

module.exports = includes;


/***/ }),

/***/ 380:
/***/ (function(module, exports) {

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  var index = -1,
      length = props.length,
      result = Array(length);

  while (++index < length) {
    result[index] = object[props[index]];
  }
  return result;
}

module.exports = baseValues;


/***/ }),

/***/ 381:
/***/ (function(module, exports, __webpack_require__) {

var deburr = __webpack_require__(386),
    words = __webpack_require__(387);

/**
 * Creates a function that produces compound words out of the words in a
 * given string.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */
function createCompounder(callback) {
  return function(string) {
    var index = -1,
        array = words(deburr(string)),
        length = array.length,
        result = '';

    while (++index < length) {
      result = callback(result, array[index], index);
    }
    return result;
  };
}

module.exports = createCompounder;


/***/ }),

/***/ 382:
/***/ (function(module, exports) {

/**
 * Gets the index at which the first occurrence of `NaN` is found in `array`.
 *
 * @private
 * @param {Array} array The array to search.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched `NaN`, else `-1`.
 */
function indexOfNaN(array, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 0 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    var other = array[index];
    if (other !== other) {
      return index;
    }
  }
  return -1;
}

module.exports = indexOfNaN;


/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

var baseValues = __webpack_require__(380),
    keys = __webpack_require__(45);

/**
 * Creates an array of the own enumerable property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return baseValues(object, keys(object));
}

module.exports = values;


/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

var createCompounder = __webpack_require__(381);

/**
 * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
 *
 * @static
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the camel cased string.
 * @example
 *
 * _.camelCase('Foo Bar');
 * // => 'fooBar'
 *
 * _.camelCase('--foo-bar');
 * // => 'fooBar'
 *
 * _.camelCase('__foo_bar__');
 * // => 'fooBar'
 */
var camelCase = createCompounder(function(result, word, index) {
  word = word.toLowerCase();
  return result + (index ? (word.charAt(0).toUpperCase() + word.slice(1)) : word);
});

module.exports = camelCase;


/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(240);

/**
 * Capitalizes the first character of `string`.
 *
 * @static
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to capitalize.
 * @returns {string} Returns the capitalized string.
 * @example
 *
 * _.capitalize('fred');
 * // => 'Fred'
 */
function capitalize(string) {
  string = baseToString(string);
  return string && (string.charAt(0).toUpperCase() + string.slice(1));
}

module.exports = capitalize;


/***/ }),

/***/ 386:
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(240),
    isIterateeCall = __webpack_require__(239);

/** Used to match words to create compound words. */
var reWords = (function() {
  var upper = '[A-Z\\xc0-\\xd6\\xd8-\\xde]',
      lower = '[a-z\\xdf-\\xf6\\xf8-\\xff]+';

  return RegExp(upper + '+(?=' + upper + lower + ')|' + upper + '?' + lower + '|' + upper + '+|[0-9]+', 'g');
}());

/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string, pattern, guard) {
  if (guard && isIterateeCall(string, pattern, guard)) {
    pattern = undefined;
  }
  string = baseToString(string);
  return string.match(pattern || reWords) || [];
}

module.exports = words;


/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(398);


/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CollapsibleEvents */
/* unused harmony export Collapsible */
/* harmony export (immutable) */ __webpack_exports__["a"] = collapsibleFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_object_extend__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_object_extend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_object_extend__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__media_query_list__ = __webpack_require__(395);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if('value'in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}var PLUGIN_KEY='collapsible';var CollapsibleEvents={open:'open.collapsible',close:'close.collapsible',toggle:'toggle.collapsible',click:'click.collapsible'};var CollapsibleState={closed:'closed',open:'open'};function prependHash(id){if(id&&id.indexOf('#')===0){return id}return'#'+id}function optionsFromData($element){return{disabledBreakpoint:$element.data(PLUGIN_KEY+'-disabled-breakpoint'),disabledState:$element.data(PLUGIN_KEY+'-disabled-state'),enabledState:$element.data(PLUGIN_KEY+'-enabled-state'),openClassName:$element.data(PLUGIN_KEY+'-open-class-name')}}/**
 * Collapse/Expand toggle
 */var Collapsible=function(){/**
     * @param {jQuery} $toggle - Trigger button
     * @param {jQuery} $target - Content to collapse / expand
     * @param {Object} [options] - Configurable options
     * @param {Object} [options.$context]
     * @param {Object} [options.disabledBreakpoint]
     * @param {Object} [options.disabledState]
     * @param {Object} [options.enabledState]
     * @param {Object} [options.openClassName]
     * @example
     *
     * <button id="#more">Collapse</button>
     * <div id="content">...</div>
     *
     * new Collapsible($('#more'), $('#content'));
     */function Collapsible($toggle,$target){var _ref=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{},disabledBreakpoint=_ref.disabledBreakpoint,disabledState=_ref.disabledState,enabledState=_ref.enabledState,_ref$openClassName=_ref.openClassName,openClassName=_ref$openClassName===undefined?'is-open':_ref$openClassName;_classCallCheck(this,Collapsible);this.$toggle=$toggle;this.$target=$target;this.targetId=$target.attr('id');this.openClassName=openClassName;this.disabledState=disabledState;this.enabledState=enabledState;if(disabledBreakpoint){this.disabledMediaQueryList=__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__media_query_list__["a" /* default */])(disabledBreakpoint)}if(this.disabledMediaQueryList){this.disabled=this.disabledMediaQueryList.matches}else{this.disabled=false}// Auto-bind
this.onClicked=this.onClicked.bind(this);this.onDisabledMediaQueryListMatch=this.onDisabledMediaQueryListMatch.bind(this);// Assign DOM attributes
this.$target.attr('aria-hidden',this.isCollapsed);this.$toggle.attr('aria-controls',$target.attr('id')).attr('aria-expanded',this.isOpen);// Listen
this.bindEvents()}Collapsible.prototype.open=function open(){var _ref2=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},_ref2$notify=_ref2.notify,notify=_ref2$notify===undefined?true:_ref2$notify;this.$toggle.addClass(this.openClassName).attr('aria-expanded',true);this.$target.addClass(this.openClassName).attr('aria-hidden',false);if(notify){this.$toggle.trigger(CollapsibleEvents.open,[this]);this.$toggle.trigger(CollapsibleEvents.toggle,[this])}};Collapsible.prototype.close=function close(){var _ref3=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},_ref3$notify=_ref3.notify,notify=_ref3$notify===undefined?true:_ref3$notify;this.$toggle.removeClass(this.openClassName).attr('aria-expanded',false);this.$target.removeClass(this.openClassName).attr('aria-hidden',true);if(notify){this.$toggle.trigger(CollapsibleEvents.close,[this]);this.$toggle.trigger(CollapsibleEvents.toggle,[this])}};Collapsible.prototype.toggle=function toggle(){if(this.isCollapsed){this.open()}else{this.close()}};Collapsible.prototype.toggleByState=function toggleByState(state){for(var _len=arguments.length,args=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){args[_key-1]=arguments[_key]}switch(state){case CollapsibleState.open:return this.open.apply(this,args);case CollapsibleState.closed:return this.close.apply(this,args);default:return undefined;}};Collapsible.prototype.hasCollapsible=function hasCollapsible(collapsibleInstance){return __WEBPACK_IMPORTED_MODULE_1_jquery___default.a.contains(this.$target.get(0),collapsibleInstance.$target.get(0))};Collapsible.prototype.bindEvents=function bindEvents(){this.$toggle.on(CollapsibleEvents.click,this.onClicked);if(this.disabledMediaQueryList&&this.disabledMediaQueryList.addListener){this.disabledMediaQueryList.addListener(this.onDisabledMediaQueryListMatch)}};Collapsible.prototype.unbindEvents=function unbindEvents(){this.$toggle.off(CollapsibleEvents.click,this.onClicked);if(this.disabledMediaQueryList&&this.disabledMediaQueryList.removeListener){this.disabledMediaQueryList.removeListener(this.onDisabledMediaQueryListMatch)}};Collapsible.prototype.onClicked=function onClicked(event){if(this.disabled){return}event.preventDefault();this.toggle()};Collapsible.prototype.onDisabledMediaQueryListMatch=function onDisabledMediaQueryListMatch(media){this.disabled=media.matches};_createClass(Collapsible,[{key:'isCollapsed',get:function get(){return!this.$target.hasClass(this.openClassName)||this.$target.is(':hidden')}},{key:'isOpen',get:function get(){return!this.isCollapsed}},{key:'disabled',set:function set(disabled){this._disabled=disabled;if(disabled){this.toggleByState(this.disabledState)}else{this.toggleByState(this.enabledState)}},get:function get(){return this._disabled}}]);return Collapsible}();/**
 * Convenience method for constructing Collapsible instance
 *
 * @param {string} [selector]
 * @param {Object} [options]
 * @param {Object} [options.$context]
 * @param {Object} [options.disabledBreakpoint]
 * @param {Object} [options.disabledState]
 * @param {Object} [options.enabledState]
 * @param {Object} [options.openClassName]
 * @return {Array} array of Collapsible instances
 *
 * @example
 * <a href="#content" data-collapsible>Collapse</a>
 * <div id="content">...</div>
 *
 * collapsibleFactory();
 */function collapsibleFactory(){var selector=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'[data-'+PLUGIN_KEY+']';var overrideOptions=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var $collapsibles=__WEBPACK_IMPORTED_MODULE_1_jquery___default()(selector,overrideOptions.$context);return $collapsibles.map(function(index,element){var $toggle=__WEBPACK_IMPORTED_MODULE_1_jquery___default()(element);var instanceKey=PLUGIN_KEY+'-instance';var cachedCollapsible=$toggle.data(instanceKey);if(cachedCollapsible instanceof Collapsible){return cachedCollapsible}var targetId=prependHash($toggle.data(PLUGIN_KEY)||$toggle.data(PLUGIN_KEY+'-target')||$toggle.attr('href'));var options=__WEBPACK_IMPORTED_MODULE_0_lodash_object_extend___default()(optionsFromData($toggle),overrideOptions);var collapsible=new Collapsible($toggle,__WEBPACK_IMPORTED_MODULE_1_jquery___default()(targetId),options);$toggle.data(instanceKey,collapsible);return collapsible}).toArray()}

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mediaQueryListFactory;
/*
 * Remember to update /assets/scss/settings/global/screensizes/screensizes.scss
 * if you decide to change breakpoint values
 */var breakpointSizes={large:1261,medium:801,small:551};/**
 * Create MediaQueryList using breakpoint name
 * @param {string} breakpointName
 * @return {MediaQueryList|null}
 */function mediaQueryListFactory(breakpointName){if(!breakpointName||!window.matchMedia){return null}var breakpoint=breakpointSizes[breakpointName];var mediaQuery="(min-width: "+breakpoint+"px)";var mediaQueryList=window.matchMedia(mediaQuery);return mediaQueryList}

/***/ }),

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

var keys = __webpack_require__(45);

/**
 * A specialized version of `_.assign` for customizing assigned values without
 * support for argument juggling, multiple sources, and `this` binding `customizer`
 * functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {Function} customizer The function to customize assigned values.
 * @returns {Object} Returns `object`.
 */
function assignWith(object, source, customizer) {
  var index = -1,
      props = keys(source),
      length = props.length;

  while (++index < length) {
    var key = props[index],
        value = object[key],
        result = customizer(value, source[key], key, object, source);

    if ((result === result ? (result !== value) : (value === value)) ||
        (value === undefined && !(key in object))) {
      object[key] = result;
    }
  }
  return object;
}

module.exports = assignWith;


/***/ }),

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

var bindCallback = __webpack_require__(97),
    isIterateeCall = __webpack_require__(239),
    restParam = __webpack_require__(378);

/**
 * Creates a `_.assign`, `_.defaults`, or `_.merge` function.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return restParam(function(object, sources) {
    var index = -1,
        length = object == null ? 0 : sources.length,
        customizer = length > 2 ? sources[length - 2] : undefined,
        guard = length > 2 ? sources[2] : undefined,
        thisArg = length > 1 ? sources[length - 1] : undefined;

    if (typeof customizer == 'function') {
      customizer = bindCallback(customizer, thisArg, 5);
      length -= 2;
    } else {
      customizer = typeof thisArg == 'function' ? thisArg : undefined;
      length -= (customizer ? 1 : 0);
    }
    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

var assignWith = __webpack_require__(396),
    baseAssign = __webpack_require__(245),
    createAssigner = __webpack_require__(397);

/**
 * Assigns own enumerable properties of source object(s) to the destination
 * object. Subsequent sources overwrite property assignments of previous sources.
 * If `customizer` is provided it's invoked to produce the assigned values.
 * The `customizer` is bound to `thisArg` and invoked with five arguments:
 * (objectValue, sourceValue, key, object, source).
 *
 * **Note:** This method mutates `object` and is based on
 * [`Object.assign`](http://ecma-international.org/ecma-262/6.0/#sec-object.assign).
 *
 * @static
 * @memberOf _
 * @alias extend
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {*} [thisArg] The `this` binding of `customizer`.
 * @returns {Object} Returns `object`.
 * @example
 *
 * _.assign({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' });
 * // => { 'user': 'fred', 'age': 40 }
 *
 * // using a customizer callback
 * var defaults = _.partialRight(_.assign, function(value, other) {
 *   return _.isUndefined(value) ? other : value;
 * });
 *
 * defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
 * // => { 'user': 'barney', 'age': 36 }
 */
var assign = createAssigner(function(object, source, customizer) {
  return customizer
    ? assignWith(object, source, customizer)
    : baseAssign(object, source);
});

module.exports = assign;


/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* eslint-disable space-before-function-paren *//* eslint-disable padded-blocks *//* eslint-disable indent *//* eslint-disable func-names *//* harmony default export */ __webpack_exports__["a"] = (function(){// SideBar Toggle Mobile View
if(__WEBPACK_IMPORTED_MODULE_0_jquery___default()('#sidebar-toggle').length){__WEBPACK_IMPORTED_MODULE_0_jquery___default()('#sidebar-toggle').click(function(){if(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).find('i').hasClass('fa-plus')){__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.page-sidebar > nav').fadeIn(200);if(__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.page-sidebar > nav').length){__WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).scrollTop(__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.page-sidebar > nav').offset().top-50)}__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).find('i').attr('class','fa fa-minus')}else if(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).find('i').hasClass('fa-minus')){if(__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.page-sidebar > nav').length){__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.page-sidebar > nav').fadeOut(200)}__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).find('i').attr('class','fa fa-plus')}})}});

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* eslint-disable space-before-function-paren *//* eslint-disable indent *//* eslint-disable func-names *//* eslint-disable no-undef *//* eslint-disable eqeqeq *//* harmony default export */ __webpack_exports__["a"] = (function(){__WEBPACK_IMPORTED_MODULE_0_jquery___default()('ul.all-categories-list li').each(function(){var breadLink=__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.page-type-product #breadcrumbs-wrapper ul li.breadcrumb.is-active').prev('.breadcrumb').children('a').attr('href');if(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).children('a').attr('href')==window.location||__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).children('a').attr('href')==window.location.pathname){__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).addClass('current-cat');__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).children('.dropdown-category-list').addClass('cat-expanded').siblings('i.fa.fa-caret-down').addClass('is-clicked');__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).parents('.dropdown-category-list').addClass('cat-expanded').siblings('i.fa.fa-caret-down').addClass('is-clicked')}if(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).children('a').attr('href')==breadLink){__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).addClass('current-cat');__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).parents('.dropdown-category-list').addClass('cat-expanded').siblings('i.fa.fa-caret-down').addClass('is-clicked')}});__WEBPACK_IMPORTED_MODULE_0_jquery___default()('ul.all-categories-list i.fa.fa-caret-down').click(function(){/* Act on the event */__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).toggleClass('is-clicked');__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).siblings('ul.dropdown-category-list').toggleClass('cat-expanded')})});

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* eslint-disable space-before-function-paren *//* eslint-disable indent *//* eslint-disable comma-dangle *//* eslint-disable no-undef *//* harmony default export */ __webpack_exports__["a"] = (function(){__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.productView-image').magnificPopup({type:'image',closeOnContentClick:true,image:{verticalFit:true},mainClass:'mfp-with-zoom',zoom:{enabled:true,// By default it's false, so don't forget to enable it
duration:300,// duration of the effect, in milliseconds
easing:'ease-in-out'}})});

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_nod__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_collapsible__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_models_forms__ = __webpack_require__(371);
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}var _class=function(){function _class($reviewForm){_classCallCheck(this,_class);this.validator=__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_nod__["a" /* default */])({submit:$reviewForm.find('input[type="submit"]')});this.$reviewsContent=__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.productView-description');this.$collapsible=__WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-collapsible]',this.$reviewsContent);this.initLinkBind();this.injectPaginationLink();this.collapseReviews()}/**
     * On initial page load, the user clicks on "(12 Reviews)" link
     * The browser jumps to the review page and should expand the reviews section
     */_class.prototype.initLinkBind=function initLinkBind(){var _this=this;__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.reviewLinkCount > a').click(function(event){event.preventDefault()});__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.reviewLinkCount').click(function(){__WEBPACK_IMPORTED_MODULE_0_jquery___default()('html, body').animate({scrollTop:_this.$reviewsContent.offset().top-76},600);var i=2;__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.tab').each(function(index){if(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).text().search('Product Reviews')!=-1){i=index+1}});if(!__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.productView-description .tabs li:nth-child('+i+')').hasClass('is-active')){__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.productView-description .tabs li:nth-child('+i+') a').trigger('click')}// $('.navPage-childList-item').each(function(index){
//     console.log( index + ": " + $( this ).text() );
// });
})};_class.prototype.collapseReviews=function collapseReviews(){// We're in paginating state, do not collapse
if(window.location.hash&&window.location.hash.indexOf('#product-reviews')===0){__WEBPACK_IMPORTED_MODULE_0_jquery___default()('html, body').animate({scrollTop:this.$reviewsContent.offset().top-76},600);if(!__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.productView-description .tabs li:nth-child(2)').hasClass('is-active')){__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.productView-description .tabs li:nth-child(2) a').trigger('click')}}// force collapse on page load
//this.$collapsible.trigger(CollapsibleEvents.click);
};/**
     * Inject ID into the pagination link
     */_class.prototype.injectPaginationLink=function injectPaginationLink(){var $nextLink=__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.pagination-item--next .pagination-link',this.$reviewsContent);var $prevLink=__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.pagination-item--previous .pagination-link',this.$reviewsContent);if($nextLink.length){$nextLink.attr('href',$nextLink.attr('href')+' #product-reviews')}if($prevLink.length){$prevLink.attr('href',$prevLink.attr('href')+' #product-reviews')}};_class.prototype.registerValidation=function registerValidation(){this.validator.add([{selector:'[name="revrating"]',validate:'presence',errorMessage:'The \'Rating\' field cannot be blank.'},{selector:'[name="revtitle"]',validate:'min-length:2',errorMessage:'The \'Review Subject\' field cannot be blank.'},{selector:'[name="revtext"]',validate:'min-length:2',errorMessage:'The \'Comments\' field cannot be blank.'},{selector:'[name="email"]',validate:function validate(cb,val){var result=__WEBPACK_IMPORTED_MODULE_3__common_models_forms__["a" /* default */].email(val);cb(result)},errorMessage:'Please use a valid email address, such as user@example.com.'}]);return this.validator};_class.prototype.validate=function validate(){return this.validator.performCheck()};return _class}();/* harmony default export */ __webpack_exports__["a"] = (_class);

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export VideoGallery */
/* harmony export (immutable) */ __webpack_exports__["a"] = videoGallery;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}var VideoGallery=function(){function VideoGallery($element){_classCallCheck(this,VideoGallery);this.$player=$element.find('[data-video-player]');this.$videos=$element.find('[data-video-item]');this.currentVideo={};this.bindEvents()}VideoGallery.prototype.selectNewVideo=function selectNewVideo(e){e.preventDefault();var $target=__WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.currentTarget);this.currentVideo={id:$target.data('video-id'),$selectedThumb:$target};this.setMainVideo();this.setActiveThumb()};VideoGallery.prototype.setMainVideo=function setMainVideo(){this.$player.attr('src','//www.youtube.com/embed/'+this.currentVideo.id)};VideoGallery.prototype.setActiveThumb=function setActiveThumb(){this.$videos.removeClass('is-active');this.currentVideo.$selectedThumb.addClass('is-active')};VideoGallery.prototype.bindEvents=function bindEvents(){this.$videos.on('click',this.selectNewVideo.bind(this))};return VideoGallery}();function videoGallery(){var pluginKey='video-gallery';var $videoGallery=__WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-'+pluginKey+']');$videoGallery.each(function(index,element){var $el=__WEBPACK_IMPORTED_MODULE_0_jquery___default()(element);var isInitialized=$el.data(pluginKey)instanceof VideoGallery;if(isInitialized){return}$el.data(pluginKey,new VideoGallery($el))})}

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_manager__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_reviews__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_collapsible__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_product_details__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_video_gallery__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_form_utils__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__halothemes_productViewMagnificPopup__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__halothemes_setActiveCategory__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__halothemes_sidebarToggleMobile__ = __webpack_require__(402);
function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')}return call&&(typeof call==='object'||typeof call==='function')?call:self}function _inherits(subClass,superClass){if(typeof superClass!=='function'&&superClass!==null){throw new TypeError('Super expression must either be null or a function, not '+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}/*
 Import all product specific js
 */var Product=function(_PageManager){_inherits(Product,_PageManager);function Product(){_classCallCheck(this,Product);var _this=_possibleConstructorReturn(this,_PageManager.call(this));_this.url=location.href;_this.$reviewLink=__WEBPACK_IMPORTED_MODULE_0_jquery___default()('[data-reveal-id="modal-review-form"]');return _this}Product.prototype.before=function before(next){var _this2=this;// Listen for foundation modal close events to sanitize URL after review.
__WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).on('close.fndtn.reveal',function(){if(_this2.url.indexOf('#writeReview')!==-1&&typeof window.history.replaceState==='function'){window.history.replaceState(null,document.title,window.location.pathname)}});next()};Product.prototype.loaded=function loaded(next){var validator=void 0;// Init collapsible
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__common_collapsible__["a" /* default */])();this.productDetails=new __WEBPACK_IMPORTED_MODULE_4__common_product_details__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.productView'),this.context);// HaloThemes functions
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__halothemes_setActiveCategory__["a" /* default */])();__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__halothemes_sidebarToggleMobile__["a" /* default */])();__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__halothemes_productViewMagnificPopup__["a" /* default */])();var slider=function slider(){var _ref;__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.pr_main').slick({slidesToShow:1,slidesToScroll:1,arrows:false,fade:true,verticalSwiping:false,asNavFor:'.pr_slick'});__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.pr_slick').slick({infinite:true,slidesToShow:5,slidesToScroll:1,asNavFor:'.pr_main',verticalSwiping:false,dots:false,focusOnSelect:true,nextArrow:'<div class="slick-next"><svg><use xlink:href="#icon-next"></use></svg></div>',prevArrow:'<div class="slick-prev"><svg><use xlink:href="#icon-prev"></use></svg></div>',responsive:[(_ref={breakpoint:991,settings:{slidesToShow:4,slidesToScroll:1,dots:false}},_ref['breakpoint']=768,_ref['settings']={slidesToShow:3,slidesToScroll:1,dots:false},_ref)]})};new slider;if(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).width()>1024){__WEBPACK_IMPORTED_MODULE_0_jquery___default()('.productView-images .productView-image').zoom()}// $('.form-field[data-product-attribute="swatch"] .form-radio').on('click', function() {
//     var number = $('.form-radio-swatch:checked').index('.productView-details input.form-radio-swatch');
//     $('.productView-thumbnail[data-slick-index="'+number+'"]').click();
//     console.log(number);
// });
// $('.form-field[data-product-attribute="set-select"]').change(function () {
//     var number_option = $('.form-option-select:selected').index('.productView-details option.form-option-select');
//     if (number_option < 0) {
//         number_option == 0;
//     }
//     $('.productView-thumbnail[data-slick-index="'+number_option+'"]').click();
// });
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__product_video_gallery__["a" /* default */])();var $reviewForm=__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__common_form_utils__["b" /* classifyForm */])('.writeReview-form');var review=new __WEBPACK_IMPORTED_MODULE_2__product_reviews__["a" /* default */]($reviewForm);__WEBPACK_IMPORTED_MODULE_0_jquery___default()('body').on('click','[data-reveal-id="modal-review-form"]',function(){validator=review.registerValidation()});$reviewForm.on('submit',function(){if(validator){validator.performCheck();return validator.areAll('valid')}return false});next()};Product.prototype.after=function after(next){this.productReviewHandler();next()};Product.prototype.productReviewHandler=function productReviewHandler(){if(this.url.indexOf('#writeReview')!==-1){this.$reviewLink.click()}};return Product}(__WEBPACK_IMPORTED_MODULE_1__page_manager__["a" /* default */]);/* harmony default export */ __webpack_exports__["default"] = (Product);

/***/ })

});
//# sourceMappingURL=theme-bundle.chunk.3.js.map
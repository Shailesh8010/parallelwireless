var gform;
gform || (document.addEventListener("gform_main_scripts_loaded", function() {
    gform.scriptsLoaded = !0
}), window.addEventListener("DOMContentLoaded", function() {
    gform.domLoaded = !0
}), gform = {
    domLoaded: !1,
    scriptsLoaded: !1,
    initializeOnLoaded: function(o) {
        gform.domLoaded && gform.scriptsLoaded ? o() : !gform.domLoaded && gform.scriptsLoaded ? window.addEventListener("DOMContentLoaded", o) : document.addEventListener("gform_main_scripts_loaded", o)
    },
    hooks: {
        action: {},
        filter: {}
    },
    addAction: function(o, n, r, t) {
        gform.addHook("action", o, n, r, t)
    },
    addFilter: function(o, n, r, t) {
        gform.addHook("filter", o, n, r, t)
    },
    doAction: function(o) {
        gform.doHook("action", o, arguments)
    },
    applyFilters: function(o) {
        return gform.doHook("filter", o, arguments)
    },
    removeAction: function(o, n) {
        gform.removeHook("action", o, n)
    },
    removeFilter: function(o, n, r) {
        gform.removeHook("filter", o, n, r)
    },
    addHook: function(o, n, r, t, i) {
        null == gform.hooks[o][n] && (gform.hooks[o][n] = []);
        var e = gform.hooks[o][n];
        null == i && (i = n + "_" + e.length), gform.hooks[o][n].push({
            tag: i,
            callable: r,
            priority: t = null == t ? 10 : t
        })
    },
    doHook: function(n, o, r) {
        var t;
        if (r = Array.prototype.slice.call(r, 1), null != gform.hooks[n][o] && ((o = gform.hooks[n][o]).sort(function(o, n) {
                return o.priority - n.priority
            }), o.forEach(function(o) {
                "function" != typeof(t = o.callable) && (t = window[t]), "action" == n ? t.apply(null, r) : r[0] = t.apply(null, r)
            })), "filter" == n) return r[0]
    },
    removeHook: function(o, n, t, i) {
        var r;
        null != gform.hooks[o][n] && (r = (r = gform.hooks[o][n]).filter(function(o, n, r) {
            return !!(null != i && i != o.tag || null != t && t != o.priority)
        }), gform.hooks[o][n] = r)
    }
});






var gform_i18n = {
    "datepicker": {
        "days": {
            "monday": "Mo",
            "tuesday": "Tu",
            "wednesday": "We",
            "thursday": "Th",
            "friday": "Fr",
            "saturday": "Sa",
            "sunday": "Su"
        },
        "months": {
            "january": "January",
            "february": "February",
            "march": "March",
            "april": "April",
            "may": "May",
            "june": "June",
            "july": "July",
            "august": "August",
            "september": "September",
            "october": "October",
            "november": "November",
            "december": "December"
        },
        "firstDay": 0,
        "iconText": "Select date"
    }
};
var gf_legacy_multi = [];
var gform_gravityforms = {
    "strings": {
        "invalid_file_extension": "This type of file is not allowed. Must be one of the following:",
        "delete_file": "Delete this file",
        "in_progress": "in progress",
        "file_exceeds_limit": "File exceeds size limit",
        "illegal_extension": "This type of file is not allowed.",
        "max_reached": "Maximum number of files reached",
        "unknown_error": "There was a problem while saving the file on the server",
        "currently_uploading": "Please wait for the uploading to complete",
        "cancel": "Cancel",
        "cancel_upload": "Cancel this upload",
        "cancelled": "Cancelled"
    },
    "vars": {
        "images_url": "https:\/\/www.parallelwireless.com\/wp-content\/plugins\/gravityforms\/images"
    }
};
var gf_global = {
    "gf_currency_config": {
        "name": "U.S. Dollar",
        "symbol_left": "$",
        "symbol_right": "",
        "symbol_padding": "",
        "thousand_separator": ",",
        "decimal_separator": ".",
        "decimals": 2,
        "code": "USD"
    },
    "base_url": "https:\/\/www.parallelwireless.com\/wp-content\/plugins\/gravityforms",
    "number_formats": [],
    "spinnerUrl": "https:\/\/www.parallelwireless.com\/wp-content\/plugins\/gravityforms\/images\/spinner.svg",
    "version_hash": "38b8b24d4b3090ed75a76e6b90eb4825",
    "strings": {
        "newRowAdded": "New row added.",
        "rowRemoved": "Row removed",
        "formSaved": "The form has been saved.  The content contains the link to return and complete the form."
    }
};

gform.initializeOnLoaded(function() {
    jQuery(document).on('gform_post_render', function(event, formId, currentPage) {
        if (formId == 56) {
            gf_global["number_formats"][56] = {
                "12": {
                    "price": false,
                    "value": false
                },
                "1": {
                    "price": false,
                    "value": false
                },
                "3": {
                    "price": false,
                    "value": false
                },
                "4": {
                    "price": false,
                    "value": false
                },
                "5": {
                    "price": false,
                    "value": false
                },
                "11": {
                    "price": false,
                    "value": false
                },
                "6": {
                    "price": false,
                    "value": false
                },
                "10": {
                    "price": false,
                    "value": false
                },
                "20": {
                    "price": false,
                    "value": false
                },
                "21": {
                    "price": false,
                    "value": false
                },
                "22": {
                    "price": false,
                    "value": false
                }
            };
            if (window['jQuery']) {
                if (!window['gf_form_conditional_logic']) window['gf_form_conditional_logic'] = new Array();
                window['gf_form_conditional_logic'][56] = {
                    logic: {
                        6: {
                            "field": {
                                "enabled": true,
                                "actionType": "show",
                                "logicType": "all",
                                "rules": [{
                                    "fieldId": "11.6",
                                    "operator": "is",
                                    "value": "United States"
                                }]
                            },
                            "nextButton": null,
                            "section": ""
                        }
                    },
                    dependents: {
                        6: [6]
                    },
                    animation: 0,
                    defaults: {
                        "1": {
                            "1.2": "",
                            "1.3": "",
                            "1.4": "",
                            "1.6": "",
                            "1.8": ""
                        },
                        "11": {
                            "11.1": "",
                            "11.2": "",
                            "11.3": "",
                            "11.4": "",
                            "11.5": "",
                            "11.6": ""
                        },
                        "6": {
                            "6.1": "",
                            "6.2": "",
                            "6.3": "",
                            "6.4": "",
                            "6.5": "",
                            "6.6": ""
                        }
                    },
                    fields: {
                        "12": [],
                        "1": [],
                        "3": [],
                        "4": [],
                        "5": [],
                        "11": [6],
                        "6": [],
                        "10": [],
                        "20": [],
                        "21": [],
                        "22": []
                    }
                };
                if (!window['gf_number_format']) window['gf_number_format'] = 'decimal_dot';
                jQuery(document).ready(function() {
                    gform.utils.trigger({
                        event: 'gform/conditionalLogic/init/start',
                        native: false,
                        data: {
                            formId: 56,
                            fields: null,
                            isInit: true
                        }
                    });
                    window['gformInitPriceFields']();
                    gf_apply_rules(56, [6], true);
                    jQuery('#gform_wrapper_56').show();
                    jQuery(document).trigger('gform_post_conditional_logic', [56, null, true]);
                    gform.utils.trigger({
                        event: 'gform/conditionalLogic/init/end',
                        native: false,
                        data: {
                            formId: 56,
                            fields: null,
                            isInit: true
                        }
                    });
                });
            }
        }
    });
    jQuery(document).on('gform_post_conditional_logic', function(event, formId, fields, isInit) {})
});

gform.initializeOnLoaded(function() {
    jQuery(document).trigger("gform_pre_post_render", [{
        formId: "56",
        currentPage: "1",
        abort: function() {
            this.preventDefault();
        }
    }]);
    if (event.defaultPrevented) {
        return;
    }
    const gformWrapperDiv = document.getElementById("gform_wrapper_56");
    if (gformWrapperDiv) {
        const visibilitySpan = document.createElement("span");
        visibilitySpan.id = "gform_visibility_test_56";
        gformWrapperDiv.insertAdjacentElement("afterend", visibilitySpan);
    }
    const visibilityTestDiv = document.getElementById("gform_visibility_test_56");
    let postRenderFired = false;

    function triggerPostRender() {
        if (postRenderFired) {
            return;
        }
        postRenderFired = true;
        jQuery(document).trigger('gform_post_render', [56, 1]);
        gform.utils.trigger({
            event: 'gform/postRender',
            native: false,
            data: {
                formId: 56,
                currentPage: 1
            }
        });
        if (visibilityTestDiv) {
            visibilityTestDiv.parentNode.removeChild(visibilityTestDiv);
        }
    }

    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this,
                args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }
    const debouncedTriggerPostRender = debounce(function() {
        triggerPostRender();
    }, 200);
    if (visibilityTestDiv && visibilityTestDiv.offsetParent === null) {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && visibilityTestDiv.offsetParent !== null) {
                    debouncedTriggerPostRender();
                    observer.disconnect();
                }
            });
        });
        observer.observe(document.body, {
            attributes: true,
            childList: false,
            subtree: true,
            attributeFilter: ['style', 'class'],
        });
    } else {
        triggerPostRender();
    }
});
window.lazyLoadOptions = {
    elements_selector: "img[data-src],.perfmatters-lazy,.perfmatters-lazy-css-bg",
    thresholds: "0px 0px",
    class_loading: "pmloading",
    class_loaded: "pmloaded",
    callback_loaded: function(element) {
        if (element.tagName === "IFRAME") {
            if (element.classList.contains("pmloaded")) {
                if (typeof window.jQuery != "undefined") {
                    if (jQuery.fn.fitVids) {
                        jQuery(element).parent().fitVids()
                    }
                }
            }
        }
    }
};
window.addEventListener("LazyLoad::Initialized", function(e) {
    var lazyLoadInstance = e.detail.instance;
});
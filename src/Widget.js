class Widget {
    constructor({
        globalWidget = false,
        widgetRouteUrl,
        widgetRouteUrlStipLevel = 0
    }) {
        this.globalWidget = globalWidget;
        this.widgetRouteUrl = widgetRouteUrl;
        this.widgetRouteUrlStipLevel = widgetRouteUrlStipLevel;
    }

    /** 
     * @description Widgets need to know if they should continue initialisation
     * @private
     */
    _getCurrentPageUrl() {
        return window.location.pathname;
    }

    /**
     * Very primitive URL fixer
     * @param {String} url 
     */
    _stripUrl(url) {
        if (this.widgetRouteUrlStipLevel !== 0) {
            let strSplit = url.split("/");
            let ignoredSegments = strSplit.filter((o, i) => {
                if (i <= this.widgetRouteUrlStipLevel) {
                    return o;
                }
            });

            //Deals with missing / on URL but we could probabably do this a lot cleaner
            let finalUrl = '/' + ignoredSegments.join('/') + '/';
            return finalUrl;
        } else {
            return url;
        }
    }
    /** 
     * @description True|False for if we're correctly routed
     * @type boolean
     */
    _shouldWidgetInit() {
        if (this.globalWidget) {
            return true;
        } else if (this.widgetRouteUrl === this._stripUrl(this._getCurrentPageUrl())) {
            return true;
        } else {
            return false;
        }
    }


    bindClickEventById({elem, callback}){
        let domElem = document.getElementById(elem);
        if(domElem !== undefined){
            domElem.addEventListener('click',callback);
        }
    }

    init() {

    }

    initDebug() {
        console.log(this._shouldWidgetInit());
    }
}

export default Widegt;
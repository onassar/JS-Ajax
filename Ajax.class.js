
/**
 * Ajax
 * 
 * Lightweight MooTools Request wrapper that sets default events and provides
 * a simpler GET/POST method signature.
 * 
 * @author  Oliver Nassar <onassar@gmail.com>
 * @public
 * @var     Class
 * @extends Request
 */
var Ajax = new Class({

    /**
     * Extends
     * 
     * @public
     * @var    Class
     */
    Extends: Request,

    /**
     * options
     * 
     * @public
     * @var    Object
     */
    options: {
        headers: {
            ajax: true
        },
        noCache: true
    },

    /**
     * initialize
     * 
     * @public
     * @param  String url
     * @param  Object options
     * @return void
     */
    initialize: function(url, options) {

        // parent constructor; set url
        this.parent(options);
        this.options.url = url;

        // add event handlers
        this.addEvents({
            request: function() {},
            complete: function() {},
            cancel: function() {
                log('Ajax (cancelled)', this);
            },
            failure: function(xhr) {
                log('Ajax (failed)', this, arguments);
            },
            exception: function(header, value) {
                log('Ajax (exception)', this, arguments);
            }
        });
    },

    /**
     * callback
     * 
     * Callback wrapper incase one wasn't specified for the get or post actions.
     * 
     * @public
     * @param  Function fn
     * @param  Object error
     * @param  Object response
     * @return void
     */
    callback: function(fn, error, response) {
        fn(error, response);
    },

    /**
     * get
     * 
     * Wrapper for AJAX gets.
     * 
     * @public
     * @param  Function callback
     * @param  Object params
     * @return void
     */
    get: function(callback, params) {
        this.addEvent('success', function(text, xml) {
            if (callback) {
                this.callback(callback, text);
            }
        });
        this.parent(params);
    },

    /**
     * post
     * 
     * Wrapper for AJAX posts.
     * 
     * @public
     * @param  Function callback
     * @param  Object params
     * @return void
     */
    post: function(callback, params) {
        this.addEvent('success', function(text, xml) {
            if (callback) {
                this.callback(callback, text);
            }
        });
        this.parent(params);
    }
});


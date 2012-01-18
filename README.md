JS-Ajax
===
JS-Ajax is a MooTools class which extends the included `Request` class. It
acts as a wrapper/child-class in order to set default events for ajax requests
as well as simplifying the get/post method signatures.

Additionally, it will by default turn off ajax call caching, and send along an
HTTP header entitled `ajax` with a string value of `true`.

### Sample Ajax Call

``` javascript

// instantiate by specifying the path
var ajax = (new Ajax('/tickle'));

// fire get
ajax.get(function(response) {
    console.log(response);
});

// reinstantiate
var ajax = (new Ajax('/tackle'));

// post with callback and parameter
ajax.post(
    function(response) {
    }, {
        'who': 'Oliver',
        'why': 'Not a fan of jugglers'
    }
);
```

While you can do the same using the default `Request` class, I&#039;ve found
this to be pretty helpful.

#### Related
[JS-JSON-Validation](google)


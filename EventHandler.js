hw2.define([
    'hw2!PATH_JS_LIB:event/include.js',
    "hw2!PATH_JS_LIB:common/Array.js"
], function () {
    var $ = this;
    return $.EventHandler = $.Class({members: [
            /**
             * Vars
             */
            {
                a: ["private", "static"], n: "instances", v: new Array()
            },
            {
                a: "private", n: "triggers", v: new Array()
            },
            /**
             * Methods
             */
            {
                a: "public", n: "__construct", v: function (triggers) {
                    this._i.triggers = triggers || [];
                }
            },
            {
                a: "public", n: "setTriggers", v: function (triggers) {
                    this._i.triggers=triggers;
                }
            },
            {
                a: "public", n: "bind", v: function (obj) {
                    this.triggers.push(obj);
                }
            },
            {
                a: "public", n: "unbind", v: function (obj) {
                    $.Array.remove(this.triggers, obj);
                }
            },
            {
                a: "public", n: "trigger", v: function (func, data) {
                    var res=[];
                    for (var index = 0; index < this.triggers.length; ++index) {
                        var f = this.triggers[index][func];
                        if (typeof f === 'function')
                            res.push(f.apply(this.triggers[index], data));
                    }
                    
                    return res;
                }
            },
            {
                a: ["public", "static"], n: "I", v: function (key, triggers) {
                    if (typeof this._s.instances[key] === "undefined") {
                        this._s.instances[key] = new $.Event(triggers);
                    }

                    return this._s.instances[key];
                }
            }
        ]}
    );
});
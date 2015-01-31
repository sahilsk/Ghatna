/**
* @file Event(Ghatna) emitter class
* @author Sonu K. Meena [sonukr666@gmail.com]
* @version 1.0.0
* @example
* returns 'Ghatna' Object
* var emitter = new Ghatna() ;
* emtter.on("push", listener); // attach listener to "push" event
* emtter.emit("push", arg1, arg2); // emit "push" event with arg1 and arg2
* var listener  = function(arg1, arg2){
* 	// do something
* }
*/

(function(window){
'use strict';

/**
* @constructor
*
*/

	var Ghatna = function(){};

/**
* This callback type is called `listenerCallback` and is displayed as a global symbol.
*
*	@callback listenerCallback
*	@param {*} [args] - arguments to callback function
*/

/**
* Attach listener to event
*
*	@param {string} event - event to listen to.
*	@param {listenerCallback} listener - The callback that execute on event emit
*	@returns {Object}
*
*/
	Ghatna.prototype.on = function(event, listener){
		this.collection = this.collection || {};
		this.collection[event] = this.collection[event] || [];
		this.collection[event].push(listener);

		return this;
	}

/**
* Emit an event . Consequently all attached listener will execute with provided arguments, if any
*
*	@param {string} event - event  to emit
*	@param {*}  [] - arguments to pass to listeners
*	@returns {Object}
*
*/

	Ghatna.prototype.emit = function(){
		var args = Array.prototype.slice.call( arguments);
		if( args.length < 1){
			throw " No event provided";
		}
		var event =  args.shift();
		var listeners = this.collection[event];
		var len = listeners.length;
		var that = this;
		for(var i =0; i < len; i++){
			var listener = listeners[i];
			setTimeout( function(){
				listener.apply(that, args);
			}, 0);
		}
		return this;
	}

/**
* Stop listener from listening to event
*
*	@param {string} event - event name to detach listener from
*	@param {listenerCallback} listener  - listener to detach from event
*	@returns {Object}
*/
	Ghatna.prototype.off = function(event, listener){
		if( this.collection[event].indexOf(listener) !== -1){
			this.collection[event].splice( this.collection[event].indexOf(listener), 1);
		}
		return this;
	}

/**
*	Attach listener to event in a way that it execute only once.
*
*  @param {string} event - event name to attach listener to
*  @param {listenerCallback} listener - The callback that execute once on given event emit
*	@returns {Object}
*/
	Ghatna.prototype.once =function( event,  listener){
		var that = this;
		function fn(){
			var args = Array.prototype.slice.call(arguments);
			that.off( event, fn);
			listener.apply(that, args);
		}
		this.on(event, fn);
	}



// AMD
	if( typeof window.define === "function" && window.define.amd !== undefined ){
		window.define("Ghatna", [], function(){
			return Ghatna;
		});
	// CommonJS
	}else if ( typeof module !== "undefined" && module.exports !== undefined ){
		module.exports = Ghatna;
	// Browser
	}else 	if( typeof window.Ghatna !== "function" ) {
			window.Ghatna = Ghatna;
	}

}(this));

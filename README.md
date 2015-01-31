Ghatna: Event Emitter class
=====================

A simple event emitter class for browser

>> `Ghatna` is a hindi word meaning 'event'

Run test
---------

	$ npm install
	$ gulp --gulpfile gulpfile test // or  gulp test


How-to
----------

Create new event ('Ghatna')

	var emitter = new Ghatna() ;

Create a new listener callback to bind with event.

	var listener = function(a,b){ console.log( a+b ); }

Attach listener callback with event

	emitter.on("sum", listener);

Finally, fire an event

	emitter.emit("sum", 1,5);
	// output: 6



API
------------------

### Ghatna#on(event, listener)

Adds a listener to the collection for a specified event.

* event - The name of the event you want to add.
* listener - Listener you want to add from given event.

		emitter.on('sum', listener);


### Ghatna#once(event, listener)

Adds a one time listener  for a specified event. It will execute only once.

* event - The name of the event.
* listener - Listener you want to add from the given event.

		emitter.once('sum', listener);


### Ghatna#off(event, listener)

Removes a listener from an event listener list.

* event - The name of the event.
* listener - Listener you want to remove from the given event.

		emitter.off('sum', listener);


Maintained by
----------------------

Sonu K. Meena (Full Stack Developer )  
E-mail: sonukr666@gmail.com  
Web: http://sahilsk.github.io


License
-------------------

Licensed under the MIT license.  
Copyright (c) 2014 @sahilsk

var Ghatna = require("../src/ghatna.js");


describe("Test Ghatna Event Emitter Class", function() {
  var emitter ;
  emitter = new Ghatna();

  describe("- should respond to", function(){
    it("'on' method", function() {
      expect(emitter.on).toBeDefined();
    });
    it("'off' method", function() {
      expect(emitter.off).toBeDefined();
    });
    it("'once' method", function() {
      expect(emitter.once).toBeDefined();
    });
  });

  describe("- should bind listener to event ",  function(){

    var listener = function(a,b){
      return a+b;
    }
    var listener2 = function(a,b){
      return a+b+c;
    }
    var emitReturn = emitter.on("sum", listener);

    it("should register event", function(){
      expect(emitReturn.collection["sum"]).toBeDefined();
    });
    it("should register listener to event", function(){
      expect( emitReturn.collection["sum"]).not.toContain(listener2) ;
    });
    it("should register listener to event", function(){
      expect( emitReturn.collection["sum"]).toContain(listener) ;
    });

  });

  describe("- should emit event", function(){
    var callback = jasmine.createSpy("listener");
    emitter.on("test", callback);

    it("should call listener on event emit", function(done){
      emitter.emit("test");
      setTimeout(function() {
        expect( callback).toHaveBeenCalled();
        done();
      }, 1);
    });

    it("should call listener with given arguments", function(done){
      emitter.emit("test", 1,23);
      setTimeout(function() {
        expect( callback).toHaveBeenCalledWith(1,23);
        done();
      }, 1);

    });

  });

  describe("- Testing 'once' method ", function(){

      var listener = jasmine.createSpy();
      emitter.once("callOnce", listener);

      it("- should fire listener on emit", function(done){
        emitter.emit("callOnce");
        setTimeout( function(){
          expect(listener).toHaveBeenCalled();
          done();
        }, 1);
      });

      it("- should fire listener only once", function(done){
        emitter.emit("callOnce", 1);
        emitter.emit("callOnce", 2);

        setTimeout( function(){
          expect(listener.calls.count()).toBe(1);
          done();
        }, 1);
      });

  })



});

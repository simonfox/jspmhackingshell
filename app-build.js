"format register";

System.register("src/person", [], function($__export) {
  "use strict";
  var __moduleName = "src/person";
  var Person;
  return {
    setters: [],
    execute: function() {
      Person = $__export("Person", (function() {
        var Person = function Person(name) {
          this.name = name;
        };
        return ($traceurRuntime.createClass)(Person, {}, {});
      }()));
    }
  };
});



System.register("src/app", ["src/person"], function($__export) {
  "use strict";
  var __moduleName = "src/app";
  var Person,
      p;
  return {
    setters: [function($__m) {
      Person = $__m.Person;
    }],
    execute: function() {
      p = new Person('simon');
      console.log('hello ' + p.name);
    }
  };
});



//# sourceMappingURL=app-build.js.map
System.config({
  "paths": {
    "*": "*.js",
    "jspmhackingshell/*": "src/*.js",
    "github:*": "jspm_packages/github/*.js"
  }
});

System.config({
  "map": {
    "jspmhackingshared": "github:simonfox/jspmhackingshared@0.0.2",
    "github:simonfox/jspmhackingshared@0.0.2": {
      "jquery": "github:components/jquery@2.1.3"
    }
  }
});


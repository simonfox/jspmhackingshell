System.config({
  "paths": {
    "*": "*.js",
    "jspmhackingshell/*": "src/*.js",
    "github:*": "jspm_packages/github/*.js"
  },
  "bundles": {
    "app-shared": [
      "github:components/jquery@2.1.3/jquery",
      "github:components/jquery@2.1.3",
      "github:simonfox/jspmhackingshared@0.0.9/bootstrap",
      "github:simonfox/jspmhackingshared@0.0.9/index",
      "github:simonfox/jspmhackingshared@0.0.9"
    ]
  }
});

System.config({
  "map": {
    "shared": "github:simonfox/jspmhackingshared@0.0.9",
    "github:simonfox/jspmhackingshared@0.0.9": {
      "jquery": "github:components/jquery@2.1.3"
    }
  }
});


$.golf.defaultRoute = "/search/golf/";

$.golf.controller = [
  { route: "^/search/(([^/]+)/)?$",
    action: (function() {
      var tweet;
      return function(container, params) {
        tweet = !!tweet ? tweet : new Component.Twitter();
        if (!params[2])
          return $.golf.location(params[0]+"golf/");
        container.empty().append(tweet);
        tweet.search(decodeURIComponent(params[2]));
      };
    })()
  }
];

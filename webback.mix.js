mix.webpackConfig({ 
    resolve: {
      fallback: {
         // "stream": false,
         //"zlib": false,
         "stream": require.resolve("stream-browserify"),
         "zlib": require.resolve("browserify-zlib"),
         "querystring": require.resolve("querystring-es3"),
         "path": require.resolve("path-browserify"),
         "buffer": require.resolve("buffer/"),
         
      }
    }
  });
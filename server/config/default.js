const config = {
  server: {
      secret: 'kjVkuti2xAyF3JGCzSZTk0YWM5JhI9mgQW4rytXc'
  },
  rtmp_server: {
      rtmp: {
          port: 1935,
          chunk_size: 60000,
          gop_cache: true,
          ping: 30,
          ping_timeout: 60
      },
      http: {
          port: 8000,
          allow_origin: '*'
      },
  }
};

module.exports = config;
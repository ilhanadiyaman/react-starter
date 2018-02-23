const merge = require('webpack-merge');
const build = require('./build.config');
const S3Plugin = require('webpack-s3-plugin');

module.exports = merge(build, {
  plugins: [
    new S3Plugin({
      s3Options: {
        region: '',
        accessKeyId: '',
        secretAccessKey: '',
      },
      s3UploadOptions: {
        Bucket: '',
      },
    }),
  ],
});

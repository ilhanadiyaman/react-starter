const merge = require('webpack-merge');
const build = require('./build.config');
const S3Plugin = require('webpack-s3-plugin');

module.exports = merge(build, {
  plugins: [
    new S3Plugin({
      s3Options: {
        region: process.env.AWS_REGION,
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      },
      s3UploadOptions: {
        Bucket: process.env.AWS_BUCKET,
      },
    }),
  ],
});

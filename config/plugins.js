module.exports = ({ env }) => ({
  // ...
  // upload: {
  //   provider: "cloudinary",
  //   providerOptions: {
  //     cloud_name: env("CLOUDINARY_NAME"),
  //     api_key: env("CLOUDINARY_KEY"),
  //     api_secret: env("CLOUDINARY_SECRET"),
  //   },
  // },
  // ...
  upload: {
    provider: "wasabi",
    providerOptions: {
      region: env("WASABI_REGION"),
      bucket: env("WASABI_BUCKET"),
      secret: env("WASABI_SECRET"),
      key: env("WASABI_KEY"),
    },
  },
});

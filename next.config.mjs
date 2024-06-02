/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // loader: "custom",
    // loaderFile: "./loader.js",

    domains: [
      "https://sandbox.unipaas.com/platform/authorize", "http://localhost:3001", 'kyoopay-bucket.s3.amazonaws.com','kyoopay.s3.eu-north-1.amazonaws.com','https://dev-kyoopay-be.rtdemo.com'
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)', // Match all routes
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' }, // Allow requests from any origin
          { key: 'Access-Control-Allow-Methods', value: 'GET, POST, PUT, DELETE, PATCH, OPTIONS' }, // Allow specified HTTP methods
          { key: 'Access-Control-Allow-Headers', value: '*' }, // Allow all headers
        ],
      },
    ];
  },
};


export default nextConfig;
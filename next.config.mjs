/** @type {import('next').NextConfig} */
const nextConfig = {
  env:{
    mongodbURL:'mongodb+srv://mohamedazoz20010:jxs9S3LJSQAM9haO@cluster0.zw3omhl.mongodb.net/dashboard',
    mongodbPassword:'jxs9S3LJSQAM9haO'
  },
  images:{
    remotePatterns:[{
      protocol:'https',
      hostname:'images.pexels.com'
    }]
  }
};

export default nextConfig;

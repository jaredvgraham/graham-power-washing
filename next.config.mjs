import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
  api: {
    bodyParser: {
      sizeLimit: "100mb", // Set desired value here
    },
  },
};

export default withNextVideo(nextConfig);

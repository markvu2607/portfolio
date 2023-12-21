/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {protocol: "https",
      hostname: "raw.githubusercontent.com",
      port: "",
      pathname: "/markvu2607/mdx-blogs/main/images/**"
    }
    ]
  }
}

module.exports = nextConfig

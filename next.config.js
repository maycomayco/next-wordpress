/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ceropixel.com.ar',
            },
        ],
    },
}

module.exports = nextConfig

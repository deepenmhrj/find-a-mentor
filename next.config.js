/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
    typescript: {
        tsconfigPath: './tsconfig.json'
    },
    webpack5: true,
    webpack: (config) => {
        config.resolve.fallback = { 
            fs: false,
            path: false,
            os: false,
            module: false,
        };

        return config;
    },
  }

  
  
  module.exports = nextConfig
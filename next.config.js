// @ts-check

const next = (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    webpack: (config, options) => {
      const fileLoaderRule = config.module.rules.find((rule) =>
        rule.test?.test?.('.svg')
      )

      config.module.rules.push(
        {
          ...fileLoaderRule,
          test: /\.svg$/i,
          resourceQuery: /url/
        },
        {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          resourceQuery: { not: /url/ },
          use: [{ loader: '@svgr/webpack', options: { icon: true } }]
        }
      )

      fileLoaderRule.exclude = /\.svg$/i

      config.module.rules.push({
        test: /\.gif$/,
        type: 'asset/resource'
      })

      return typeof defaultConfig.webpack === 'function'
        ? defaultConfig.webpack(config, options)
        : config
    },
    reactStrictMode: true
  }

  return nextConfig
}

export default next

const nextConfig = {
    /* other next config options here */
    experimental: atlas_cache_handler(),
}

function atlas_cache_handler() {
    if (process.env.ATLAS_CACHE_HANDLER_ENABLED !== undefined) {
        return {
            incrementalCacheHandlerPath: require.resolve('./.atlas/atlas-cache-handler.js'),
            isrMemoryCacheSize: 0
        }
    }

    return undefined
}

module.exports = nextConfig

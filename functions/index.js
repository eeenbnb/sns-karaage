const { https } = require('firebase-functions')
const { default: next } = require('next')

const nextjsServer = next({
  dev: false,
  conf: {
    distDir: "./app/.next",
  },
})
const nextjsHandle = nextjsServer.getRequestHandler()

exports.nextjsFunc = https.onRequest((req, res) => {
  return nextjsServer.prepare().then(() => nextjsHandle(req, res))
})

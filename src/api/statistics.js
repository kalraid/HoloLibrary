export function connect(data) {
  const webSocketUrl = 'ws://' + process.env.VUE_APP_BASE_API + data.url
  const subprotocols = [data.protocol]
  return new WebSocket(webSocketUrl, subprotocols)
}

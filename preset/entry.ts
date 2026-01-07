import "#nitro-internal-pollyfills";

const nitroApp = useNitroApp();

export default {
  fetch(request: Request) {
    const url = new URL(request.url);
    return nitroApp.localFetch(url.pathname + url.search, {
      context: {},
      host: url.hostname,
      protocol: url.protocol,
      method: request.method,
      headers: request.headers,
      body: request.body,
    });
  },
};

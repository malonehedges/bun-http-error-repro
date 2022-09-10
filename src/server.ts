// a simple http server that responds with 'ok' to any request

// the bun server

import { serve } from 'bun'

serve({
  fetch() {
    return new Response('ok')
  },
  port: 44444,
})

console.log('listening on port 44444')
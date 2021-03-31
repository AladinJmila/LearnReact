import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'

function init() {
  Sentry.init({
    dsn:
      'https://9139f2706fa84499a953a7afea87d4cf@o561814.ingest.sentry.io/5699638',
    autoSessionTracking: false,
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
  })
}

function log(error) {
  Sentry.captureException(error)
}

export default {
  init,
  log,
}

import React from 'react'
import ReactDOM from 'react-dom'
import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'

Sentry.init({
  dsn:
    'https://9139f2706fa84499a953a7afea87d4cf@o561814.ingest.sentry.io/5699638',
  autoSessionTracking: false,
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
})

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()

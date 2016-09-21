import React from 'react'
import { render } from 'react-dom'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'

import App from './components/App'

render(<App/>, document.getElementById('main'))

// hot-reload anything within this entry-point.
if (module.hot) module.hot.accept()

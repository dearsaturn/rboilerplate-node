import express from 'express'
import morgan from 'morgan'
import path from 'path'
import _ from 'lodash'

import router from './router'

const app = express()
const defaultListenPort = (process.env.PORT || 3000) //eslint-disable-line no-magic-numbers
const isDeveloping = process.env.NODE_ENV !== 'production'
const publicPath = express.static(path.join(__dirname, '../public'))

if (isDeveloping) {
  const dev_middlewares = require('./dev_middlewares')
  _.map(dev_middlewares, ((m) => app.use(m)))
  console.log('Webpack: 🔥') //eslint-disable-line no-console
}

app.use(morgan('dev')) // logger
app.use(publicPath)
app.use('/', router)
app.listen(defaultListenPort, (err) => {
  if(err){
    console.log(err) //eslint-disable-line no-console
  }

  console.log( // eslint-disable-line no-console
    `${process.env.NODE_ENV} | port ${defaultListenPort}`
  )
})

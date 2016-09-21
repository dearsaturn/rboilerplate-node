/* eslint-disable no-magic-numbers */
/* Since we may return some status codes. */
import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import _ from 'lodash'

const router = express.Router()
router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())

router.get('/', (_,res) => {
  res.send(
    `<!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width,initial-scale=1">
        </head>
        <body>
          <div id="main"></div>
          <script type="text/javascript" src="bundle.js"></script>
        </body>
      </html>
    `
  )
})

export default router

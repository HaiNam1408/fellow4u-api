const tourRoute = require('../routes/tourRoute')
const {errorHandler, notFound} = require('../middleware/errorHandler')

module.exports =  initRoute = (app) => {
    app.use('/tours', tourRoute)

    app.use(notFound)
    app.use(errorHandler)
}
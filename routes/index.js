const tourRoute = require('../routes/tourRoute')
const {errorHandler, notFound} = require('../middleware/errorHandler')

module.exports =  initRoute = (app) => {
    app.use('/tour', tourRoute)

    app.use(notFound)
    app.use(errorHandler)
}
const Tour = require('../model/tour')
const asyncHandler = require('express-async-handler')

module.exports = tourController = {
    create: asyncHandler(async (req, res) => {
        const {title, image, price} = req.body
        if(!title || !image || !price) return res.status(200).json({ 
            success: false, 
            response: 'Yêu cầu nhập thông tin các trường bắt buộc!'
        })
        
        const newTour = await Tour.create(req.body)
        return res.status(200).json({ 
            success: newTour ? true : false, 
            tours: newTour ? newTour : {} 
        })
    }),

    getAll: asyncHandler(async (req, res) => {
        const response = await Tour.find({})
        return res.status(200).json({ 
            tours: response 
        })
    }),

    delete: asyncHandler(async (req, res) => {
        const newTour = await Tour.findByIdAndDelete(req.params.id)
        return res.status(200).json({ 
            success: newTour ? true : false, 
            response: newTour ? newTour : {} 
        })
    }),

    update: asyncHandler(async (req, res) => {
        if(!req.params.id) return res.status(200).json({ 
            error: "Can't find id"
        })

        const newTour = await Tour.findByIdAndUpdate(req.params.id, req.body, {new: true})
        return res.status(200).json({ 
            success: newTour ? true : false, 
            response: newTour ? newTour : {} 
        })
    }),
}
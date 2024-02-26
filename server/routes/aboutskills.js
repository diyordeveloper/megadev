import { Router } from 'express'
import AboutSkills from '../models/AboutSkills.js'

export default Router()
    .get('/', async (_, res) => {
        try{
            const result = await AboutSkills.find()
            res.json({ status: true, result })
        }catch(err){
            res.json({ status: false, message: err })
        }
    })
    .post('/', async (req, res) => {
        try{
            const result = await AboutSkills.create(req.body)
            res.json({ status: true, result })
        }catch(err){
            res.json({ status: false, message: err })
        }
    })
    .put('/:id', async (req, res) => {
        try{
            const result = await AboutSkills.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
            res.json({ status: true, result })
        }catch(err){
            res.json({ status: false, message: err })
        }
    })
    .delete('/:id', async (req, res) => {
        try{
            const result = await AboutSkills.findByIdAndDelete(req.params.id)
            res.json({ status: true, result })
        }catch(err){
            res.json({ status: false, message: err })
        }
    })
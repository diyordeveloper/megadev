import { Router } from 'express'
import Link from '../models/Link.js'

export default Router()
    .get('/', async (_, res) => {
        try{
            const result = await Link.find()
            res.json({ status: true, result })
        }catch(err){
            res.json({ status: false, message: err })
        }
    })
    .post('/', async (req, res) => {
        try{
            const result = await Link.create(req.body)
            res.json({ status: true, result })
        }catch(err){
            res.json({ status: false, message: err })
        }
    })
    .put('/:id', async (req, res) => {
        try{
            const result = await Link.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
            res.json({ status: true, result })
        }catch(err){
            res.json({ status: false, message: err })
        }
    })
    .delete('/:id', async (req, res) => {
        try{
            const result = await Link.findByIdAndDelete(req.params.id)
            res.json({ status: true, result })
        }catch(err){
            res.json({ status: false, message: err })
        }
    })
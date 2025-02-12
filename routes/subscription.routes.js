import { Router } from "express";   

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res)=> res.send({title:'get all subscriptions '}))

subscriptionRouter.get('/:id', (req, res)=> res.send({title:'get  subscriptions details '}))

subscriptionRouter.post('/', (req, res)=> res.send({title:'post  subscriptions '}))

subscriptionRouter.put('/:id', (req, res)=> res.send({title:'update  subscriptions '}))

subscriptionRouter.delete('/', (req, res)=> res.send({title:'delete all subscriptions '}))

subscriptionRouter.get('/user/:id', (req, res)=> res.send({title:'get for  specific subscriptions '}))

subscriptionRouter.put('/:id/cancel', (req, res)=> res.send({title:'cancel  subscriptions '}))


subscriptionRouter.get('/upcoming-renewals', (req, res)=> res.send({title:'upcoming  subscriptions '}))



export default subscriptionRouter;
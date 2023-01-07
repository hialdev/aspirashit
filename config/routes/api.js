//import database
const connection = require('../database')
const express = require('express')
const router = express()

// API routes

// Get Relationship
router.get('/transaction', (req, res) => {
    const query = 'SELECT * FROM transaction'
    connection.query(query, (error, results) => {
      if (error) throw error
      res.send(results)
    })
})

// Get all todo items
router.get('/todos', (req, res) => {
    const query = 'SELECT * FROM product'
    connection.query(query, (error, results) => {
      if (error) throw error
      res.send(results)
    })
})

// Get todo items
router.get('/todos/(:id)', (req, res) => {
    let id = req.params.id
    const query = `SELECT * FROM product WHERE id = '${id}'`
    connection.query(query, (error, results) => {
        if (error) {
            res.status(500).send({ error: 'Error retrieving todo item' })
        } else {
            if (results.length > 0) {
                res.send(results[0])
            } else {
                res.status(404).send({ error: 'Todo item not found' })
            }
        }
    })
})

module.exports = router
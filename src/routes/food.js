'use strict';

//access express
const express = require( 'express' );
//access dataManager
const DataMngr = require ( '../models/dataMngr.js' );
//access class food
const Food = require( '../models/food.js' );
//create object
const dataMngr = new DataMngr( Food );
const router = express.Router();

//routeHandler
router.get( '/', getFood );
router.get( '/:id', getFoodWithId );
router.post( '/', createFood );
router.put( '/:id', updateFood );
router.delete( '/:id', deleteFood );

// for get route
async function getFood( req, res, next ) {
  try {
    const resObj = await dataMngr.read();
    res.json( resObj );
  }catch( error ){
    next( error );
  }
}

//for get route with id
async function getFoodWithId( req, res, next ) {
  try {
    const resObj = await dataMngr.read( req.params.id );
    res.json( resObj );
  } catch( error ){
    next( error );
  }
}

// for post route
async function createFood( req, res, next ) {
  try{
    const foodObj = req.body;
    const resObj = await dataMngr.create( foodObj );
    res.status( 201 ).json( resObj );
  }catch( error ){
    next( error );
  }
}

// for put route
async function updateFood( req, res, next ) {
  try {
    const foodObj = req.body;
    const resObj = await dataMngr.update( req.params.id, foodObj );
    res.json( resObj );
  }catch( error ){
    next( error );
  }
}

// for delete route
async function deleteFood( req, res, next ) {
  try {
    const resObj = await dataMngr.delete( req.params.id );
    res.json( resObj );
  }catch ( error ){
    next ( error );
  }
}



//export our route
module.exports = router;

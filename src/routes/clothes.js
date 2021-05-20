'use strict';

//access express
const express = require( 'express' );
//access dataManager
const DataMngr = require ( '../models/dataMngr.js' );
//access class clothes
const Clothes = require( '../models/clothes.js' );
//create object
const dataMngr = new DataMngr( Clothes );
const router = express.Router();

//routeHandler
router.get( '/', getClothes );
router.get( '/:id', getClothesWithId );
router.post( '/', createClothes );
router.put( '/:id', updateClothes );
router.delete( '/:id', deleteClothes );

// for get route
async function getClothes( req, res, next ) {
  try {
    const resObj = await dataMngr.read();
    res.json( resObj );
  }catch ( error ) {
    next( error );
  }
}

//for get route with id
async function getClothesWithId( req, res, next ) {
  try {
    const resObj = await dataMngr.read( req.params.id );
    res.json( resObj );
  }catch ( error ){
    next( error );
  }
}

// for post route
async function createClothes( req, res, next ) {
  try {
    const clothesObj = req.body;
    const resObj = await dataMngr.create( clothesObj );
    res.status( 201 ).json( resObj );
  }catch ( error ){
    next( error );
  }
}

// for put route
async function updateClothes( req, res, next ) {
  try {
    const clothesObj = req.body;
    const resObj = await dataMngr.update( req.params.id, clothesObj );
    res.json( resObj );
  }catch( error ){
    next( error );
  }
}

// for delete route
async function deleteClothes( req, res, next ) {
  try {
    const resObj = await dataMngr.delete( req.params.id );
    res.json( resObj );
  }catch ( error ){
    next ( error );
  }
}




//export our route
module.exports = router;

'use strict';

////Data access layer
class DataMngr {
  // model from mongo
  constructor( model ) {
    this.model =model ;
  }

  // for get method
  read( id ) {
    if ( id ) {
      return this.model.find( {_id : id} );
    } else {
      return this.model.find( {} );
    }
  }

  // for post method
  create( obj ) {
    const doc = new this.model( obj ) ;  
    return doc.save() ;
  }

  // for delete method
  delete( id ) {
    return this.model.findByIdAndDelete( id );
  }

  // for put method
  update( id, obj ) {
    return this.model.findByIdAndUpdate( id,obj,{new:true} );
  }
}

module.exports = DataMngr;

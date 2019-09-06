const Quote = require('../models/Query')

class QuoteStorage {

    constructor(){
        this._model = Query
    }

    findOne(query){
        return this._model.findOne(query).lean()
    }

    findById(_id){
        return this._model.findById({ _id }).lean()
    }

    findAll(){
        return this._model.find().lean()
    }

    create(params){
        let newQuery = new (this._model)(params)
        return newQuery.save()
    }

    update(_id, params){
        return this._model.findOneAndUpdate({ _id }, params).lean()
    }

    delete(_id){
        return this._model.findOneAndDelete({ _id })
    }
}

module.exports = new QuoteStorage()
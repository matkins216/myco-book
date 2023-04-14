const mongoose = require("mongoose");
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const mushroomSchema = new Schema(
    {
        scientificName: String,
        photoUrl: String,
        commonName: String,
        benefits: String,
        containsPsilocybin: Boolean,
        user: { type: Schema.Types.ObjectId, ref: 'User' },
        
    },
   
);

const substrateSchema = new Schema(
    {
        quantity: String,
        enum: ['Coco Coir', 'Straw', 'Coffee Grounds'],
        additives: String,
    },

);

const spawnSchema = new Schema(
    {
        quantity: String,
        type: String,
        
    },

);

const inoculationSchema = new Schema(
    {
        quantity: String,
        type: String,

    },

);

const yieldSchema = new Schema(
    {
        quantityDry: String,
        quantityWet: String,
        
    },

);

const updateSchema = new Schema(
    {
        stage: {
            type: String,
            enum: ['inoculation', 'spawn to bulk', 'colonization', 'fruiting', 'harvest', '2nd flush'],

        },
        date: Date,
        notes: String,
        photoUrl: String,

    },

);

const growSchema = new Schema({
    mushroomType:[mushroomSchema],
    substrate: [substrateSchema],
    spawn: String,
    inoculation: String,
    yield: string,
    humidity: String,
    updates: string,
    user: { type: Schema.Types.ObjectId, ref: 'User' },
   
});

// movies collection (if you looked in mongdob, after you put something in it!)
module.exports = mongoose.model("Movie", movieSchema);
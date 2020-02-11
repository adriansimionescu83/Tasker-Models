const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomerSchema = new Schema(
    {
        firstname:{
            type: String,
            required: true
        }, 
        lastname:{
            type: String,
            required: true
        },
        dateofbirth:{
            type: Date
        },
        email:{
            type: String,
            required: true
        }, 
        password:{
            type: String,
            required: true
        }, 
        phonenumber:{
            type: Number,
            required: false
        },
        orders: [{ // Array with all the orders for that customer
            type: Schema.Types.ObjectId, 
            ref: 'order' 
                     }]
    
    }
)

const customerModel = mongoose.model('customer', CustomerSchema);
module.exports = customerModel;
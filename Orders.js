const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema(
    {
        customer:{ // Points to the customer model
            type: Schema.Types.ObjectId, 
            ref: 'customer',
            required: true
        }, 
        worker:{ // Points to the worker model
            type: Schema.Types.ObjectId, 
            ref: 'worker',
            required: true
        },
        service:{ // Points to the service model
            type: Schema.Types.ObjectId, 
            ref: 'service',
            required: true
        },
        price:{
            type: Number,
            required: true
        }, 
        grading:{
            type: Number,
            required: true
        }, 
        comments:{
            type: String,
            required: false
        }
    }
)

const orderModel = mongoose.model('order', OrderSchema);
module.exports = orderModel;
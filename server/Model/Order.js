var mongoose = require('../lib/db');

var Schema = mongoose.Schema;

var Order = new Schema({
    orderNo: String,
    createTime: String,
    auditStatus: Number,
    status: Number,
    orderItemList: [],
    goodsPrices: Number
})

module.exports = mongoose.model("Order", Order)
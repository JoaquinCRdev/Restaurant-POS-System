const Order = require("../models/orderModel");
const createHttpError = require("http-errors");

const addOrder = async (req, res, next) => {
    
    try {
        const order = new Order(req.body);
        await order.save();

        res.status(201).json({success: true, message: "Order created!", data: order});

    } catch (e) {
        next(e);
    }
}

const getOrderById = async (req, res, next) => {

    try {

        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(createHttpError(400, "Invalid order ID"));
        }

        const order = await Order.findById(id);
        if (!order) {
            return next(createHttpError(404, "Order not found"));
        }

        res.status(200).json({success: true, data: order});
    } catch (e) {
        next(e);
    }
}

const getOrders = async (req, res, next) => {
    
    try {

        const orders = await Order.find();
        res.status(200).json({success: true, data: orders});
    }
    catch (e) {
        next(e);
    }

}

const updateOrder = async (req, res, next) => {

    try {

        const { orderStatus } = req.body;
        const { id } = req.params;
        
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return next(createHttpError(400, "Invalid order ID"));
        }

        const order = await Order.findByIdAndUpdate(id, {orderStatus}, { new: true });
        if (!order) {
            return next(createHttpError(404, "Order not found"));
        }
        res.status(200).json({success: true, message: "Order updated!", data: order});
    }
    catch (e) {
        next(e);
    }

}

module.exports = { addOrder, getOrderById, getOrders, updateOrder }
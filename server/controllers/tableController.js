const createHttpError = require("http-errors");
const Table = require("../models/tableModel");

const addTable = async (req, res, next) => {
    try {

        const { tableNo } = req.body;

        if (!tableNo) {
            return next(createHttpError(400, "Table number is required!"))
        }

        const isTablePresent = await Table.findOne({tableNo});

        if (isTablePresent) {
            return next(createHttpError(400, "Table already exists!"))
        }

        const newTable = await Table.create({ tableNo });
        await newTable.save();

        res.status(201).json({success: true, message: "Table added successfully!", data: newTable });
        
    } catch (e) {
        next(e);
    }
}

const getTables = async (req, res, next) => {
    try {
        
        const tables = await Table.find();
        res.status(200).json({success: true, message: "Tables fetched successfully!", data: tables });

    } catch (e) {
        next(e);
    }

}

const updateTable = async (req, res, next) => {
    try {

        const { status, orderId } = req.body;
        const {id} = req.params;

        if (!status) {
            return next(createHttpError(400, "Status is required!"))
        }

        const table = await Table.findByIdAndUpdate(
            id,
            { status, currentOrder: orderId },
            { new: true }
        );

        if (!table) {
            return next(createHttpError(404, "Table not found!"))
        }

        res.status(200).json({success: true, message: "Table updated successfully!", data: table });
    } catch (e) {
        next(e);
    }
}

module.exports = { addTable, getTables, updateTable}
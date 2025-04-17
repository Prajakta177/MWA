const Item = require("../models/Item");

// Add Wardrobe Item
exports.addItem = async (req, res) => {
    const { name, category, imageURL } = req.body;

    try {
        const newItem = await Item.create({
            name,
            category,
            imageURL,
            userId: req.user.id
        });
        res.status(201).json(newItem);
    } catch (err) {
        res.status(500).json({ error: "Error adding item" });
    }
};

// View Wardrobe Items
exports.getItems = async (req, res) => {
    try {
        const items = await Item.find({ userId: req.user.id });
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({ error: "Error fetching items" });
    }
};

import userModels from "../models/userModel.js";

// add products to user carts
const addToCart = async (req, res) => {
    try {
        const {userId, itemId, size} = req.body;  
        const userData =  await userModels.findById(userId)
        let cartData = await userData.cartData
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1
            } else {
                cartData[itemId][size] = 1
            }
        } else {
            cartData[itemId] = {}
            cartData[itemId][size] = 1
        }
        await userModels.findByIdAndUpdate(userId, {cartData})
        res.json({succes: false, message: "Added To Cart"})

    } catch (error) {
        console.log(error)
        res.json({succes: false, message: error.message})
    }
}

// update products to user carts
const updateCart = async (req, res) => {
    try {
        const { userId, itemId, size, quantity} = req.body;
        const userData =  await userModels.findById(userId)
        let cartData = await userData.cartData;

        cartData[itemId][size] = quantity

        await userModels.findByIdAndUpdate(userId, {cartData})
        res.json({succes: true, message: "Cart Updated"})
    } catch (error) {
        console.log(error)
        res.json({succes: false, message: error.message})
    }
}

// getUser products to user carts
const getUserCart = async (req, res) => {
    try {
        const { userId } = req.body
        const userData =  await userModels.findById(userId)
        let cartData = await userData.cartData;
        res.json({succes: true, cartData})

    } catch (error) {
        console.log(error)
        res.json({succes: false, message: error.message})
    }
}

export {addToCart, updateCart, getUserCart}
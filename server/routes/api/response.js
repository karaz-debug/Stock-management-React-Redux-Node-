const db = require('./db');
class Response {
    constructor(req, res, sql) {
        this.req = req;
        this.res = res;
        this.sql = sql;
    }
    getAllData() {
        db.query(this.sql, (err, result) => {
            if (err) {
                this.res.status(404).json({ msg: "Error in database operation" })
            }
            else {
                this.res.json(result)
            }
        })
    }
    getData() {
        db.query(this.sql, (err, result) => {
            if (err) {
                this.res.status(404).json({ msg: "Error in database operation" })
            }
            else if (result.length === 0) {
                this.res.status(404).json({ msg: "No Data available" })
            }
            else {
                this.res.json(result[0])
            }
        });
    }
    insertData() {
        let data_to_insert = this.req.body;
        db.query(this.sql, data_to_insert, (err, result) => {
            if (err) {
                this.res.status(404).json({ msg: `Error in database operation ${err}` })
            }
            else {
                this.res.json({ id: result.insertId })
            }
        })
    }

    updateData(data_to_update) {
        db.query(this.sql, data_to_update, (err, result) => {
            if (err) {
                this.res.json({ msg: `Error in database operation ${err}` })
            }
            else if (result.affectedRows > 0) {
                this.res.json({ msg: "Data Updated" })
            }
            else {
                this.res.json({ msg: `No Data exist on this Id : ${this.req.params.id}` })
            }
        })
    }
    deleteData() {
        db.query(this.sql, (err, result) => {
            if (err) {
                this.res.json({ msg: `Error in database operation ${err}` })
            }
            else if (result.affectedRows > 0) {
                this.res.json({ msg: "Data Deleted" })
            }
            else {
                this.res.json({ msg: `No Data exist on this Id : ${this.req.params.id}` })
            }
        });
    }

    // Create Order
    createOrder(orderData, customerInfo) {
        const { customerName, customerAddress, customerContact } = customerInfo;

        // Perform the insertion into the "orders" table
        let insertQuery = "INSERT INTO orders (productId, quantity, price, customerName, customerAddress, customerContact) VALUES ?";
        const values = orderData.map((order) => [
            order.productId,
            order.quantity,
            order.price,
            customerName,
            customerAddress,
            customerContact,
        ]);

        db.query(insertQuery, [values], (err, result) => {
            if (err) {
                this.res.status(500).json({ msg: "Error inserting order into the database" });
            } else {
                // Order inserted successfully, now update the product stock
                this.updateProductStock(orderData, () => {
                    // Product stock updated, now generate the invoice
                    this.generateInvoice(result.insertId, orderData, customerInfo, (invoice) => {
                        // Sending the invoice back to the frontend (you can adjust the response format based on your frontend requirements)
                        this.res.status(200).json({ msg: "Order processed successfully", invoice: invoice });
                    });
                });
            }
        });
    }
    // Update product store after order is placed
    updateProductStock(orderData, callback) {
        const promises = orderData.map((order) => {
            return new Promise((resolve, reject) => {
                let updateProductQuery = "UPDATE products SET quantity = quantity - ? WHERE productId = ?";
                db.query(updateProductQuery, [order.quantity, order.productId], (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                });
            });
        });

        // Wait for all the promises to resolve
        Promise.all(promises)
            .then(() => {
                // All promises resolved, product stock updated
                callback();
            })
            .catch((err) => {
                console.error("Error updating product stock:", err);
                // If there's an error while updating the stock, you may need to handle it accordingly (e.g., rollback the order insertion)
                this.res.status(500).json({ msg: "Error updating product stock in the database" });
            });
    }
    // Generate an invoice for the order made
    generateInvoice(orderId, orderData, customerInfo, callback) {
        // Assuming you have a function to fetch the product details from the database based on the productId
        const getProductDetails = (productId) => {
            return new Promise((resolve, reject) => {
                let selectProductQuery = "SELECT * FROM products WHERE productId = ?";
                db.query(selectProductQuery, [productId], (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        if (result.length === 0) {
                            reject(new Error("Product not found"));
                        } else {
                            resolve(result[0]);
                        }
                    }
                });
            });
        };

        const invoice = {
            orderId: orderId,
            items: [],
            total: 0,
            customer: {
                name: customerInfo.customerName,
                address: customerInfo.customerAddress,
                contact: customerInfo.customerContact,
            },
        };

        const promises = orderData.map((order) => {
            return getProductDetails(order.productId)
                .then((productDetails) => {
                    // everything contains inside productDetails
                    const { productId, quantity, price } = order;
                    const { productName } = productDetails;
                    const totalPrice = price * quantity;
                    invoice.total += totalPrice;
                    invoice.items.push({
                        productId: productId,
                        productName: productName,
                        quantity: quantity,
                        price: price,
                        totalPrice: totalPrice,
                    });
                })
                .catch((err) => {
                    console.error("Error fetching product details:", err);
                });
        });

        // Wait for all the promises to resolve
        Promise.all(promises)
            .then(() => {
                // All promises resolved, invoice generation completed
                callback(invoice);
            })
            .catch((err) => {
                console.error("Error generating invoice:", err);
            });
    }
    // Delete an order from the sales
    deleteOrder(orderId) {
        // First, check if the order exists in the database
        let selectQuery = "SELECT * FROM orders WHERE orderId = ?";
        db.query(selectQuery, [orderId], (err, result) => {
            if (err) {
                this.res.status(500).json({ msg: "Error fetching order details from the database" });
            } else {
                if (result.length === 0) {
                    this.res.status(404).json({ msg: "Order not found" });
                } else {
                    // Order found in the database, proceed with the deletion
                    let deleteQuery = "DELETE FROM orders WHERE orderId = ?";
                    db.query(deleteQuery, [orderId], (err, result) => {
                        if (err) {
                            this.res.status(500).json({ msg: "Error deleting order from the database" });
                        } else {
                            // Order deleted successfully
                            this.res.status(200).json({ msg: "Order deleted successfully" });
                        }
                    });
                }
            }
        });
    }

}

module.exports = Response
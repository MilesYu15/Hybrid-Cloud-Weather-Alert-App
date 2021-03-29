'use strict';

const { watch } = require('fs');

module.exports = function(app){
    const userController = require('../controllers/userController');
    const watchController = require('../controllers/watchController');
    const appController = require('../controllers/appController');
    // const bookController = require('../controllers/bookController');
    // const cartController = require('../controllers/cartController');
    // const logController = require('../controllers/logController');

    /*************************
    ** User-related routing **
    **************************/
    app.route('/v1/user/self')
        .put(userController.update) // Update an User
        .get(userController.getSelf); // Fetch one user with authentication
        
    app.route('/v1/user/:id')
        .get(userController.search); //Fetch one user without authentication

    app.route('/v1/user/login')
        .post(userController.authenticate); // Log in an User

    app.route('/v1/user')
        .post(userController.registerUser); // Register a user

    /**************************
    ** Watch-related routing **
    ***************************/
    app.route('/v1/watch/:watch_id')
        .get(watchController.getByID) // Get a watch
        .put(watchController.update) // Update a watch
        .delete(watchController.delete); // Delete a watch

    app.route('/v1/watch')
        .post(watchController.create) // Create a new watch

    app.route('/v1/watches')
        .get(watchController.getAll) // Get all watches for the user

    /**************************
    ** Health and Liveness routing **
    ***************************/

    app.route('/ready')
        .get(appController.checkReadiness) // Get all watches for the user

    app.route('/live')
        .get(appController.checkLiveness) // Get all watches for the user

    /*************************
    ** Legacy from CSYE6225 **
    **************************/

    // app.route('/user/logout/:email')
    //     .delete(userController.logout); //Log out an user

    // app.route('/user/reset')
    //     .post(userController.reset); // Log in an User  
    
    // app.route('/user/testUpdate')
    //     .put(userController.testUpdate);

    // app.route('/books/add')
    //     .post(bookController.upload.array("imageFile"), bookController.add);

    // app.route('/book/update')
    //     .put(bookController.update);

    // app.route('/books')
    //     .get(bookController.getAllBooks);

    // app.route('/books/:email')
    //     .get(bookController.getUserBooks);

    // app.route('/books/image/:filename')
    //     .get(bookController.serveImages);

    // app.route('/books/cart')
    //     .get(bookController.getCartBooks);

    // app.route('/book/:id')
    //     .get(bookController.getABook)
    //     .delete(bookController.deleteABook);

    // app.route('/carts')
    //     .post(cartController.addToCart)
    //     .put(cartController.remove); //Remove a cart item

    // app.route('/carts/:email')
    //     .get(cartController.getUserCarts);

    // app.route('/books/test')
    //     .post(bookController.upload.array("imageFile"), bookController.test);

    // app.route('/client/logs')
    //     .post(logController.clientLog);
};
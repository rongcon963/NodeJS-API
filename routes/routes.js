const users = [{
    id: 1,
    name: "Richard Hendricks",
    email: "richard@piedpiper.com",
},
{
    id: 2,
    name: "Bertram Gilfoyle",
    email: "gilfoyle@piedpiper.com",
},
];

const router = app => {

    let productsCtrl = require('../controllers/ProductsController');

    
    // todoList Routes
    app.route('/products')
        .get(productsCtrl.get)
        .post(productsCtrl.store);

    app.route('/products/:productId')
        .get(productsCtrl.detail)
        .put(productsCtrl.update)
        .delete(productsCtrl.delete);

    app.get('/', (request, response) => {
        console.log(`URL: ${request.url}`);
        response.send(users);
    });
}

module.exports = router;
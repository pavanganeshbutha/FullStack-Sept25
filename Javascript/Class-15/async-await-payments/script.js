
// Place a order on e-commerce platform
// - Initiate order for cart. - 1s
// - Initiate Payment - 500ms
// - Update Order - 200ms
// - Send Communication to the User - 300ms 


const sleep = (time = 1000) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time)
    })
}

const createOrderInDB = async () => {
    await sleep(1000);
    return {
        orderId: 236578390,
        lineItems: [
            {
                id: 1,
                name: 'Macbook',
                price: 200
            },
            {
                id: 2,
                name: 'Iphone',
                price: 100
            }
        ]
    }
}

const updateOrderInDB = async (payment) => {
    await sleep(200);
    return {
        orderId: 236578390,
        lineItems: [
            {
                id: 1,
                name: 'Macbook',
                price: 200
            },
            {
                id: 2,
                name: 'Iphone',
                price: 100
            },
        ],
        status: 'SUCCESS',
        paymentId: payment.id
    }
}

async function completePayment(amount) {
    await sleep(500);
    if (true) {
        throw new Error('Insufficient balance');
    }
    return {
        id: "TXN12153678",
        amount: amount,
        createdAt: new Date().toISOString(),
        paymentMode: 'card'
    }
}

async function notifyUser(email) {
    await sleep(300);
    return true;
}

async function initiateOrder() {
    // sleep the function for 1s
    try {
        console.log('Create order');
        const order = await createOrderInDB();
        console.log('Order created successfully', order);

        console.log('Completing the payment');
        const payment = await completePayment(300);
        console.log('Payment completed successfully', payment);

        console.log('Starting to update the order');
        const updatedOrder = await updateOrderInDB(payment);
        console.log('Order updated successfully');

        console.log('Sending comms to the user');
        const isNotified = await notifyUser('abc@gmail.com');
        console.log('User notified', isNotified);
        console.log('Everything is completed, Order Placed Successfully');
    }
    catch (err) {
        console.log(err);   
    }
}

console.log('START');

initiateOrder();

console.log('END');




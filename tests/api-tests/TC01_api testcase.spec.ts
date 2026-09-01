import { test, expect } from "@playwright/test";

test("APItest", async ({ request }) => {

    const authRequest = await request.post("https://rahulshettyacademy.com/api/ecom/auth/login",
        {
            data:
            {
                "userEmail": "girishk90@gmail.com",
                "userPassword": "Pulsar@150"
            }
        }
    )

    await expect(authRequest.status()).toBe(200)
    const response = await authRequest.json();
    const token = await response.token;
    console.log(token)


    const addProdToCartPostRequest = await request.post("https://rahulshettyacademy.com/api/ecom/user/add-to-cart",
        {
            headers:
            {
                "Authorization": token
            },
            data:
            {
                "_id": "642c22a8568c3e9fb1478314",
                "product": {
                    "_id": "6960eac0c941646b7a8b3e68",
                    "productName": "ZARA COAT 3",
                    "productCategory": "electronics",
                    "productSubCategory": "mobiles",
                    "productPrice": 11500,
                    "productDescription": "Apple phone",
                    "productImage": "https://rahulshettyacademy.com/api/ecom/uploads/productImage_1767959232316.jpeg",
                    "productRating": "0",
                    "productTotalOrders": "0",
                    "productStatus": true,
                    "productFor": "women",
                    "productAddedBy": "admin",
                    "__v": 0
                }
            }
        }
    )


    const addToCartResponse = await addProdToCartPostRequest.json();
    await expect(addProdToCartPostRequest.status()).toBe(200);
    await expect(addToCartResponse.message).toBe("Product Added To Cart");




    const createOrderRequest = await request.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
        {
            headers:
            {
                "Authorization": token
            },
            data:

            {
                "orders": [
                    {
                        "country": "India",
                        "productOrderedId": "6960eac0c941646b7a8b3e68"
                    }
                ]
            }
        }
    )

    const createOrderResponse = await createOrderRequest.json();
    await expect(createOrderRequest.status()).toBe(201);
    console.log(createOrderResponse)
    
})
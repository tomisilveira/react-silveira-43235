# E-commerce Project

This project is an e-commerce website that allows users to browse and purchase products online. It is built using React and utilizes Firebase as the backend database. It provides various features such as product listing, individual product details, adding products to the shopping cart, and a checkout process.

**Note: This project focuses on the customer-facing sales part and does not include a dashboard or administrative functionality for managing the store.**

## Key Features

- Product listing by category
- Individual product details
- Adding products to the shopping cart
- Checkout process with buyer information form
- Stock management of products

## Technologies Used

- React
- Firebase Firestore (as the database)
- React Router (for routing)
- React Bootstrap (for styling and components)
- FontAwesome (for icons)

## Database Structure

The Firebase Firestore database used in this project has the following collections:

### Products

- **id** (Autoincrementable): Unique identifier for each product.
- **categoria**: Category of the product.
- **descripcion**: Description of the product.
- **img**: Image URL of the product.
- **nombre**: Name of the product.
- **precio**: Price of the product.
- **stock**: Stock quantity of the product.

### Orders

- **id** (Autoincrementable): Unique identifier for each order.
- **buyer**: Array containing buyer information.
- **items**: Array containing the items purchased.
- **total**: Total amount to be paid for the order.

## Project Structure

- **src/components**: Contains the main components of the application.
- **src/context**: Contains the context and hooks for the shopping cart.
- **src/hooks**: Contains custom hooks used in the application.
- **src/services/firebase**: Contains the Firebase configuration and functions for interacting with the database.
- **src/views**: Contains the main views of the application, such as the product list, product details, and checkout process.

## Installation

1. Clone this repository to your local machine.
2. Run `npm install` to install the dependencies.
3. Configure your Firebase connection in the `src/services/firebase/firebaseConfig.js` file.
4. Run `npm start` to start the application in development mode.

## Contribution

If you would like to contribute to this project, you can follow these steps:

1. Fork this repository.
2. Create a new branch with the new feature or improvement you want to implement.
3. Make the necessary changes in your branch.
4. Create a pull request to the main branch of this repository.
5. Wait for the review and approval of your changes.

## License

This project is licensed under the MIT License. You can find more details in the [LICENSE](LICENSE) file.

## Contact

If you have any questions or suggestions about this project, you can contact me via email: [silveirat01@gmail.com](mailto:silveirat01@gmail.com).

Thank you for visiting this project! I hope it is helpful and assists you in learning and developing your web development skills.
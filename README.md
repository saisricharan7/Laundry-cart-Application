# Laundry-cart-Application
The Laundry Cart project is a full-stack web application developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). This platform allows users to sign in, manage their laundry orders, and track the cost estimation of their laundry services. The project emphasizes a seamless and user-friendly interface to provide an intuitive experience for both new and returning users.
Key Features:
User Authentication:

Users can sign up and log in to their accounts securely using JWT-based authentication.
Protected routes ensure only authenticated users can access key features like order management and history.
Clothes Management:

After logging in, users can add their laundry items to the cart, specifying details such as the type of clothing and the quantity.
The interface allows users to quickly see a list of available items (shirts, pants, jackets, etc.), making it simple to add or remove items.
Cost Estimation:

As clothes are added to the cart, the system dynamically calculates the cost estimation based on pre-defined rates for each clothing type.
Users can review the total cost before confirming their order, giving them control over their spending.
Order Confirmation:

Once satisfied with their selection, users can confirm the order. The system then stores the order details, generating a unique order ID for tracking.
Order History & Cancellation:

Users can view their previous orders, including the status of each order (completed, in progress, etc.).
If needed, users can cancel an order as long as it has not yet been processed. This option ensures flexibility for users in managing their laundry needs.
Logout Functionality:

A simple logout button is provided, allowing users to securely end their session with a single click. This ensures privacy and security when using the platform on shared devices.
Responsive and User-Friendly UI:

The React.js front end is designed to be responsive, ensuring smooth performance across devices, including mobile, tablet, and desktop.
The UI focuses on simplicity and ease of use, with clear navigation, interactive feedback, and a modern aesthetic. Forms are kept minimal, with validations to guide users through the input process.
Technologies Used:
MongoDB: A NoSQL database to store user data, orders, and clothing details.
Express.js: The backend framework handling routing, authentication, and order logic.
React.js: Frontend framework providing a dynamic and responsive user interface.
Node.js: The runtime environment for server-side logic and API development.

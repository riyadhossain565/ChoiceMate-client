# Client Side - ChoiceMate

🔗 **Live Demo:** [ChoiceMate](https://choice-mate.web.app/)  

This is the frontend application for the ChoiceMate platform, built using React. It provides users with an interface to view, search, and interact with queries and recommendations.

## Features

- **Responsive Design:** Adapts seamlessly to various screen sizes and devices.
- **Search Functionality:** Allows users to search for queries by product name.
- **Dynamic Grid Layout:** Users can toggle between 1, 2, or 3-column layouts for queries.
- **Recommendations:** Displays and manages recommendations for queries.
- **Interactive UI:** Clean and user-friendly interface.

## Tech Stack

- **Frontend:** React, Tailwind CSS
- **HTTP Client:** Axios
- **Icons:** React Icons


## Key Functionalities

### 1. **Search Functionality**

- Users can search for queries by typing the product name in the search bar.
- The search text is sent to the server, and the matching results are displayed dynamically.

### 2. **Dynamic Grid Layout**

- Toggle buttons allow users to switch between different grid layouts (1, 2, or 3 columns).
- Layout changes are reflected instantly for a better user experience.

### 3. **Query Management**

- Users can view detailed information about queries.
- Recommendations are displayed and managed dynamically.

## Dependencies

- `react`: JavaScript library for building user interfaces.
- `axios`: Promise-based HTTP client for making API requests.
- `react-icons`: Library for using icons in React.
- `tailwindcss`: Utility-first CSS framework for styling.

## API Integration

The client interacts with the backend server to fetch and manipulate data.

---

## **🚀 How to Run the Project Locally**  

### **Prerequisites**  
Ensure you have the following installed on your system:  
- **Node.js** (Latest LTS version recommended)  
- **npm** or **yarn** (Package manager)  

### **Step-by-Step Guide**  

1️⃣ **Clone the Repository:**  
```sh
git clone https://github.com/riyadhossain565/ChoiceMate-client.git
```
2️⃣ **Navigate to the Project Directory:**  
```sh
cd ChoiceMate-client
```
3️⃣ **Install Dependencies:**  
```sh
npm install
```
or  
```sh
yarn install
```
4️⃣ **Create a `.env` File (If Required)**  
If your project uses environment variables, create a `.env` file and add required API keys. Example:  
```env
REACT_APP_API_BASE_URL=https://your-api-url.com
```
5️⃣ **Start the Development Server:**  
```sh
npm start
```
or  
```sh
yarn start
```
6️⃣ **Open in Browser:**  
After running the command, open **[http://localhost:3000](http://localhost:3000)** in your browser to see the app in action!  


## License

This project is licensed under the MIT License. See the LICENSE file for details.

# 🍔 Hunger - Food Delivery Application

A full-stack food delivery platform with user ordering, admin management, and PhonePe payment integration. Built with modern web technologies for seamless food ordering experience.

## ✨ Features

### 🛒 User Features
- **Browse & Search** - Explore food items with advanced search
- **Add to Cart** - Manage cart with quantity controls
- **User Authentication** - Secure login/signup system
- **Order Tracking** - Real-time order status updates
- **Payment Integration** - PhonePe payment gateway
- **Order History** - View past orders and receipts

### 👨‍💼 Admin Panel
- **Food Management** - Add, edit, delete food items
- **Order Management** - View and update order status
- **User Management** - Monitor user activities
- **Analytics Dashboard** - Sales and revenue insights

### 💳 Payment Gateway
- **PhonePe Integration** - Secure payment processing
- **Multiple Payment Options** - UPI, Cards, Wallets
- **Transaction History** - Complete payment records

## 🚀 Quick Start

### Prerequisites
- Node.js (v14+)
- MongoDB
- PhonePe Merchant Account

### Installation
```bash
# Clone repository
git clone https://github.com/PritomDutta89/Hunger.git
cd Hunger

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

### Environment Variables

Create `.env` file in backend folder:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PHONEPE_MERCHANT_ID=your_merchant_id
PHONEPE_SALT_KEY=your_salt_key
PHONEPE_SALT_INDEX=your_salt_index
```

### Run Application
```bash
# Start backend server
cd backend
npm start

# Start frontend (in new terminal)
cd frontend
npm start
```

Access the application:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **Admin Panel**: http://localhost:3000/admin

## 🛠️ Tech Stack

**Frontend:**
- React.js
- React Router
- Axios
- CSS3

**Backend:**
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

**Payment:**
- PhonePe Payment Gateway

## 📁 Project Structure
```
Hunger/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── App.js
│   └── package.json
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── server.js
└── README.md
```

### User Interface
- Home page with food listings
- Cart and checkout page
- Order tracking page

### Admin Panel
- Dashboard with analytics
- Food management interface
- Order management system

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/NewFeature`)
3. Commit changes (`git commit -m 'Add NewFeature'`)
4. Push to branch (`git push origin feature/NewFeature`)
5. Open Pull Request

## 👨‍💻 Author

**Pritom Dutta**

## 🙏 Acknowledgments

- PhonePe for payment gateway
- MongoDB for database
- React community for amazing tools

---

⭐ Star this repo if you find it useful!

**Made with ❤️ for food lovers**

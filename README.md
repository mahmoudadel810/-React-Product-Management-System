# React Product Management System

A modern React application for managing products with features like adding, listing, and removing products. Built with React, Vite, Bootstrap, and Joi validation.

## 🚀 Features

- Add new products with validation
- Display products in a responsive table
- Remove products
- Free shipping option
- Form validation with Joi
- Modern UI with Bootstrap 5
- Responsive design

## 🛠️ Technologies Used

- React 19.0.0
- Vite 6.3.3
- Bootstrap 5.3.5
- React Bootstrap 2.10.9
- Joi 17.13.3
- ESLint for code quality

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## 🔧 Available Scripts

- `npm run dev` - Starts development server
- `npm run build` - Builds the app for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🏗️ Project Structure

```
src/
├── components/
│   ├── ProductForm.jsx    # Form for adding new products
│   └── ProductList.jsx    # Table display of products
├── Pages/
│   └── ProductPage.jsx    # Main product management page
├── layout/
│   └── MainLayout.jsx     # Main layout component
└── main.jsx              # Application entry point
```

## 💡 Component Overview

### ProductForm
- Handles product input with validation
- Fields:
  - Product Name
  - Product Price
  - Free Shipping option
- Real-time validation feedback
- Form reset after successful submission

### ProductList
- Displays products in a responsive table
- Shows:
  - Product ID
  - Name
  - Price
  - Shipping Status
  - Remove option
- Empty state handling

### ProductPage
- Main container component
- Manages product state
- Handles add/remove operations
- Implements Joi validation

## 🔍 Validation Rules

- Product Name:
  - Required
  - Min length: 3 characters
  - Max length: 30 characters

- Price:
  - Required
  - Must be a positive number

- Free Shipping:
  - Optional boolean value

## 🎨 Styling

- Bootstrap 5 for base styling
- Bootstrap Icons for icons
- Custom CSS for enhanced UI
- Responsive design for all screen sizes

## 🌟 Best Practices

- Component-based architecture
- State management using React Hooks
- Form validation with Joi
- Consistent error handling
- Responsive design principles
- Clean and maintainable code structure

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details

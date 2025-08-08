# ChargeHive Frontend

A modern, responsive React application for managing EV charging stations. Built with Vite, React, and Tailwind CSS.

## 🚀 Features

### Core Functionality

- **User Authentication** - Secure login/register with JWT tokens
- **Station Management** - CRUD operations for charging stations
- **Real-time Dashboard** - Live statistics and monitoring
- **Interactive Maps** - Station location visualization
- **Booking System** - Station booking and management
- **Role-based Access** - Admin, Operator, and User roles
- **Responsive Design** - Mobile-first approach

### Technical Features

- **Modern React** - Built with React 18 and hooks
- **TypeScript Ready** - Easy migration path
- **State Management** - Context API for global state
- **API Integration** - RESTful API communication
- **Error Handling** - Comprehensive error management
- **Loading States** - Smooth user experience
- **Form Validation** - Client-side validation
- **Security** - Protected routes and authentication

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- ChargeHive Backend running on `localhost:8080`

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd chargeHive_client
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the root directory:

   ```env
   VITE_API_BASE_URL=http://localhost:8080/api
   VITE_APP_NAME=ChargeHive
   VITE_APP_VERSION=1.0.0
   VITE_ENABLE_DEBUG_MODE=true
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation component
│   ├── Sidebar.jsx     # Sidebar navigation
│   ├── StationTable.jsx # Station management table
│   ├── BookingTable.jsx # Booking management table
│   ├── StationForm.jsx # Station creation/editing form
│   ├── StationMap.jsx  # Interactive map component
│   ├── KPICards.jsx    # Dashboard KPI cards
│   ├── EarningsChart.jsx # Earnings visualization
│   └── Notifications.jsx # Notification component
├── pages/              # Page components
│   ├── HomePage.jsx    # Landing page
│   ├── DashboardPage.jsx # Main dashboard
│   ├── LoginPage.jsx   # Authentication page
│   └── RegisterPage.jsx # Registration page
├── context/            # React Context providers
│   └── AuthContext.jsx # Authentication context
├── services/           # API services
│   └── api.js         # API communication layer
├── config/            # Configuration files
│   └── config.js      # App configuration
├── assets/            # Static assets
└── styles/            # Global styles
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Styling

This project uses **Tailwind CSS** for styling. Key design principles:

- **Green Theme** - Primary color scheme for EV/eco-friendly branding
- **Responsive Design** - Mobile-first approach
- **Modern UI** - Clean, professional interface
- **Accessibility** - WCAG compliant components

## 🔐 Authentication

The application implements JWT-based authentication:

1. **Login** - Email/password authentication
2. **Registration** - User account creation
3. **Protected Routes** - Role-based access control
4. **Session Management** - Automatic token refresh
5. **Logout** - Secure session termination

### User Roles

- **ADMIN** - Full system access
- **OPERATOR** - Station management
- **USER** - Basic user access

## 📊 API Integration

The frontend communicates with the backend through RESTful APIs:

### Authentication Endpoints

- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `GET /api/auth/get-by-id/{id}` - Get user details
- `PUT /api/auth/edit-user` - Update user profile

### Station Endpoints

- `GET /api/stations` - Get all stations
- `POST /api/stations` - Create new station
- `PUT /api/stations/{id}` - Update station
- `DELETE /api/stations/{id}` - Delete station
- `GET /api/stations/get-station-by-owner` - Get user's stations

### Admin Endpoints

- `GET /api/admin/stations` - Get all stations (admin)
- `GET /api/admin/users` - Get all users (admin)
- `POST /api/admin/stations/process-approval` - Approve/reject stations
- `GET /api/admin/audit-logs` - Get audit logs

## 🗺️ Component Architecture

### Core Components

1. **Navbar** - Main navigation with user menu
2. **Sidebar** - Secondary navigation
3. **Dashboard** - Main dashboard with KPIs
4. **StationTable** - Station management interface
5. **StationForm** - Station creation/editing modal
6. **StationMap** - Interactive map visualization

### State Management

- **AuthContext** - Global authentication state
- **Local State** - Component-specific state
- **API State** - Server data management

## 🚀 Deployment

### Production Build

1. **Build the application**

   ```bash
   npm run build
   ```

2. **Deploy to your hosting service**
   - Vercel, Netlify, or any static hosting
   - Configure environment variables
   - Set up custom domain

### Environment Variables

Required environment variables for production:

```env
VITE_API_BASE_URL=https://your-api-domain.com/api
VITE_APP_NAME=ChargeHive
VITE_ENABLE_DEBUG_MODE=false
```

## 🧪 Testing

### Manual Testing Checklist

- [ ] User registration and login
- [ ] Station CRUD operations
- [ ] Role-based access control
- [ ] Responsive design on mobile
- [ ] Form validation
- [ ] Error handling
- [ ] Loading states
- [ ] Navigation and routing

### Automated Testing (Future)

- Unit tests with Jest
- Integration tests with React Testing Library
- E2E tests with Cypress

## 🐛 Troubleshooting

### Common Issues

1. **API Connection Failed**

   - Check if backend is running
   - Verify API_BASE_URL in .env
   - Check network connectivity

2. **Authentication Issues**

   - Clear browser storage
   - Check JWT token validity
   - Verify user credentials

3. **Build Errors**
   - Clear node_modules and reinstall
   - Check Node.js version
   - Verify all dependencies

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:

- Create an issue on GitHub
- Contact the development team
- Check the documentation

## 🔄 Version History

- **v1.0.0** - Initial release with core functionality
- **v1.1.0** - Added authentication and user management
- **v1.2.0** - Enhanced station management features
- **v1.3.0** - Added booking system and real-time updates

---

**ChargeHive** - Empowering the future of electric vehicle charging management.

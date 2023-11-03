import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'

import Sidebar from './components/Sidebar'
import Login from './components/login/Login'
import OwnerLogin from './components/login/OwnerLogin'
import AdminLogin from './components/login/AdminLogin'
import DoctorLogin from './components/login/DoctorLogin'

//general
import HomePage from './page/general/HomePage'
import AboutUsPage from './page/general/AboutUsPage'

//customer
import CustomerHomePage from './page/customer/CustomerHomePage'

//admin
import AdminHomePage from './page/admin/AdminHomepage'
import AdminUserManageMent from './page/admin/AdminUserManagementPage'
import AdminUserAddAdmin from './page/admin/AdminUserAddAdmin'
import AdminUserEditAdmin from './page/admin/AdminUserEditAdmin'
import AdminUserAddDoctor from './page/admin/AdminUserAddDoctor'


//doctor
import DoctorHomePage from './page/doctor/DoctorHomePage'

//owner
import OwnerHomePage from './page/owner/OwnerHomePage'
import OwnerAddClinic from './page/owner/OwnerAddClinic'
import OwnerEditClinic from './page/owner/OwnerEditClinic'
import OwnerUserManagementPage from './page/owner/OwnerUserManagementPage'
import OwnerAddAdmin from './page/owner/OwnerAddAdmin'
import OwnerAddOwner from './page/owner/OwnerAddOwner'
import OwnerEditOwner from './page/owner/OwnerEditOwner'
import OwnerEditAdmin from './page/owner/OwnerEditAdmin'
import OwnerServicePage from './page/owner/OwnerServicePage'
import OwnerAddService from './page/owner/OwnerAddService'
import OwnerEditService from './page/owner/OwnerEditService'

const routes = [
  //Login
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/owner/login',
    element: <OwnerLogin />
  },
  {
    path: '/admin/login',
    element: <AdminLogin />
  },
  {
    path: '/doctor/login',
    element: <DoctorLogin />
  },

  //general
  {
    path: '/Home',
    element: <HomePage />
  },
  {
    path: '/aboutUs',
    element: <AboutUsPage />
  },

  //customer
  {
    path: '/customer/Home',
    element: <CustomerHomePage />
  },

  //admin
  {
    path: '/admin/Home',
    element: <AdminHomePage />
  },
  {
    path: '/admin/user/management',
    element: <AdminUserManageMent />
  },
  {
    path: '/admin/user/add/admin',
    element: <AdminUserAddAdmin />
  },
  {
    path: '/admin/user/edit/admin/:adminID/*',
    element: <AdminUserEditAdmin />
  },
  {
    path: '/admin/user/add/doctor',
    element: <AdminUserAddDoctor />
  },

  //doctor
  {
    path: '/doctor/Home',
    element: <DoctorHomePage />
  },

  //owner
  {
    path: '/owner/Home',
    element: <OwnerHomePage />
  },
  {
    path: '/owner/add/clinic',
    element: <OwnerAddClinic />
  },
  {
    path: '/owner/edit/clinic/:clinicID/*',
    element: <OwnerEditClinic />
  },
  {
    path: '/owner/user/management',
    element: <OwnerUserManagementPage />
  },
  {
    path: '/owner/add/admin',
    element: <OwnerAddAdmin />
  },
  {
    path: '/owner/add/owner',
    element: <OwnerAddOwner />
  },
  {
    path: '/owner/edit/owner/:ownerID/*',
    element: <OwnerEditOwner />
  },
  {
    path: '/owner/edit/admin/:adminID/*',
    element: <OwnerEditAdmin />
  },
  {
    path: '/owner/service',
    element: <OwnerServicePage />
  },
  {
    path: '/owner/add/service',
    element: <OwnerAddService />
  },
  {
    path: '/owner/edit/service/:typeID/*',
    element: <OwnerEditService />
  }
]

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/' || location.pathname === '/owner/login' || location.pathname === '/admin/login' || location.pathname === '/doctor/login';

  const contentStyle = {
    marginLeft: isLoginPage ? '0' : '250px', // ถ้าเป็นหน้า Login กำหนด marginLeft เป็น 0 ไม่มี margin
    padding: isLoginPage ? '0' : '20px', // ถ้าเป็นหน้า Login กำหนด padding เป็น 0 ไม่มี padding
  };

  return (
    <div>
      {!isLoginPage && <Sidebar />}
      <div style={contentStyle}>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
    </div>
  );
}


export default App
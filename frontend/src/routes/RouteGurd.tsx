import { Navigate } from 'react-router-dom';

export const RouteGuard = ({ element, roles, ...rest }: any) => {
  const userRole:any = localStorage.getItem('userData');

   // Get the user's role from localStorage
   const Role = JSON.parse(userRole);

  // Check if the route has a role property and if the user's role is allowed
  if (roles && !roles.includes(Role)) {
    // Redirect to login if the role is not allowed
    return <Navigate to="/auth/signin" />;
  }

  // If user has the correct role, render the component
  return element;
};

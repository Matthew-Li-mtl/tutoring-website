import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface RootSlashFixProps {
  children: React.ReactNode;
}

export function RootSlashFix({ children }: RootSlashFixProps) {
  const location = useLocation();

  useEffect(() => {
    console.log(window.location.pathname);
    if (window.location.pathname === '/tutoring-website') {
      window.history.replaceState(null, '', '/tutoring-website/');
    }
  }, [location]);

  return <>{children}</>;
}
import { useEffect, useState } from 'react';
import useAuth from './useAuth';
import { getRole } from '../api/auth';

const useRole = () => {
  const { user } = useAuth();
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getRole(user?.email).then(data => {
      setRole(data);
      setLoading(false);
    });
  }, [user]);

  return [role, loading];
};

export default useRole;

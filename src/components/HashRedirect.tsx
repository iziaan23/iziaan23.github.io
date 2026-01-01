import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const HashRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if there's a hash that looks like a route (e.g., /#/about)
    const hash = window.location.hash;
    
    if (hash && hash.startsWith("#/")) {
      // Extract the path from the hash (remove the #)
      const cleanPath = hash.substring(1); // removes the # to get /about
      
      // Replace the current URL with the clean version
      navigate(cleanPath, { replace: true });
    }
  }, [navigate]);

  return null;
};

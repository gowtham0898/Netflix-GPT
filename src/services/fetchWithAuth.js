import React from 'react'
import Cookies from 'js-cookie';

const  fetchWithAuth =async (url,options={}) => {
    const getAuthToken =() => {
        return Cookies.get('authToken');
    }

    const token = getAuthToken();
    const headers = {
        ...options.headers,
        'Authorization': `Bearer ${token}`,
      };
      
      const response = await fetch(url, {
        ...options,
        headers,
      });
    
      return response;
}

export default fetchWithAuth
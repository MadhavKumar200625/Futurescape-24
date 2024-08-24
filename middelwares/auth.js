export function auth(token) {
    
  
    if (!token || !token.startsWith('Bearer ')) {
      return false
    }
  
    const envToken = process.env.AUTH_TOKEN;
  
    if (token.split(' ')[1] == envToken) {
      return true
    }
  

  }
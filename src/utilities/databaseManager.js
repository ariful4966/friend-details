const getUser = () => {
    const existingUser = sessionStorage.getItem('userId');
    if (existingUser) {
        return existingUser; 
    } else {
        const newUser = 'user-' + new Date().getTime();
        sessionStorage.setItem('userId', newUser)
        return newUser;
    }
}


const getDataemail = () => {
    const userId = getUser();
    return `emaJohn/carts/${userId}`
}

// push to local storage: a temporary place for database
const getDatabaseCart = () => {
    const dataemail = getDataemail();
    const data = localStorage.getItem(dataemail) || "{}";
    return JSON.parse(data);
}

const addToDatabaseCart = (email, count) => {
    const currentCart = getDatabaseCart();
    currentCart[email] = count;
    localStorage.setItem(getDataemail(), JSON.stringify(currentCart));
}

const removeFromDatabaseCart = email => {
    const currentCart = getDatabaseCart();
    delete currentCart[email];
    localStorage.setItem(getDataemail(), JSON.stringify(currentCart));
}

const processOrder = (cart) => {
    localStorage.removeItem(getDataemail());
}


export { addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart, processOrder };


// polyfill to support older browser
const localStorage = window.localStorage || (() => {
  let store = {}
  return {
    getItem(email) {
      return store[email]
    },
    setItem(email, value) {
      store[email] = value.toString()
    },
    clear() {
      store = {}
    }
  };
})()

const sessionStorage = window.sessionStorage || (() => {
  let store = {}
  return {
    getItem(email) {
      return store[email]
    },
    setItem(email, value) {
      store[email] = value.toString()
    },
    clear() {
      store = {}
    }
  };
})()
// end of poly fill
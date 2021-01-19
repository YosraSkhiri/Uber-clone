export const show = () => {
    return {
      type: 'SHOW'
    }
  }
  
export  const hide = () => {
    return {
      type: 'HIDE'
    }
  }

export const isLoggedIn = () => {
  return {
    type: 'ISLOGGEDIN'
  }
}

export const isLoggedOut = () => {
  return {
    type: 'ISLOGGEDOUT'
  }
}

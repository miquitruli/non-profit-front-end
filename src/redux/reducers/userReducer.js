
const userReducer = (state = { user: null, authCheck: false, loggedIn: false}, action) => {
    switch(action.type) {
        case "SET_USER":
            return {
                authCheck: true,
                loggedIn: true,
                user: action.user,
            }
        case "LOGOUT_USER":
            localStorage.removeItem("token")
            return {
                authCheck: true,
                loggedIn: false,
                user: null,
            }
        default:
            return state
    }
}

export default userReducer;
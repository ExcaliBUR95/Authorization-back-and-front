const initialState = {
  signingUp: false,
  signingin: false,
  error: null,
  token: localStorage.getItem("token"),
};

export const application = (state = initialState, action) => {
  switch (action.type) {
    case "application/signup/pending":
      return {
        ...state,
        signingUp: true,
        error: null,
      };

    case "application/signup/fulfilled":
      return {
        ...state,
        signingUp: false,
        error: action.error,
      };

    case "application/signup/rejected":
      return {
        ...state,
        signingUp: false,
        error: action.error,
      };

    case "application/signin/pending":
      return {
        ...state,
        signingIn: true,
        error: null,
      };

    case "application/signin/fulfilled":
      return {
        ...state,
        signingIn: false,
        error: action.error,
        token: action.payload.token,
      };

    case "application/signin/rejected":
      return {
        ...state,
        signingIn: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export const createUser = (login, password) => {
  return async (dispatch) => {
    dispatch({ type: "application/signup/pending" });

    const res = await fetch("/users", {
      method: "POST",
      body: JSON.stringify({ login, password }),
      headers: {
        "Content-type": "application/json",
      },
    });

    const json = await res.json();

    if (json.error) {
      dispatch({ type: "application/signup/rejected", error: json.error });
    } else {
      dispatch({ type: "application/signup/fulfilled", payload: json });
    }
  };
};

export const auth = (login, password) => {
  return async (dispatch) => {
    dispatch({ type: "application/signin/pending" });

    const res = await fetch("/login", {
      method: "POST",
      body: JSON.stringify({ login, password }),
      headers: {
        "Content-type": "application/json",
      },
    });

    const json = await res.json();

    if (json.error) {
      dispatch({ type: "application/signin/rejected", error: json.error });
    } else {
      dispatch({ type: "application/signin/fulfilled", payload: json });

      localStorage.setItem("token", json);
    }
  };
};

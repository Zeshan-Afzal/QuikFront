export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: "loadUserRequest" });
    const res = await fetch("/api/user/get-user");
    const data = await res.json();

    if (!data.success)
      return dispatch({ type: "loadUserFailiure", payload: data.message });
    console.log(data);
    dispatch({ type: "loadUserSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "loadUserFailiure", payload: error.message });
  }
};

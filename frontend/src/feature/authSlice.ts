import { createSlice } from '@reduxjs/toolkit';
interface auth {
  token: string | null;
  user: any;
  isAuthenticated: boolean;
}

const initialState: auth = {
  token: localStorage.getItem('token'),
  user: localStorage.getItem('user'),
  isAuthenticated: !!localStorage.getItem('token'),
};
export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    storeUserData: (state, action) => {
      const { data } = action.payload;
      console.log(data);
      
      state.token = data.token;
      state.isAuthenticated = !!data.token;
      state.user =data;
      localStorage.setItem("userData",JSON.stringify(data));
      localStorage.setItem("token",data.token)
    },
    logout: (state) => {   
        state.token = null;
        state.user = null;
        state.isAuthenticated = false
        localStorage.removeItem("userData");
        localStorage.removeItem("token");

     }
  },
});

// Action creators are generated for each case reducer function
export const { storeUserData ,logout} = authSlice.actions;

export default authSlice.reducer;

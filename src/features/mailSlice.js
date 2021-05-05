import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    selectedMail: null,
    sendMessageisOpen: false,
    value: 0,
  },
  reducers: {
    selectMail:(state,action)=> {
     
      state.selectedMail = action.payload;
},

    openSendMessage: state => {
      state.sendMessageisOpen = true;
    },
    closeSendMessage: state => {
      state.sendMessageisOpen = false;
    },
  
    
  },
});




// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

export const { openSendMessage , closeSendMessage , selectMail } = mailSlice.actions;

export const  selectsendMessageisOpen = state => state.mail.sendMessageisOpen;
export const selectOpenMail = state => state.mail.selectedMail;

export default mailSlice.reducer;

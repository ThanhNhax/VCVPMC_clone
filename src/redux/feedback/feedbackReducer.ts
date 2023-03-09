import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../FireStore/fireStore";
import { FeedbackRedux } from "../../pages/HoTro/Feedback";
import { AppDispatch } from "../configStore";

interface FeedbackState {
  arrFeedback: [] | FeedbackRedux[];
  itemFeedback: FeedbackRedux | null;
}
const initialState: FeedbackState = {
  arrFeedback: [],
  itemFeedback: null,
};

const feedbackReducer = createSlice({
  name: "feedback",
  initialState,
  reducers: {
    setArrFeedback: (
      state: FeedbackState,
      actions: PayloadAction<FeedbackRedux[]>
    ) => {
      state.arrFeedback = actions.payload;
    },
    setitemFeedback: (
      state: FeedbackState,
      actions: PayloadAction<FeedbackRedux>
    ) => {
      state.itemFeedback = actions.payload;
    },
  },
});

export const { setArrFeedback, setitemFeedback } = feedbackReducer.actions;

export default feedbackReducer.reducer;

// get date từ fireStore về
// kết nối với firebae
export const getArrFeedbackFireStore = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = query(collection(db, "feedback"));
      onSnapshot(result, (querySnapshot) => {
        let arrFeedback: any = [];
        querySnapshot.forEach((doc) => {
          arrFeedback.push({ ...doc.data(), id: doc.id });
        });
        dispatch(setArrFeedback(arrFeedback));
      });
    } catch (error) {
      console.log({ error });
    }
  };
};

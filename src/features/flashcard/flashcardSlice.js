import { createSlice } from "@reduxjs/toolkit";

// Application has One Global state which can be supplied to the whole application
const initialState = {
  // First it looks into the Localstarage for any Flashcards & sets to the initial state, If not Found then it will set it to Empty array
  flashcards: localStorage.getItem("flashcards")
    ? JSON.parse(localStorage.getItem("flashcards"))
    : [],
};

export const flashcardSlice = createSlice({
  name: "flashcard",
  initialState,
  reducers: {
    // This Reducer added the New Flashcards to the store
    setFlashCard(state, action) {
      state.flashcards.push({
        card: action.payload,
      });
      // after accepting the new flashcard from the user it sets to the Local Starage
      localStorage.setItem("flashcards", JSON.stringify(state.flashcards));
    },
  },
});

export const { setFlashCard } = flashcardSlice.actions;

// export const cardById = (state, groupId) =>
//   state.flashcard.flashcards.filter((c) => c.groupid === groupId);

export default flashcardSlice.reducer;

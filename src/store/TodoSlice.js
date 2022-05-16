import { createSlice, current } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const initialState = {
  todoItem: [],
  activeTasks: [],
  completedTasks: [],
};

const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = {
        id: v4(),
        title: action.payload,
        checked: false,
      };
      state.todoItem.push(newItem);
    },

    toggleStatus(state, action) {
      const id = action.payload.item.id;
      const index = state.todoItem.findIndex((todoItem) => todoItem.id === id);
      if (index !== -1) {
        state.todoItem[index].checked = !action.payload.item.checked;
      }
    },

    removeItem(state, action) {
      const id = action.payload.item.id;
      const index = state.todoItem.findIndex((todoItem) => todoItem.id === id);
      if (index !== -1) {
        state.todoItem.splice(index, 1);
      }
    },

    activeTasks() {},
    completedTasks() {},
    AllTasks() {},
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice;

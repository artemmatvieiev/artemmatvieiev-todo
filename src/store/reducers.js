import { ADD_TASK, SET_USER, SET_INFO, REMOVE_TASK, SET_STATUS_TASK, UPDATE_TASK } from './actions';

export const tasks = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK: {
      return [...state, ...action.payload];
    }
    case REMOVE_TASK: {
      const { day, index } = action.payload;
      const tasks = state[day];
      const newTasks = tasks.filter((el, number) => number !== index);
      state[day] = newTasks;
      return [...state];
    }
    case SET_STATUS_TASK: {
      return [...state, ...action.payload];
    }
    case UPDATE_TASK: {
      return action.payload;
    }
  }

  return state;
};

export const user = (state = null, action) => {
  switch (action.type) {
    case SET_USER: {
      return action.payload;
    }
  }

  return state;
};

export const info = (state = null, action) => {
  switch (action.type) {
    case SET_INFO: {
      return action.payload;
    }
  }

  return state;
};

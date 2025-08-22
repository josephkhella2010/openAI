import { configureStore } from "@reduxjs/toolkit";
import ChatMessageSliceReducer from "../sliceRedux/ChatMessageSlice";
// Create Store
//const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    messageStore: ChatMessageSliceReducer,
  },
  /*  middleware: (getDefault) =>
    getDefault({ thunk: false }).concat(sagaMiddleware), */
});
//sagaMiddleware.run(sagaRoot);

// Run Saga
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

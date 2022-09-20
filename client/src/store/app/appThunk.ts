import { auth } from "../auth/authThunk"
import { init } from "./appSlice";

export const initApp = () => (dispatch: any) => {
  const promise = dispatch(auth());

  Promise.all([promise]).then(() => {
    dispatch(init({ initialized: true }));
  });
}
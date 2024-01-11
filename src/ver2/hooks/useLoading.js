import { useDispatch } from "react-redux";

const useLoading = () => {
  const dispatch = useDispatch();

  const setIsLoading = (status) => {
    dispatch({
      type: "SET_IS_LOADING",
      payload: !!status,
    });
  };

  return { setIsLoading };
};

export default useLoading;

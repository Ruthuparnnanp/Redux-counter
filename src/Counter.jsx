import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  reset,
  incrementByAmount,
} from "./redux/counterSlice";

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counterReducer.count);
  return (
    <>
      <div
        style={{
          width: "800px",
          height: "400px",
          border: "4px solid cyan",
          padding: "2rem",
          borderRadius: "6px",
        }}
        className="container d-flex justify-content-center align-items-center text-light "
      >
        <div className="row justify-content-center w-100">
          <div className="col-md-4 text-center">
            <h1 style={{ fontWeight: "bolder", fontFamily: "cursive" }}>
              Counter
            </h1>
            <p style={{ color: "gold" }} className="display-4">
              {count}
            </p>
            <div className="btn-group">
              <button
                className="btn btn-outline-warning"
                onClick={() => dispatch(increment())}
              >
                Increment
              </button>
              <button
                className="btn btn-outline-primary"
                onClick={() => dispatch(decrement())}
              >
                Decrement
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => dispatch(reset())}
              >
                Reset
              </button>
            </div>
            <button
              className="btn mt-2 btn-outline-light"
              onClick={() => dispatch(incrementByAmount(10))}
            >
              Increment
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Counter;

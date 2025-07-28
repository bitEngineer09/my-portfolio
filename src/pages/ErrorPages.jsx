import React from "react";
import ErrorCard from "../UI/ErrorCard";
import Social from "../UI/Social";

const ErrorPages = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <ErrorCard />
      {/* <Social /> */}
    </div>
  );
};

export default ErrorPages;

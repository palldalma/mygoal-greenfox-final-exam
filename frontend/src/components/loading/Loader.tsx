import { FC } from "react";
import { Spinner } from "react-bootstrap";
import { LoaderWrapper } from "../../styles/loader.styles";

import "../../styles/loader.styles.css";

export interface LoaderProps {
  loading: string[];
}

const Loader: FC<LoaderProps> = ({ loading }) => {
  return (
    <LoaderWrapper
      id="loaderwrapper"
      className={`${loading.length === 0 ? "non-visible" : "visible"}`}
    >
      <Spinner
        animation="border"
        role="status"
        style={{ height: "40px", width: "40px" }}
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </LoaderWrapper>
  );
};

export default Loader;

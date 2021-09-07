import { FC } from "react";
import { Spinner } from "react-bootstrap";
import { LoaderWrapper } from "../../styles/loader.styles";

import "../../styles/loader.styles.css";

export interface LoaderProps {
  loading: string[];
}

const Loader: FC<LoaderProps> = ({ loading }) => {
  return (
    <LoaderWrapper id="loaderwrapper">
      <Spinner
        animation="border"
        role="status"
        className={`${loading.length === 0 ? "non-visible" : "visible"}`}
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </LoaderWrapper>
  );
};

export default Loader;

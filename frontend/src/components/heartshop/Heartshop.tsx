import { FC } from "react";
// import { saveResources } from "../../store/actions/resourceAction";
import {
  PlusSign,
  HeartshopContainer,
  MinusSign,
} from "../../styles/heartshop.styles";
import Resources from "../resources/Resources";

export interface HeartShopProps {}

const HeartShop: FC<HeartShopProps> = () => {
  return (
    <>
      <HeartshopContainer>
        <div>{/* <Resources /> */}</div>

        <div className="shopbuttons">
          <button className="plusminus">
            <MinusSign />
          </button>
          <button className="plusminus">
            <PlusSign />
          </button>
        </div>
      </HeartshopContainer>
    </>
  );
};

export default HeartShop;

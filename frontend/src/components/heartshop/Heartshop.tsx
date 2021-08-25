import { FC } from "react";
// import { saveResources } from "../../store/actions/resourceAction";
import {
  PlusSign,
  HeartshopContainer,
  MinusSign,
} from "../../styles/heartshop.styles";
import { Lives } from "../../styles/resources.styles";
import Resources from "../resources/";

export interface HeartShopProps {}

const HeartShop: FC<HeartShopProps> = () => {
  return (
    <>
      <HeartshopContainer>
        <div className="shopbuttons">
          <button className="plusminus">
            <MinusSign />
          </button>
          <Lives />
          <button className="plusminus">
            <PlusSign />
          </button>
        </div>
      </HeartshopContainer>
    </>
  );
};

export default HeartShop;

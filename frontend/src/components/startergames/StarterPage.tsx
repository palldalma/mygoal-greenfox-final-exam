import { FC, useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { PageContainer } from "../../styles/page.styles";

import { UserInfo } from "../../interfaces/logininfo";
import StarterGameSelector from "./StarterGameSelector";

export interface StarterPageProps {}

const StarterPage: FC<StarterPageProps> = () => {
  const state = useSelector((state) => state);
  const token = useSelector((state: UserInfo) => state.user.token);
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkStorage = (): void => {
      if (token) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    };
    checkStorage();
  }, [state]);

  return (
    <PageContainer>
      {isLoggedIn ? <StarterGameSelector /> : <h1>You should login, buddy</h1>}
    </PageContainer>
  );
};

export default StarterPage;

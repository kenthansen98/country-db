import { Wrapper } from "./App.styles";
import Main from "./Main";
import globe from "./earth.svg";
import { useHistory } from "react-router";

const App = () => {
  const history = useHistory();

  return (
    <Wrapper>
      <img className="logo" src={globe} alt="globe" onClick={() => history.push("/")}/>
      <Main />
    </Wrapper>
  )
};

export default App;

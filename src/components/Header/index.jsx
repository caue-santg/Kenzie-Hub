import { Link } from "react-router-dom";
import { Headerstyle } from "./style";

const Header = () => {
  return (
    <Headerstyle>
      <h1>Kenzie Hub</h1>

      <Link to="/">
        <div>Voltar</div>
      </Link>
    </Headerstyle>
  );
};

export default Header;

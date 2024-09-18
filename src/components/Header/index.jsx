import * as S from "./styles.js";
import igniteLogo from "../../assets/ignite-logo.svg";
export function Header() {
  return (
    <div>
      <S.Header>
        <S.Logo src={igniteLogo} alt="logotipo do Ignite" />
      </S.Header>
    </div>
  );
}

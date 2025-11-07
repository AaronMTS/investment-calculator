import { memo } from "react";
import investmentCalculator from "../assets/investment-calculator-logo.png";

const Header = memo(function Header() {
  return (
    <header id="header">
      <img src={investmentCalculator} alt="Sack of money" />
      <h1>Investment Calculator</h1>
    </header>
  );
});

export default Header;

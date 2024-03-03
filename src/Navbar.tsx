import styled from "styled-components";

const Navbar = () => {
  return (
    <StyledNavbar>
      <NavList>
        <NavItem>Main</NavItem>
        <NavItem>Linda Forest</NavItem>
        <NavItem>References</NavItem>
        <NavItem>How it Works</NavItem>
        <NavItem>Careers/News</NavItem>
        <NavItem>Company</NavItem>
      </NavList>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  background-color: transparent;
  padding: 1rem;
  box-shadow: none;
  top: 0;
  width: 70%;
  z-index: 1000;
`;

const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const NavItem = styled.li`
  margin: 0 10px;
  color: #5c4033;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export default Navbar;

import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const HeaderBackground = styled.header`
  position: relative;
  background-color: #04011c;
  box-shadow: 0px 20px 40px rgba(205, 28, 104, 0.08);

  margin-bottom: 30px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 0 auto;
  padding: 20px 8px 20px 8px;

  @media screen and (min-width: 420px) {
    max-width: 420px;
  }

  @media screen and (min-width: 767px) {
    max-width: 768px;
    padding: 20px 12px 20px 12px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
    padding: 20px 16px 20px 16px;
  }
`;

export const LogoWrapper = styled.header`
  display: flex;
  align-items: center;

  text-decoration: none;
`;

export const LogoImg = styled.img`
  width: 30px;
  height: 30px;
`;

export const BurgerButton = styled.button`
  display: block;
  background-color: transparent;
  border: none;
  color: #fff;

  width: 40px;
  height: 40px;

  @media screen and (min-width: 768px) {
    display: none;
  }

  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

export const LogoText = styled.p`
  color: #ffffff;
`;

export const Cinema = styled.span`
  font-weight: 500;
  font-size: 1.2rem;

  text-transform: uppercase;

  color: rgba(224, 30, 90);
`;

export const MobileWrapp = styled.div`
  position: absolute;
  top: -30px;
  right: 0;
  z-index: 100;

  width: 100%;
  height: auto;

  transform: translateY(-100%);

  opacity: 0;
  visibility: hidden;
  pointer-events: none;

  padding-bottom: 10px;

  transition: transform 500ms cubic-bezier(0.075, 0.82, 0.165, 1),
    opacity 1000ms cubic-bezier(0.075, 0.82, 0.165, 1);

  background: linear-gradient(45deg, rgb(51, 12, 26), rgb(4, 1, 28) 100%);
  ${(props) =>
    props.open &&
    `
            opacity: 1;
            visibility: visible;
            pointer-events: initial;
            transform: translateY(100%);
  `}

  @media screen and (min-width: 768px) {
    position: static;

    top: 0;
    padding-bottom: 0;

    transform: translateY(0);

    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 70%;

    opacity: 1;
    visibility: visible;
    pointer-events: initial;

    background: transparent;
  }

  @media screen and (min-width: 1200px) {
    position: static;

    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 60%;

    opacity: 1;
    visibility: visible;
    pointer-events: initial;
  }
`;

export const Navigation = styled.nav`
  margin: 20px 0 20px 0;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const NavItem = styled.li`
  &:not(:last-child) {
    margin-right: 15px;
  }
`;

export const NavLink = styled(Link)`
  font-family: "Outfit", sans-serif;
  font-size: 0.9rem;
  line-height: 111%;

  text-decoration: none;

  color: #c0c0c0;

  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }

  @media screen and (min-width: 1200px) {
    font-size: 1.1rem;
  }

  &:hover,
  &:focus {
    color: #ffffff;
  }
`;

export const AuthWrapp = styled.div`
  display: flex;
  justify-content: center;
`;

export const LogOut = styled.button`
  padding: 8px 16px;
  margin-right: 10px;

  background: linear-gradient(89.62deg, #0500fa 7.09%, #e01e5a 92.23%);
  border: none;
  border-radius: 8px;

  cursor: pointer;

  color: #ffffff;
  transition: box-shadow 500ms cubic-bezier(0.075, 0.82, 0.165, 1);

  @media screen and (min-width: 768px) {
    margin-right: 15px;
  }

  @media screen and (min-width: 1200px) {
    margin-right: 20px;
    padding: 12px 20px 12px 20px;
  }

  &:hover,
  &:focus {
    box-shadow: 0px 0px 20px 5px rgba(5, 0, 250, 0.5),
      0px 0px 20px 5px rgba(224, 30, 90, 0.5);
  }
`;

export const AuthRegister = styled.button`
  padding: 8px 16px;
  background: linear-gradient(89.62deg, #0500fa 7.09%, #e01e5a 92.23%);
  border: none;
  border-radius: 8px;

  cursor: pointer;

  color: #ffffff;
  transition: box-shadow 500ms cubic-bezier(0.075, 0.82, 0.165, 1);

  @media screen and (min-width: 768px) {
    margin-right: 15px;
  }

  @media screen and (min-width: 1200px) {
    margin-right: 20px;
    padding: 12px 20px 12px 20px;
  }

  &:hover,
  &:focus {
    box-shadow: 0px 0px 20px 5px rgba(5, 0, 250, 0.5),
      0px 0px 20px 5px rgba(224, 30, 90, 0.5);
  }
`;

export const StyledWrapp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UsersName = styled.p`
  color: #ffffff;

  margin-right: 10px;

  @media screen and (min-width: 768px) {
    width: 110px;

    font-size: 1.2rem;

    margin-right: 20px;

    text-align: right;
  }
  @media screen and (min-width: 1200px) {
    width: 100%;
    font-size: 1.2rem;

    margin-right: 10px;

    text-align: right;
  }
`;

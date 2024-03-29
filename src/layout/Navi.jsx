import React, { useState } from "react";
import CardSamuray from "./CardSamuray";
import { Container, Menu } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";






export default function Navi() {
  const {cartItems} = useSelector(state=>state.cart)
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  //useHistory arık router-domda kullanılmadığı için navigate kullanılmaktadır..
const navigate = useNavigate();

function handleSignOut(params){
  setIsAuthenticated(false)
 navigate("/")

}

function handleSignIn(params){
  setIsAuthenticated(true)

}

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home"></Menu.Item>
          <Menu.Item name="messages" />
          <Menu.Menu position="right">
            {cartItems.length>0&&<CardSamuray/>}
            {isAuthenticated?<SignedIn signOut={handleSignOut} />:<SignedOut signIn={handleSignIn}/>}
           
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}

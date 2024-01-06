import React from "react";
import { Dropdown, Menu, Image } from "semantic-ui-react";

export default function SignedIn({ signOut }) {
  return (
    <div>
      <Menu.Item>
        <Image avatar spaced="right" src="https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png" />
        <Dropdown pointing="top left" text="Yunus Emre">
          <Dropdown.Menu>
            <Dropdown.Item text="Information" icon="info" />
            <Dropdown.Item onClick={signOut} text="Sign-out" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}

import React from "react";
import { UserConsumer } from "../../UserContext";

class TempComponent extends React.Component {
  render() {
    return (
      <div>
       
        Inside tempcomponent
        <UserConsumer>
          {(user) => {
            return <div> Hellow {user.name}</div>;
          }}
        </UserConsumer>
      </div>
    );
  }
}

export default TempComponent;

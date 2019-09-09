// import Trans from "./trans";
// import Login from "./Login";
// import Ne from "./Ne";
// import Choose from "./Choose";
// import Apply from "./apply/Apply";
import React, { Component } from "react";
import WrappedNormalLoginForm from "./login/Login";
import Apply from "./apply/Apply";
class App extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>
        <WrappedNormalLoginForm></WrappedNormalLoginForm>
        {/* <Apply></Apply> */}
      </div>
    );
  }
}
export default App;

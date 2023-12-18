import { Route, Routes } from "react-router-dom";
import {PageNotFound} from "../pageNotFound";
import { Login,Signup } from "../auths";

function Auth() {
  return (
    <div>
      <Routes> 
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default Auth;

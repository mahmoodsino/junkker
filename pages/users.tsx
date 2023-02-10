import React from "react";
import { UserMainSection } from "../components";
import withAuth from "../helper/with-auth";

const users = () => {
  return (
    <div>
      <UserMainSection />
    </div>
  );
};

export default withAuth(users);

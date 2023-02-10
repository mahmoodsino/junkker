import React from "react";
import { PersonalInfoMainSection } from "../../components";
import withAuth from "../../helper/with-auth";

const personalinfo = () => {
  return (
    <div>
      <PersonalInfoMainSection />
    </div>
  );
};

export default withAuth(personalinfo);

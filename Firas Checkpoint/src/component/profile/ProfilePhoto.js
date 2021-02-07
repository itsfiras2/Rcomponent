import { getDefaultNormalizer } from "@testing-library/react";
import React from "react";
import prof from "./image/prof.jpg";

const ProfilePhoto = () => {
  return (
    <>
      <img src={prof} alt="MyPhoto" />
    </>
  );
};
export default ProfilePhoto;

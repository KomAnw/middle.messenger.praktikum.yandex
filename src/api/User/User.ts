import Fetch from "src/modules/Fetch/Fetch";
import { FetchOptions, METHODS } from "src/modules/Fetch/types";
import { ChangePasswordFormData } from "src/pages/ChangePassword/types";
import { ChangeProfileFormData } from "src/pages/Profile/types";
import addInstancePath from "src/utils/generateUrl";
import { USER } from "../constants";
import { ContentTypes } from "../types";
import { UserOperations } from "./types";

const { POST, PUT, GET } = METHODS;
const { applicationJSON } = ContentTypes;
const generateUrl = addInstancePath(USER);

const basePutOptions: FetchOptions = {
  methodType: PUT,
  headers: {
    "content-type": applicationJSON,
  },
};

export const changeUserProfile = async (data: ChangeProfileFormData) => {
  const url = generateUrl(UserOperations.profile);
  const options = {
    ...basePutOptions,
    data: JSON.stringify(data),
  };
  const response = await Fetch(url, options);
  return response;
};

export const changePassword = async (data: ChangePasswordFormData) => {
  const url = generateUrl(UserOperations.password);
  const options = {
    ...basePutOptions,
    data: JSON.stringify(data),
  };
  const response = await Fetch(url, options);
  return response;
};

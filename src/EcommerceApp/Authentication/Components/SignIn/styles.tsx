import styled from "@emotion/styled";
import tw from "tailwind.macro";

const ParentContainer = styled.div`
  ${tw`flex justify-center items-center `};
  min-height: 100vh;
  border: 2px solid green;
  background-color: #f5fffa;
`;

const SignInContainer = styled.div`
  width: 340px;
  height: 340px;
  background-color: #ffffff;
  border: 1px solid white;
  ${tw`flex flex-col p-12 justify-center shadow`};
`;

const TextSignIn = styled.p`
  ${tw`mb-4`}
`;

const UserName = styled.input`
  border: 1px solid grey;
  ${tw`p-3 w-45 mb-4 rounded-md `}
`;
const Password = styled.input`
  border: 1px solid grey;
  ${tw`p-3 w-45 mb-4 rounded-md `}
`;

const TextError = styled.p`
  ${tw`text-red-600 `};
`;
const Submit = styled.button`
  ${tw` text-white pr-20 pl-20 h-36 pb-4 bg-black`};
  border-radius: 4px;
`;

export {
  ParentContainer,
  SignInContainer,
  TextSignIn,
  Submit,
  TextError,
  UserName,
  Password,
};

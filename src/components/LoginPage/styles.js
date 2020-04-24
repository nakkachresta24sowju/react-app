import styled from "@emotion/styled";
import tw from "tailwind.macro";

const LoginContainer = styled.div ` width:400px;
height:800px;
`;

const Submit = styled.button ` 
${tw`mt-8 text-white w-auto h-14 text-2xl`};
background-color: #6666ff;
border-radius: 4px;
padding: 10px;
`;

export { LoginContainer, Submit };

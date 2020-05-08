import React from "react";
import { render } from "@testing-library/react";
import { SignIn } from ".";

describe("SignIn", () => {
  it("should render typed username", () => {
    const username = "test-user";
    const { getByPlaceholderText } = render(<SignIn userName={username} />);
    const usernameField = getByPlaceholderText("Username");
    expect(usernameField.value).toBe(username);
  });

  it("should render typed password", () => {
    const password = "test-password";
    const { getByPlaceholderText } = render(<SignIn password={password} />);
    const passwordField = getByPlaceholderText("password");
    expect(passwordField.value).toBe(password);
  });

  it("should render given error message", () => {
    const { getByText } = render(<SignIn errorMessage="Invalid username" />);
    getByText(/invalid username/i);
  });
});

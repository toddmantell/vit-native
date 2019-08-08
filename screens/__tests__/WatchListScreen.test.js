import React from "react";
import { render } from "@testing-library/react-native";
import WatchListScreen from "../WatchListScreen";
import { exportAllDeclaration } from "@babel/types";

describe("WatchList", () => {
  it("should contain a Card", () => {
    const { getByTestId } = render(<WatchListScreen />);

    const card = getByTestId("watch-list-card");

    expect(card).toBeTruthy();
  });
});

import React from "react";
import { withKnobs, object } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";

import EmptyStates from "../components/EmptyStates";
import { StorybookThemeProvider } from "../lib/withTheme";
import { states } from "../components/EmptyStates/EmptyStates";

export default {
  title: "Components/Empty States/Error",
  component: EmptyStates,
  decorators: [withKnobs, withA11y],
};

const emptyStatesKnobGroupID = "EmptyStates";
const config = { option: states.error };
const config2 = { option: states.error2 };

export const Actions = () => {
  return (
    <StorybookThemeProvider>
      <EmptyStates
        {...object("Configuration", config, emptyStatesKnobGroupID)}
      />
    </StorybookThemeProvider>
  );
};

export const TextOnly = () => {
  return (
    <StorybookThemeProvider>
      <EmptyStates
        {...object("Configuration", config2, emptyStatesKnobGroupID)}
      />
    </StorybookThemeProvider>
  );
};
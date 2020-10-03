import {Meta, Story} from "@storybook/react/types-6-0";
import React from "react";
import {Wrapper} from "./Wrapper";
import {Autocomplete, AutocompleteProps} from "../components/shared/Autocomplete";

export default {
  title: 'Autocomplete',
  component: Autocomplete,
  argTypes: {}
} as Meta;

const Template: Story<AutocompleteProps> = (args) => <Wrapper><Autocomplete {...args} /></Wrapper>;

export const Default = Template.bind({})

Default.args = {
 suggestions: [
   {label: "Astra", value: "astra"},
   {label: "Nue", value: "nue"},
   {label: "Aurora", value: "aurora"}
 ]
}
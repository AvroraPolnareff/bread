import {Meta} from "@storybook/react/types-6-0";
import {TagsInput, TagsInputProps} from "../components/TagsInput";
import {Story} from "@storybook/react/dist/client/preview/types-6-0";

import {Wrapper} from "./Wrapper";
import React from "react";
import {weapons} from "../weapon";
import {Group, Option} from "../components/DropdownList";


export default {
  title: 'TagsInput',
  component: TagsInput,
} as Meta;

const Template: Story<TagsInputProps> = args => <Wrapper><TagsInput {...args}/></Wrapper>

export const Default = Template.bind({})

const weaponsDropdown = [
  {type: 'group', name: "primary", items: weapons.filter(weapon => weapon.group === 'primary').map(weapon => ({value: weapon.url_name, label: weapon.item_name} as Option)) } as Group,
  {type: 'group', name: "secondary", items: weapons.filter(weapon => weapon.group === 'secondary').map(weapon => ({value: weapon.url_name, label: weapon.item_name} as Option))} as Group,
  {type: 'group', name: "melee", items: weapons.filter(weapon => weapon.group === 'melee').map(weapon => ({value: weapon.url_name, label: weapon.item_name} as Option))} as Group,
  {type: 'group', name: "kitgun", items: weapons.filter(weapon => weapon.group === 'kitgun').map(weapon => ({value: weapon.url_name, label: weapon.item_name} as Option))} as Group,
  {type: 'group', name: "archgun", items: weapons.filter(weapon => weapon.group === 'archgun').map(weapon => ({value: weapon.url_name, label: weapon.item_name} as Option))} as Group,
  {type: 'group', name: "zaw", items: weapons.filter(weapon => weapon.group === 'zaw').map(weapon => ({value: weapon.url_name, label: weapon.item_name} as Option))} as Group,
  {type: 'group', name: "sentinel", items: weapons.filter(weapon => weapon.group === 'sentinel').map(weapon => ({value: weapon.url_name, label: weapon.item_name} as Option))} as Group
]

Default.args = {
  options: weaponsDropdown,
  placeholder: "Any"
}
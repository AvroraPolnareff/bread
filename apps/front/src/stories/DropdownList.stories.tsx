import {Meta, Story} from "@storybook/react/types-6-0";
import {DropdownList, DropdownListProps, Group, Option} from "../components/shared/DropdownList";
import React from "react";
import {weapons} from "../weapon";


export default {
  title: 'DropdownList',
  component: DropdownList,
  argTypes: {onSelect: {action: 'clicked'}}
} as Meta;

const Template: Story<DropdownListProps> = (args) => <DropdownList {...args} />;

const weaponsDropdown = [
  {value: 'any', label: 'Any'},
  {type: 'group', name: "primary", items: weapons.filter(weapon => weapon.group === 'primary').map(weapon => ({value: weapon.url_name, label: weapon.item_name} as Option)) } as Group,
  {type: 'group', name: "secondary", items: weapons.filter(weapon => weapon.group === 'secondary').map(weapon => ({value: weapon.url_name, label: weapon.item_name} as Option))} as Group,
  {type: 'group', name: "melee", items: weapons.filter(weapon => weapon.group === 'melee').map(weapon => ({value: weapon.url_name, label: weapon.item_name} as Option))} as Group,
  {type: 'group', name: "kitgun", items: weapons.filter(weapon => weapon.group === 'kitgun').map(weapon => ({value: weapon.url_name, label: weapon.item_name} as Option))} as Group,
  {type: 'group', name: "archgun", items: weapons.filter(weapon => weapon.group === 'archgun').map(weapon => ({value: weapon.url_name, label: weapon.item_name} as Option))} as Group,
  {type: 'group', name: "zaw", items: weapons.filter(weapon => weapon.group === 'zaw').map(weapon => ({value: weapon.url_name, label: weapon.item_name} as Option))} as Group,
  {type: 'group', name: "sentinel", items: weapons.filter(weapon => weapon.group === 'sentinel').map(weapon => ({value: weapon.url_name, label: weapon.item_name} as Option))} as Group
]

export const Default = Template.bind({});
Default.args = {
  searchString: "ol",
  options: weaponsDropdown
};
export interface SidebarItem {
  value: string;
  label: string;
}

export interface SidebarItemGroup {
  group: string;
  items: {
    value: string;
    label: string;
  }[];
}

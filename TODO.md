y# TODO: Implement Nested Menus in Sidebar

- [x] Update `sidebar.component.ts` to support nested menu structure:
  - Add `children` property to menu items for submenus.
  - Add `isExpanded` flag for toggle functionality.
  - Add `toggleMenu` method to handle expanding/collapsing.
  - Update menuList with example nested items.

- [x] Modify `sidebar.component.html` to render nested menus:
  - Add expand/collapse icons (e.g., chevron).
  - Use *ngIf to show/hide submenus based on isExpanded.
  - Render submenus as nested ul/li.
  - Ensure proper indentation and styling.

- [x] Add CSS styles for submenu, toggle icons, and expanded state.

- [x] Test the sidebar functionality:
  - Verify expand/collapse works.
  - Check routing for nested items if applicable.
  - Adjust CSS if needed for better appearance.

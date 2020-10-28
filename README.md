*Task description:*
Build a small client-side-only Pros & Cons list app with react

*Technical Requirements:*
- The layout should be similar to the given preview
- The stylings (like fonts / colors / sizes) do not have to fit exactly to the preview
- The layout needs to be based completely on CSS3 Flexboxes
- The only supported browser needs to be the newest chrome version
- You have to use React
- You are free to use any boilerplate code
- You are free to use any additional UI-Libraries and NPM packages
- You need to use at least one task-runner or bundler like Grunt / Gulp / Webpack

*Functional requirements:*
- The Data doesn't have to be stored permanently. It is enough if the data is stored in the react app state.
- Every list entry only needs to contain an index counter and a simple single-line input field
- At the end of each list there is always one empty input field as the last entry. So As soon as someone writes something into the last input field, there is automatically pushed another empty input field to the list.
- When an input field, which is not the last one, is being emptied during the editing, the entry gets removed
- When a list exceeds the size of the container due to too many entries, the list should become scrollable

- [ ] Why would you use class component over function components (removing hooks from the question)?

  Class components, originally, offered more built in functionality than functional components. Until the release of functional component "hooks", you would have to utilize class components to handle any state data in your app or to make request to outside API's.

- [ ] Name three lifecycle methods and their purposes.

  1. componentDidMount() - happens at the beginning or "mounting" phase of the lifecycle where the component initially mounts. This method defines any initial data you want access to

  2. setState() - happens during the updating phase and is used to change the component's state data

  3. componentWillUnmount() - happens at the end of the lifecycle during the un-mounting phase. This method is commonly used to clean up any data leaks and side effects remaining at the end of the lifecycle

- [ ] What is the purpose of a custom hook?

  Custom hooks are hooks you build yoursef, as opposed to the built in hooks React provides. You can program these custom hooks to apply any non-visual behavior and any stateful logic within your components. Custom hooks also make reusing the same hooks effortless.

- [ ] Why is it important to test our apps?

  Testing apps is important for mulitiple reasons. First, it allows the programmer to have confidence in their code as the results of the program will have been proven consistent with what was expected. Second, in a production environment, testing helps to control costs and keeping the programming on schedule, by not having to constantly go back over code and spend time searching for bugs. Lastly, testing code ensures that the end user's exprience will be consistent with how the devs intended by being able to test edge cases, or rare occurances that may introduce bugs in the code.

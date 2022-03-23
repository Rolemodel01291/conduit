it("render correctly text component", () => {
  const TextInputComponent = renderer.create(<TextInput />).toJSON();
  expect(TextInputComponent).toMatchSnapshot();
});

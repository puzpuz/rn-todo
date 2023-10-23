import renderer from "react-test-renderer";
import TodoScreen from "../TodoScreen";
it("renders correctly", () => {
  const tree = renderer.create(<TodoScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

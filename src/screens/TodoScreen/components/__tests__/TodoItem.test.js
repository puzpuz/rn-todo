import renderer from "react-test-renderer";
import TodoItem from "../TodoItem";
it("renders correctly", () => {
  const tree = renderer.create(<TodoItem />).toJSON();
  expect(tree).toMatchSnapshot();
});

import renderer from "react-test-renderer";
import AddButton from "../AddButton";
it("renders correctly", () => {
  const tree = renderer.create(<AddButton />).toJSON();
  expect(tree).toMatchSnapshot();
});

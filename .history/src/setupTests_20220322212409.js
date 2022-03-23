import Enzyme, { shallow, render } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import elementDatasetPolyfill from "element-dataset";

Enzyme.configure({ adapter: new Adapter() });

global.shallow = shallow;
global.render = render;

elementDatasetPolyfill();

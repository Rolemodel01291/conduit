import Enzyme, { shallow, render } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

global.shallow = shallow;
global.render = render;

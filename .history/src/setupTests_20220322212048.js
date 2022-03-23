import Enzyme, { shallow, render } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import elementDatasetPolyfill from "element-dataset";

Enzyme.configure({ adapter: new Adapter() });

global.shallow = shallow;
global.render = render;

elementDatasetPolyfill();

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};

global.sessionStorage = jest.genMockFunction();
global.sessionStorage.setItem = jest.genMockFunction();
global.sessionStorage.getItem = jest.genMockFunction();
global.sessionStorage.removeItem = jest.genMockFunction();

global.localStorage = localStorageMock;

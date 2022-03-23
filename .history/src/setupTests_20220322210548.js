import Enzyme, { shallow, render } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
import elementDatasetPolyfill from "element-dataset";
// React 16 Enzyme adapter
// Enzyme.configure({ adapter: new Adapter() });
// Make Enzyme functions available in all test files without importing
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

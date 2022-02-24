import { Provider } from "react-redux";

const Notes = (props) => {
  return (
    <Provider store={store}>
      <Form />
      <Notes />
    </Provider>
  );
};

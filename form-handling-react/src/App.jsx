import RegistrationForm from "./components/RegistrationForm";
import formikForm from "./components/formikForm";

function App() {
  return (
    <div className="p-6 space-y-8">
      <RegistrationForm />
      <formikForm />
    </div>
  );
}

export default App;

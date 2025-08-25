import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";  // ✅ matches file name

function App() {
  return (
    <div className="p-6 space-y-8">
      <RegistrationForm />
      <FormikForm />
    </div>
  );
}

export default App;

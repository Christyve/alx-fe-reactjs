import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormikForm() {
  const initialValues = { username: "", email: "", password: "" };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      alert("User registered with Formik: " + JSON.stringify(data));
      resetForm();
    } catch (err) {
      console.error("Registration failed", err);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="p-4 max-w-md mx-auto space-y-4 border rounded">
        <h2 className="text-xl font-bold">Formik Registration Form</h2>

        <div>
          <label className="block">Username:</label>
          <Field name="username" type="text" className="border p-2 w-full" />
          <ErrorMessage name="username" component="p" className="text-red-500 text-sm" />
        </div>

        <div>
          <label className="block">Email:</label>
          <Field name="email" type="email" className="border p-2 w-full" />
          <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
        </div>

        <div>
          <label className="block">Password:</label>
          <Field name="password" type="password" className="border p-2 w-full" />
          <ErrorMessage name="password" component="p" className="text-red-500 text-sm" />
        </div>

        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          Register
        </button>
      </Form>
    </Formik>
  );
}

import axios from 'axios';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import toast from 'react-hot-toast';
import * as Yup from 'yup';

export default function LoginPage() {
  const handleSubmit = (values) => {
    // Send Data To Backend
    let domain = 'http://82.112.241.233:2500';
    let endPoint = '/api/auth/local';
    let url = domain + endPoint;
    let data = {
      identifier: values.email,
      password: values.password,
    };

    axios
      .post(url, data)
      .then((res) => {
        let user = res.data.user;
        toast.success('Login success ! Welcome ' + user.username);
        if (values.remeberIndex) {
          localStorage.setItem('token', res.data.jwt);
        } else {
          sessionStorage.setItem('token', res.data.jwt);
        }
      })
      .catch((err) => {
        toast.error('Wrong Username or password');
      });
  };

  const formValidation = Yup.object({
    email: Yup.string().required().email(),
    password: Yup.string().required(),
    //   .min(4)
    //   .max(10)
    //   .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'Password must contain at least 4 characters, including uppercase, lowercase, number, and special character'),
  });

  return (
    <div className="bg-white w-full h-[100vh] flex items-center justify-center">
      <Formik validationSchema={formValidation} onSubmit={handleSubmit} initialValues={{ email: '', password: '', remeberIndex: true }}>
        <Form className="w-[400px] bg-white flex flex-col gap-3 p-4 rounded shadow border ">
          <h1>Welcome Back</h1>
          <Field name="email" className="input bg-white w-full" placeholder="Enter you email here" type="email" />
          <ErrorMessage name="email" component={'div'} className="text-red-500" />
          <Field name="password" className="input bg-white w-full" placeholder="Enter you password here" type="text" />
          <ErrorMessage name="password" component={'div'} className="text-red-500" />
          <label>
            <Field type="checkbox" name="remeberIndex" />
            Remeber Me
          </label>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
}

// POST /api/auth/local

// {
//   "identifier": "user@email.com",   // email or username
//   "password": "yourPassword"
// }

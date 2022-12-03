import "bootstrap/dist/css/bootstrap.min.css";
import { object, string } from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const registrationSchema = object({
  firstName: string().required("First name is required"),
  lastName: string().required("Last name is required"),
  email: string().email("Invalid email format").required("Email is required"),
});

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registrationSchema),
  });

  return (
    <div className='d-flex justify-content-center p-5'>
      <form
        className='row w-25 gy-2'
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <div className='col-6'>
          <label className='form-label'>First name*</label>
          <input
            type='text'
            className='form-control'
            {...register("firstName")}
          />
          {errors.firstName ? (
            <p className='text-danger'>{errors.firstName.message}</p>
          ) : null}
        </div>
        <div className='col-6'>
          <label className='form-label'>Last name*</label>
          <input
            type='text'
            className='form-control'
            {...register("lastName")}
          />
          {errors.lastName ? (
            <p className='text-danger'>{errors.lastName.message}</p>
          ) : null}
        </div>
        <div className='col-12'>
          <label className='form-label'>Email*</label>
          <input type='text' className='form-control' {...register("email")} />
          {errors.email ? (
            <p className='text-danger'>{errors.email.message}</p>
          ) : null}
        </div>
        <div className='col-12'>
          <label className='form-label'>Address</label>
          <input type='text' className='form-control' />
        </div>
        <div className='col-12'>
          <button className='btn btn-primary' type='submit'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;

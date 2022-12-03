import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className='d-flex justify-content-center p-5'>
      <form className='row w-25 gy-2'>
        <div className='col-6'>
          <label className='form-label'>First name*</label>
          <input type='text' className='form-control' />
          <p className="text-danger">Error message here</p>
        </div>
        <div className='col-6'>
          <label className='form-label'>Last name*</label>
          <input type='text' className='form-control' />
          <p className="text-danger">Error message here</p>
        </div>
        <div className='col-12'>
          <label className='form-label'>Email*</label>
          <input type='text' className='form-control' />
          <p className="text-danger">Error message here</p>
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

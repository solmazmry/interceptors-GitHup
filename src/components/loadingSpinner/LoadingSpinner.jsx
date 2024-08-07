import { Spinner } from "reactstrap"


const LoadingSpinner = ({loading}) => {


  return (
    <div id="loading" style={{
        display:loading? 'block':'none',
        textAlign:"center",
        position:"fixed",
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)'
    }}>
      <Spinner color="primary" style={{
        width:'5rem',
        height:'5rem'
      }}/>
      <p style={{
        marginTop:'20px',
        fontSize:'1.5rem',
      }}>Yuklenir...</p>
    </div>
  )
}

export default LoadingSpinner

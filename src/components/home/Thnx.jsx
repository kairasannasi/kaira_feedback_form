import React from 'react'
import {  Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
const Thnx = () => {
    // const [loading,setLoading] = useState(false);

    // useEffect(() => {
    //     setLoading(true)
    //     setTimeout(() => {
    //         setLoading(false)
    //     },1000)
    // },[])

  return (
    <Container>
      {/* <Navbar /> */}
      <div>
        <p style={{ textAlign: "center", marginTop: "25rem", fontSize:'20px' }}>
          {" "}
          <Link to="/" style={{ textDecoration: "none" }}>
            Thank You For taking the time to provide your valuable Feedback ☺️
          </Link>
        </p>
      </div>
    </Container>
  );
}

export default Thnx
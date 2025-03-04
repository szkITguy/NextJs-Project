import Image from "next/image";
import styles from "./page.module.css";
import Form from "next/form";
import  "bootstrap/dist/css/bootstrap.min.css"
import Head from "next/head";

export default function Home() {
  return (

    <><Head>

    </Head>

    


    <div class="container" class="d-flex justify-content-center">



      <div  className={styles.form}>

      <h1>Techland</h1>
      <br/><br/>

      

      <Form class="row d-flex justify-content-center">

        <div class="form-group">
        <label htmlFor="exampleInputEmail1">Email</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email"/>
        <br/>
        </div>

        <br/>
        <div class="form-group">
          <label for="exampleInputPassword1" class="">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter your password" />
          </div>
    

        <div class="form-check mt-2">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1 float-start">Remember me</label>
          <h6 class="float-end vlink link-primary">Forgot Password?</h6>
          <br/>

          <a href= "/main">
            <h3 type="submit" class="btn btn-primary btn-lg btn-block mt-3 w-100">Sign In</h3>
          </a>

          <h6 class="float-start">Not registered yet? </h6>
          <h6 class="vlink link-primary float-start">&nbsp; Create account</h6>


        
          
        </div>

        
    </Form>



      </div>
      



    </div>

    
    
    
    </>

  );
}

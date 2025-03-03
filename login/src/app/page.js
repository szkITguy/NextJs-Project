import Image from "next/image";
import styles from "./page.module.css";
import Form from "next/form";

export default function Home() {
  return (


    <center>
    <div className={styles.form}>
      

<Form>
      <h1>Login Form</h1>
      <br/><br/>
      <table cellSpacing={20}>
        <tbody>
        <tr>
            <td><h3>Name: </h3></td>
            <td><input type="text" name="name" id="name"/></td>
        </tr>

        <tr>
            <td><h3>Password: </h3></td>
            <td><input type="password" name="pass" id="pass"/></td>
        </tr>
        
      
        </tbody>
      </table>
      

      <a href= "/main">
      <h3 className={styles.btn}>Submit</h3>
      </a>
      
        
    </Form>

    </div>
    </center>
    
  

  );
}

import Form from "next/form";
import Script from "next/script";
import Head from "next/head";
import styles from './styles.css'



export default function Main() { 
  return (

    <><head>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
              crossOrigin="anonymous" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" />
          
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
          

      </head>
      <script
              id="bootstrap-cdn"
              src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" />

    
            
              <div className="container-fluid">
                    <div className="row flex-nowrap">
                        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 color ">
                            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                                <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                                  <span className="fs-5 d-none d-sm-inline">Menu</span>
                                </a>
                                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link align-middle px-0">
                                        <span className="ms-1 d-none d-sm-inline text-white"><i class="bi bi-house p-1"></i>Home</span>
                                        </a>
                                    </li>
                                    <li>
                                     <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                          <span className="ms-1 d-none d-sm-inline text-white"><i class="bi bi-app-indicator p-1"></i>Dashboard<i class="bi bi-arrow-down p-1"></i></span> 
                                     </a>

                                        <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                                            <li className="w-100">
                                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline text-white bg-primary p-2">Item</span> 1 </a>
                                            </li>
                                            <li>
                                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline text-white bg-primary p-2">Item</span> 2 </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#" className="nav-link px-0 align-middle">
                                            <span className="ms-1 d-none d-sm-inline text-white"><i class="bi bi-cart p-1"></i>Orders</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                                            <span className="ms-1 d-none d-sm-inline text-white"><i class="bi bi-truck p-1"></i>Shipping<i class="bi bi-arrow-down p-1"></i></span>
                                        </a>
                                        <ul className="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                                            <li className="w-100">
                                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline text-white bg-primary p-2">Item</span> 1</a>
                                            </li>
                                            <li>
                                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline text-white bg-primary p-2">Item</span> 2</a>
                                            </li>
                                        </ul>
                                    </li>
                    <li>
                        <a href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                            <span className="ms-1 d-none d-sm-inline text-white"><i class="bi bi-box p-1"></i>Products<i class="bi bi-arrow-down p-1"></i></span> 
                        </a>
                            <ul className="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                            <li className="w-100">
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline text-white bg-primary p-2">Product</span> 1</a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline text-white bg-primary p-2">Product</span> 2</a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline text-white bg-primary p-2">Product</span> 3</a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline text-white bg-primary p-2">Product</span> 4</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" className="nav-link px-0 align-middle">
                            <span className="ms-1 d-none d-sm-inline text-white"><i class="bi bi-person-check-fill p-1"></i>Customers</span> 
                        </a>
                    </li>
                </ul>
                <hr/>
        
            </div>
        </div>

        <div className="col py-3">
            
        <h3>Product Summary </h3><br/>
        
        <table className="table">
            
            <thead>
                <tr>
                    <th scope="col"><input type="checkbox"/></th>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Country</th>
                    <th scope="col">E-Mail</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row"><input type="checkbox"/></th>
                    <td>1</td>
                    <td>Ahmed</td>
                    <td>India</td>
                    <td>A@gmail.com</td>
                </tr>
                <tr>
                    <th scope="row"><input type="checkbox"/></th>
                    <td>2</td>
                    <td>Jack</td>
                    <td>Canada</td>
                    <td>J@gmail.com</td>
                </tr>
                <tr>
                    <th scope="row"><input type="checkbox"/></th>
                    <td>3</td>
                    <td>Michael</td>
                    <td>U.S.A</td>
                    <td>M@gmsil.com</td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
</div>


    </>
    
  

  );
}

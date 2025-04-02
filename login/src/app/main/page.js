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

    
            <div className="container-fluid bg-secondary">

                <div className="container-fluid bg-white borderstyle">
                    <div className="row flex-nowrap">
                        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 color borderstyleslider">
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
                                    <li className="p-2 collapsestyle">
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
                                    <li className="p-2 collapsestyle">
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
                                    <li className="p-2 collapsestyle">
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

        <label for="columns">Show</label> &nbsp;
                <select id="columns" class="form-select d-inline-block w-auto">
                    <option>All Column</option>
                </select>

                &nbsp;&nbsp;&nbsp;&nbsp;


                <button class="btn btn-primary ">DISPATCH SELECTED</button>
                <br/><br/>
        
        <table className="table">
            
            <thead>
                <tr>
                <th><input type="checkbox"/></th>
                    <th>ID</th>
                    <th>SHIPIFY #</th>
                    <th>DATE</th>
                    <th>STATUS</th>
                    <th>CUSTOMER</th>
                    <th>EMAIL</th>
                    <th>COUNTRY</th>
                    <th>SHIPPING</th>
                    <th>SOURCE</th>
                    <th>ORDER TYPE</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td><input type="checkbox"/></td>
                    <td>1077620</td>
                    <td>17713</td>
                    <td>22 Jan 2020</td>
                    <td>Pending</td>
                    <td>Ahmed</td>
                    <td>ahmed.123@mail.com</td>
                    <td>Australia</td>
                    <td>Australian Post Api</td>
                    <td>ShopifyAU</td>
                    <td>Customer</td>
                </tr>
                <tr>
                <td><input type="checkbox"/></td>
                    <td>1077622</td>
                    <td>17713</td>
                    <td>22 Jan 2020</td>
                    <td>Pending</td>
                    <td>Ahmed</td>
                    <td>ahmed.123@mail.com</td>
                    <td>Australia</td>
                    <td>Australian Post Api</td>
                    <td>ShopifyAU</td>
                    <td>Customer</td>
                </tr>
                <tr>
                <td><input type="checkbox"/></td>
                    <td>1077633</td>
                    <td>17714</td>
                    <td>26 Jan 2020</td>
                    <td>Pending</td>
                    <td>Ahmed</td>
                    <td>ahmed.123@mail.com</td>
                    <td>Australia</td>
                    <td>Australian Post Api</td>
                    <td>ShopifyAU</td>
                    <td>Customer</td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
                </div>

            </div>
              


    </>
    
  

  );
}

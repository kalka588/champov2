
import React from "react"
import { useState } from 'react';

import "./css/index.css"


import logo from "./assets/company-logo.jpg";
import tbarr from "./assets/triple-barr.png";
import scan from "./assets/Scan.png";
import Xmark from "./assets/icon-X.png";
import plusmark from "./assets/icon-add.png";
import pointmark from "./assets/icon-point.png";
import folder from"./assets/folder.png";


const App = () => {
	return (
    
    <body>
			<Nav/>
      <main>
			<Scan/>
			<Send/>
      </main>
      
      <Popup/>
      </body>
	)
}





const Nav = (props) => {
	return ( 
		
    <header class="whole-menu">
    
       
            
      <div class="navbar">
        <div> <img src={tbarr} alt="cannot display"/></div>
        <div> <img class="logo" src={logo} alt="cannot display"/></div>
      </div>
      
      
      
      <nav class="menu">
          <a>One</a>
          <a>Two</a>
      </nav>

    </header>
		)
		} 





const Scan = (props) => {


      
      return ( 
        
        <div class="scan-part"> 
        <div class="scanner" onClick={()=> takePhoto()} >

        <div> <img class="scan" src={scan} alt="cannot display"/></div>
        
        </div>
      
        
    </div>
        )
      }
        
    

const Send = (props) => {
  const [picture, setPicture] = useState(null);

  const onChangePicture = e => {
    setPicture(URL.createObjectURL(e.target.files[0]) );
    document.querySelector(".preview").style.opacity = 1
  
  }
    
			return ( 
	      <div class="list-part"> 
            <div>
              <div>
                <h1>
                    List de scan
                </h1>

                <div class="list">
                    <ul class="list_scan">
                      <li class="preview">
                        <div >
                          <div> <img class="point-icon"  src={pointmark} alt="cannot display"/> </div>
                          <div> page1_my_doc.png</div> 
                        </div>
                        <div></div>
                        <div>
                          <div value>14:16</div>
                          <div>
                          <img class="logo" src={Xmark} alt="cannot display" onClick={()=>document.querySelector(".preview").style.opacity = 0}/>
                          </div>
                        </div>
                      
                      </li>
                        <img class="preview_img  "src={picture}/>
                      
                    </ul>
                  
                      <div class="image-upload">
                          
                      <input id="file-input" type="file" onChange={onChangePicture}/>
                      <label for="file-input">
                          <img class="add_icon" src={plusmark} alt="cannot display"/> Ajouter un document  
                       
                       

                          </label>





                    </div>
                </div>

              </div>
              
            </div>
           
           

            <Send_button/>
        </div>

        
    
				)
				
      }


        
const Send_button=(props)=> {

  
 
  
  
  return(<input class="send_button" type="button" value="Aperçu de l'email" onClick={(e)=> { document.querySelector(".popup").style.display = "flex"}}/> )
          }



        

const Popup = (props) => {

  
	return ( 
    <div class="popup">
      <div class="popup-inside">
        
        <img src={Xmark} alt="cannot display" onClick={(e)=> { document.querySelector(".popup").style.display = "none" }}/>
        <div>
         <div class="email">

          <p>(L’identité du patient)  née le (date de naissance)</p>
          <p>Il s'agit d'un (nature du document)</p>
          <p>Les actes sont les actes sont datés (dates des actes) </p>
          <p>Les médicaments mentionés sont sont (médicaments) </p>
          <p>Les conclusions sont(conclusions)</p>
          <p>Contactez l'auteur du document au (téléphone)</p>


          <input class="send_button" type="button" value="envoyer le message" onClick={(e)=> { document.querySelector(".popup").style.display = "none" }}/>
         </div>
          

          

        </div>
         
      </div>
  </div>

		)
		} 


       


export default App

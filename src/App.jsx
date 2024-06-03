import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>

    <nav>
            <div class="logo">
                <h1>Central Care</h1>
            </div>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="#service">Service's</a></li>
                <li><a href="#doctors">Doctor's</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#appointment">Apointment</a></li>

            </ul>
            <i id="bar" class="fa-solid fa-bars"></i>
        </nav>
        <div class="main">
            <img src="main.png" alt="" />
            <div class="mainText">
                <h1>Care With Best Centrall Care</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate minus eum, porro, quis mollitia, blanditiis minima iusto dolorem eos consequuntur repudiandae nemo.</p>
                <button>Learn More</button>
            </div>
        </div>

        <div id="service">
            <div class="head">
                <h1>Our Services</h1>
                <div class="serviceCard">
                    <div class="card">
                        <img src="chest.webp" alt=""/>
                        <p>Chest and Respiratory</p>
                    </div>
                     
                    <div class="card">
                        <img src="laboratory.webp" alt=""/>
                        <p>Laboratory and Science</p>
                    </div>
                    <div class="card">
                        <img src="physio.webp" alt=""/>
                        <p>Physiotherapy</p>
                    </div>
                    <div class="card">
                        <img src="nutrition.webp" alt=""/>
                        <p>Nutrition Detection</p>
                    </div>
                </div>
            </div>
        </div>
        <div id="doctors">
            <div class="head">
                <h1>Our Doctor's</h1>
            </div>
            
            <div class="doctor">
                <div class="team">
                     
                        <img src="d1.jpg" alt=""/>

                        <img src="d2.jpg" alt=""/>
                        <img src="d3.jpg" alt=""/>
                         
                     
                </div>
                <div class="team">
                     
                        <img src="d4.jpg" alt="" /> 
                        <img src="d5.jpg" alt=""/>
                        <img src="d6.jpg" alt=""/>
                         
                     
                </div>
                <div class="team">
                     
                        <img src="d7.jpg" alt=""/>
                        <img src="d9.jpg" alt=""/>
                        <img src="d2.jpg" alt=""/>
                </div>
                <div class="team">
                     
                    <img src="d4.jpg" alt=""/> 
                    <img src="d5.jpg" alt=""/>
                    <img src="d6.jpg" alt=""/>
                     
                 
            </div>
            </div>
        </div>
        <div id="blog">
            <div class="head">
                <h1>Read Blogs</h1>
            </div>
            <div class="blogs">
                <div class="blogCard">
                    <img src="bl1.jfif" alt=""/>
                    <p>Health Care</p>
                    <a href="https://www.maxhealthcare.in/blogs">Read More</a>
                </div>
                <div class="blogCard">
                    <img src="bl2.jpg" alt=""/>
                    <p>Health Care</p>
                    <a href="https://www.maxhealthcare.in/blogs">Read More</a>
                </div>
                <div class="blogCard">
                    <img src="bl3.webp" alt=""/>
                    <p>Health Care</p>
                    <a href="https://www.maxhealthcare.in/blogs">Read More</a>
                </div>
            </div>
        </div>
        

        <div id="appointment">
            <div class="head">
                <h1>Book An Appointment</h1>
            </div>
            <div class="form">
                <input type="text" placeholder='name' />
                <input type="text" placeholder="Number"/>
                <input type="date" />
                <input type="time"/>
                <button>Make Appointment</button>
            </div>
        </div>
        <div class="footer">
            <div class="text">
                <h2>About</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nisi asperiores repudiandae aspernatur provident similique dolorem dignissimos sit aut animi.</p>

            </div>
            <div class="text">
                <h2>Care</h2>
                <p>Facility</p>
                <p>Reviews</p>
                <p>Support</p>
                <p>Staff</p>

            </div>
            <div class="text">
                <h2>Address</h2>
                <p>JK Hills</p>
                <p>Galaxy</p>
                <p>234-999</p>
                <p>maps</p>

            </div>
            <div class="text">
                <h2>Connect Us</h2>
                <p>YouTube</p>
                <p>LinkedIN</p>
                <p>Facebook</p>
                <p>Instagram</p>

            </div>
        </div>


    </div>
      
      
    </>
  )
}

export default App

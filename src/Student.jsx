/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React,{useState} from 'react';
import { StudentsUrl } from './Config';
import { Link, Outlet } from 'react-router-dom';
import style from './student.module.css';

const Form =() =>{
    const [formData, setFormData]=useState({
        name:'',
        age:'',
        gender:'',
        semester:'',
        teacher:'',
    })


   {/*handle change */} 
        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({
            ...formData,
            [name]: value,
            });
        };

   {/*handle submit */} 
        const handleSubmit = async (e) => {
            e.preventDefault();
            console.log("Form Data", formData);

            try {
            const response = await fetch(`${StudentsUrl}/Students`, {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await response.json();
            console.log("POST request successful", data);
            e.target.reset();

            } catch (error) {
            console.error("Error making POST request:", error);
            }
        };

    return(
    <div>
    {/* Student Sidebar */}
        <div className={style.sidebar}>
            <div className={style.nav}>
                <ul>
                    <li>
                        <h5 style={{ color: 'white', fontSize: '16px', fontWeight: 'bold', marginBottom: '30px' }}>STUDENT DASHBOARD</h5>
                    </li>
                    <li>
                        <Link to="/">
                            <i className="fas fa-gauge" style={{ padding: '5px' }}></i>
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/Dashboard/Student">
                            <i className="fas fa-user-tie" style={{ padding: '5px' }}></i>
                            Student
                        </Link>
                    </li>
                </ul>
            </div>
        </div>

    {/* Student Header */}
        <div className={style.header}>
            <h4 style={{color:'white'}}>STUDENTS FORM</h4>
            <Outlet />
        </div>
        
    {/* Student Form  */}
        <div className={style.Form}>
            <h5 style={{
                textAlign:'center',
                fontSize:'20px',
                fontWeight:'bold',
                paddingBottom:'20px',
                color:'maroon'
            }}>
            Add Student Details
            </h5>
            
            <form onSubmit={handleSubmit}  className={style.form}>
                <div style={{padding:'5px'}}>
                    <label htmlFor='Name' style={{fontWeight:'bold',marginLeft:'30px'}}>Name</label>
                    <input type='text' name='name' id='name' placeholder='Name' value={formData.name}  onChange={handleChange}
                    required/><br />
                </div>

                <div style={{padding:'5px'}}>
                    <label htmlFor='Age' style={{fontWeight:'bold',marginLeft:'30px'}}>Age</label>
                    <input type='number' name='age' id='age' value={formData.age}  onChange={handleChange}
                    required/>
                </div> 
                
                <div style={{padding:'5px'}}>
                    <label style={{fontWeight:'bold',marginLeft:'30px'}}>Gender</label><br />
                    <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={formData.gender === "Male"}
                    onChange={handleChange}
                    
                    />
                    Male
                    </label><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    <label>
                    <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={formData.gender === "Female"}
                    onChange={handleChange}
                    
                    />
                    Female
                    </label><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    <label>
                    <input
                    type="radio"
                    name="gender"
                    value="Other"
                    checked={formData.gender === "Other"}
                    onChange={handleChange}
                    
                    />
                    Other
                    </label>
                </div>

                <div style={{ padding: '5px' }}>
                    <label style={{fontWeight:'bold',marginLeft:'30px'}}>Year of Semester</label><br />
                    <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input
                        type="radio"
                        id="firstYear"
                        name="semester"
                        value="First Year"
                        checked={formData.semester === "First Year"}
                        onChange={handleChange}
                        />
                    First Year
                    </label><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    <label>
                    <input
                        type="radio"
                        id="secondYear"
                        name="semester"
                        value="Second Year"
                        checked={formData.semester === "Second Year"}
                        onChange={handleChange}
                    />
                    Second Year
                    </label><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    <label>
                    <input
                        type="radio"
                        id="thirdYear"
                        name="semester"
                        value="Third Year"
                        checked={formData.semester === "Third Year"}
                        onChange={handleChange}
                        />
                    Third Year
                    </label>
                </div>

                <div style={{padding:'5px'}}>
                    <label htmlFor='teacher' style={{fontWeight:'bold',marginLeft:'30px'}}>Teacher Name</label>
                    <input type="text" name="teacher" id="teacher"   value={formData.teacher}
                    onChange={handleChange}
                    required/>
            </div>
            <div style={{padding:'5px',textAlign:'center'}}>
                <button style={{backgroundColor:'green',padding:'10px'}}>Submit</button>
            </div>
            </form>
        </div>
    </div>
    )
}

export default Form;
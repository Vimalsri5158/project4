/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import style from './dashboard.module.css';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {

        const [users, setUsers] = useState([]);
    
        {/* Dashboard get method */}
        const getData = async () => {
            try {
                const response = await fetch(
                    "https://64d4c71db592423e4694ac60.mockapi.io/Students"
                );
    
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
    
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
    
        useEffect(() => {
            getData();
        }, []);

        {/*Dashboard delete methode*/}
        const handleDelete = async (userId) => {
    
            try {
            const response = await fetch(
                `https://64d4c71db592423e4694ac60.mockapi.io/Students/${userId}`,
                {
                method: "DELETE",
                }
            );

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            setUsers((prevUsers) => 
            prevUsers.filter((user) => user.id !== userId));
            }
            
            catch (error) {
            console.error("Error deleting user:", error);
            }
        };

    return (
        <div>
            {/* Dashboard Sidebar */}
            <div className={style.sidebar}>
                <div className={style.nav}>
                    <ul>
                        <li>
                            <h5 style={{ color: 'white', fontSize: '16px', fontWeight: 'bold', marginBottom: '20px',paddingTop:'-10PX' }}>SCHOOL ADMIN DASHBOARD</h5>
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

            {/* Dashboard Header */}
            <div className={style.header}>
                <h4 style={{color:'white'}}>STUDENTS DETAILS DASHBOARD </h4>
                <Outlet />

            {/* Dashboard Cards Content */}
            <div className={style.main} >
                <div className={style.cards} style={{justifyContent:'space-around'}}>
                    <div className={style.card} style={{ borderLeft: '0.25rem solid green',marginRight:'50px' }}>
                        <div className={style.cardcontent}>
                            <div className={style.title} style={{color:'green'}}>Students</div>
                            <div className={style.number}>50</div>
                            <div className={style.icons}>
                                <i className="fa-solid fa-graduation-cap fa-2x"></i>
                            </div>
                        </div>
                    </div>
        
                    <div className={style.card} style={{ borderLeft: '0.25rem solid red',marginRight:'50px'}}>
                        <div className={style.cardcontent}>
                            <div className={style.title} style={{color:'red'}}>Teachers</div>
                            <div className={style.number}> 20 </div>
                            <div className={style.icons}>
                            <i className="fa-solid fa-person-chalkboard fa-2x"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Dashboard get Student details  */}
            <div className={style.content}>
                <h4>STUDENTS DETAILS</h4>
                <table>
                    <thead >
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Semester</th>
                            <th>Teacher Name</th>
                            <th>Action</th>

                            
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.gender}</td>
                                <td>{user.semester}</td>
                                <td>{user.teacher}</td>
                                <td>
                                <button onClick={() => handleDelete(user.id)} className={style.btn}>Remove</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
        
    );
}

export default Dashboard;
// pages/schools.js
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import styles from '../styles/Schools.module.css'; // Import the CSS module

const SchoolsPage = () => {
    const [schools, setSchools] = useState([]);

    useEffect(() => {
        const fetchSchools = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'schools'));
                const schoolsList = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setSchools(schoolsList);
            } catch (error) {
                console.error('Error fetching schools data:', error);
            }
        };
        fetchSchools();
    }, []);

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.schoolsContainer}>
                <h1>Our Impact on Schools</h1>
                {schools.length > 0 ? (
                    schools.map((school) => (
                        <div key={school.id} className={styles.schoolSection}>
                            <img 
                                src={school.imgUrl} 
                                alt={school['school-name']} 
                                className={styles.schoolImage} 
                            />

                            <div className={styles.schoolInfo}>
                                <h2>{school['school-name']}</h2>
                                <p className={styles.schoolBlurb}>
                                    At {school['school-name']}, we helped {school['num-students']} students improve their understanding of various subjects.
                                </p>
                            </div>

                            {/* Table of Subjects, each subject on a separate row */}
                            <table className={styles.subjectsTable}>
                                <thead>
                                    <tr>
                                        <th>Subject</th>
                                        <th>Number of Students</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {school.subjects.map((subject, index) => (
                                        <tr key={index}>
                                            <td>{subject}</td>
                                            <td>{school['num-students'] / school.subjects.length}</td> {/* Assuming equal distribution */}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ))
                ) : (
                    <p>No data available</p>
                )}
            </div>
        </div>
    );
};

export default SchoolsPage;

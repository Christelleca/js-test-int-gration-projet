import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setGoals } from '../features/goalsSlice';
import axios from 'axios';

const Dashboard = () => {
    const dispatch = useDispatch();
    const goals = useSelector((state) => state.goals.list);

    useEffect(() => {
        const fetchGoals = async () => {
            try {
                const response = await axios.get(
                    'http://localhost:5000/api/goals'
                );
                dispatch(setGoals(response.data));
            } catch (error) {
                console.error(
                    'Erreur lors de la récupération des objectifs :',
                    error
                );
            }
        };

        fetchGoals();
    }, [dispatch]);

    return (
        <div>
            <h1>Mes Objectifs</h1>
            {goals.map((goal, index) => (
                <div key={index}>
                    <h2>{goal.name}</h2>
                    <p>{goal.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Dashboard;

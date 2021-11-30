import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "./spinner";

const Random = ({ path }) => {
    const [activity, setActivity] = useState(null);
    useEffect(() => {
        axios('http://www.boredapi.com/api/activity/' + path)
        .then(result => {
            console.log(result.data);
            setActivity(result.data);
        })
    }, [path]);
    function refresh () {
        setActivity(null)
        window.location.reload()
    }
    return (
        activity ? (
            <div className="activity">
            <h2>{activity?.activity}</h2>
            <p className="type">Type: {activity?.type}</p>
            <p className="participants">Participants: {activity?.participants}</p>
            <p className="price">Price: {activity?.price}$</p>
            <button onClick={refresh}>New Activity</button>
        </div>
        ) : <Spinner/>
    );
}
 
export default Random;
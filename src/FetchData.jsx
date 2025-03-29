import React, { useState, useEffect } from 'react';

const FetchData = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null); // Added error state

    useEffect(() => {
        const fetchPostData = async () => { // Define an async function
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const json = await response.json();
                // Set fetched data
                setData(json);
            } catch (error) {
                console.error("Error fetching data:", error);
                // Save error message to state
                setError(error.message);
            }
        };
        fetchPostData(); // Call the async function
    }, []); // Empty dependency array means this runs once when the component mounts

    console.log(data);

    return (
        <div>
            {error ? (
                <div>Error: {error}</div> // Display error if it exists
            ) : (
                (!data || data.length === 0) ? (
                    <div>Loading...</div> // Show loading message
                ) : (
                    <div>{data[0].body}</div> // Display fetched data
                )
            )}
        </div>
    );
};

export default FetchData;


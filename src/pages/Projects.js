import React from 'react';

import './Home.scss';

export default function Projects() {

    const [ isLoaded, setIsLoaded ] = React.useState(false);
    const [ gitItems, setGitItems ] = React.useState([]);

    React.useEffect(() => {

        // Check if we've fetched data from the GitHub API,
        if(!isLoaded) {
            
            // If we haven't, fetch
            fetch("https://api.github.com/users/doge/repos")
            .then(res => res.json())
            .then(
                (result) => {
                    // Sort the response by the newest date first
                    result.sort(function(a, b) {
                        return new Date(b.pushed_at) - new Date(a.pushed_at)
                    });

                    setIsLoaded(true);
                    setGitItems(result);
                },
                (error) => {
                    setIsLoaded(false);
                    console.log(error);
                }
            )
        }
    });

    return (
        <>
        <div>
            { isLoaded && gitItems.map(item => (
            <div class="git-item" key={item.id}>
                <a href={"https://github.com/" + item.full_name} target="_blank" rel="noreferrer">
                    <h3>{item.name.toLowerCase()}</h3>
                </a>
                <h5>{item.language.toLowerCase()} • {item.stargazers_count}</h5>
                <p>
                    {item.description}
                </p>
            </div>
            ))}

            {!isLoaded && 
            <span>fetching data from github api...</span>
            }
        </div>
        </>
    )
}
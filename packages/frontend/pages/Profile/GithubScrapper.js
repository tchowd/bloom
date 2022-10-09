import React from 'react'
import GithubScraper, { Languages, StargazersCount } from 'react-github-scraper';


function GithubScrapper() {
  return (
    <div>
        <GithubScraper 
            username='axelmy318' 
            repository='react-github-scraper' 
            branch='master'
        >
            <StargazersCount prefix="⭐&nbsp;" label={'Stargazers count'} />
            <Languages label={'Languages'} />
            <Topics label={'Topics'} />
            <Contributors label={'Contributors'} />
            <PushedAt label={'Last push'} />
            <Size label={'Size'} />
        </GithubScraper>
    </div>
  )
}

export default GithubScrapper
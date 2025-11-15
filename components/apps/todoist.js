// Repo refreshed on 2025-11-15
import React from 'react'

export default function Todoist() {
    return (
        <iframe src="https://todoist.com/showProject?id=220474322" frameBorder="0" title="Todoist" className="h-full w-full"></iframe>
        // just to bypass the headers 🙃
    )
}

export const displayTodoist = () => {
    <Todoist> </Todoist>
}

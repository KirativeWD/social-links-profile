import React from "react";

function UserCard({ userData }) {
    return (
        <article>
            <img src={userData.image} alt={userData.alt} />
            <h1>{userData.name}</h1>
            <h2>{userData.location}</h2>
            <p>{userData.bio}</p>
            <ul>
                {userData.socials.map((social, index) => {
                    return (
                        <li key={index}>
                            <a href={social.src} target="_blank">{social.site}</a>
                        </li>
                    )
                })}
            </ul>
        </article>
    )
}

export default UserCard;
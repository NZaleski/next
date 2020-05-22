import React, { useState } from 'react';

const receieve = () => {
    const [name, setName] = useState('')
    const [genre, setGenre] = useState('')
    const [authorId, setAuthorId] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({authorId, genre, name})
    }
    return (
        <div>
            <form id="add-book" onSubmit={handleSubmit}>
            <div className="field">
                <label>Book Name</label>
                <input type="text" value={name} onChange={e=> setName(e.target.value)}/>
            </div>
            <div className="field">
                <label>Genre</label>
                <input type="text" value={genre} onChange={e=> setGenre(e.target.value)}/>
            </div>
            <div className="field">
                <label>Author</label>
                <select value={authorId} onChange={e=> setAuthorId(e.target.value)}>
                    
                </select>
                <button>+</button>
            </div>

        </form>
        </div>
    )
}

export default receieve
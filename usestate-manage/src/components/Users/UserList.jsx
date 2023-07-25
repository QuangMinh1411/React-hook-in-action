import {users} from '../../static.json';
import {Fragment, useState} from "react";

const UserList = () => {
    const [userIndex,setUserIndex] = useState(1)
    const user = users[userIndex];
    return (
        <Fragment>
            <ul className="users items-list-nav">
                {users.map((u, i) => (
                    <li
                        key={u.id}
                        className={i === userIndex ? "selected" : null}
                    >
                        <button
                            className="btn"
                            onClick={() => setUserIndex(i)}
                        >
                            {u.name}
                        </button>
                    </li>
                ))}
            </ul>

            {user && (
                <div className="item user">
                    <div className="item-header">
                        <h2>{user.name}</h2>
                    </div>
                    <div className="user-details">
                        <h3>{user.title}</h3>
                        <p>{user.notes}</p>
                    </div>
                </div>
            )}
        </Fragment>
    );
};

export default UserList;


export function getUsers() {
   return fetch("https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json")
        .then(data => data.json());
}


export function editUser(item){
        return fetch(`"https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json"`,{
            method: 'PUT',
            headers:{ 'Content-Type': 'application/json'},
            body: JSON.stringify(item)
    
        }).then(data => data.json());
}

export function postUser(user){
        return fetch('http://localhost:3001/users',{
            method: 'POST',
            headers:{ 'Content-Type': 'application/json'},
            body: JSON.stringify(user)
    
        }).then(data => data.json());
}


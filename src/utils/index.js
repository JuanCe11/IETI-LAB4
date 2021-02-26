var users = [
    {
        "name": "User0",
        "user": "correo@gmail.com",
        "password": "1234"
    },
    {
        "name": "User1",
        "user": "correo1@gmail.com",
        "password": "1234"
    },
    {
        "name": "User2",
        "user": "correo2@gmail.com",
        "password": "1234"
    }
]

var todos = [
    {
        "description": "TODO1",
        "status": "Completed",
        "dueDate": "1614292238924",
        "responsible": {
            "name": "correo",
            "email": "correo@gmail.com"
        }
    },
    {
        "description": "TODO2",
        "status": "Ready",
        "dueDate": "1614292238924",
        "responsible": {
            "name": "correo1",
            "email": "correo1@gmail.com"
        }
    },
    {
        "description": "TODO2",
        "status": "In Progress",
        "dueDate": "1614292238924",
        "responsible": {
            "name": "correo2",
            "email": "correo2@gmail.com"
        }
    }
]


const TOKEN_KEY = 'user';
export const login = (user, password) => {
    let valid = false;
    let usuario;
    users.map((u) => {
        if (u.user === user && u.password === password) {
            valid = true;
            usuario = u;
        }

        return users;
    })
    if (valid) {
        localStorage.setItem(TOKEN_KEY, usuario.name);
        localStorage.setItem("email", usuario.user);
    }

    else
        alert("Usuario invalido")
}

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
}

export const isLogin = () => {
    if (localStorage.getItem(TOKEN_KEY)) {
        return true;
    }

    return false;
}

export const changeUser = (newUser) => {
    let email = localStorage.getItem("email");
    users.map((u) => {
        if (u.user === email) {
            u.name = newUser.name;
            u.password = newUser.password
        }

        return u;
    })

}

export const getTodos = () => {
    return todos;
}

export const addTodo = (newItem) => {
    todos.push(newItem);
}
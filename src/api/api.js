export const login = async (username, password) => {
    try {
        const response = await fetch('http://localhost:8086/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'ログインに失敗しました。');
        }

        const data = await response.json();
        // data: { token, username }

        // トークンをローカルストレージに保存
        localStorage.setItem('token', data.token);
        localStorage.setItem('username', data.username);

        return data;
    } catch (error) {
        throw new Error(error.message || 'サーバーへの接続中にエラーが発生しました。');
    }
};
export const logout = async () => {

    try {
        const token = sessionStorage.getItem("token")
        const response = await fetch('http://localhost:8086/api/auth/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message);
        }
        sessionStorage.removeItem("token")

        const data = await response.json();

        return data;
    } catch (error) {
        throw new Error(error.message || 'サーバーへの接続中にエラーが発生しました。');
    }
};
export const getProfile = async () => {
    try {
        const token = sessionStorage.getItem("token")
        if (!token) {
            throw new Error('トークンが見つかりません。再度ログインしてください。');
        }
        const response = await fetch('http://localhost:8086/api/profile', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message);
        }

        const data = await response.json();

        return data;
    } catch (error) {
        throw new Error(error.message || 'サーバーへの接続中にエラーが発生しました。');
    }
};
export const UpdateProfile = async (username, nickname) => {
    try {
        const token = sessionStorage.getItem("token")
        if (!token) {
            throw new Error('トークンが見つかりません。再度ログインしてください。');
        }
        const response = await fetch('http://localhost:8086/api/profile', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({ username, nickname })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message);
        }

        const data = await response.json();

        return data;
    } catch (error) {
        throw new Error(error.message || 'サーバーへの接続中にエラーが発生しました。');
    }
};
export const getResults = async () => {
    try {
        const token = sessionStorage.getItem("token")
        if (!token) {
            throw new Error('トークンが見つかりません。再度ログインしてください。');
        }
        const response = await fetch('http://localhost:8086/api/results', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message);
        }

        const data = await response.json();

        return data;
    } catch (error) {
        throw new Error(error.message || 'サーバーへの接続中にエラーが発生しました。');
    }
};
export const postResult = async (block_moves, time) => {
    try {
        const token = sessionStorage.getItem("token")
        if (!token) {
            throw new Error('トークンが見つかりません。再度ログインしてください。');
        }
        const response = await fetch('http://localhost:8086/api/results', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({ block_moves, time })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message);
        }

        const data = await response.json();

        return data;
    } catch (error) {
        throw new Error(error.message || 'サーバーへの接続中にエラーが発生しました。');
    }
};
export const getFieldData = async () => {
    try {
        const token = sessionStorage.getItem("token")
        if (!token) {
            throw new Error('トークンが見つかりません。再度ログインしてください。');
        }
        const response = await fetch('http://localhost:8086/api/fields', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(error.message || 'サーバーへの接続中にエラーが発生しました。');
    }
};

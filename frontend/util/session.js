export const signupUser = user => (
    $.ajax({
        url: `/api/users`,
        method: 'POST',
        data: { user }
    })
);

export const loginUser = user => (
    $.ajax({
        url: `/api/session`,
        method: 'POST',
        data: { user }
    })
);

export const logoutSession = () => (
    $.ajax({
        url: `/api/session`,
        method: 'DELETE'
    })
);
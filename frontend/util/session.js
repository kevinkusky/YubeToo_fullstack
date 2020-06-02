export const postUser = user =>(
    $.ajax({
        url: `/apo/users`,
        method: 'POST',
        data: { user }
    })
);

export const postSession = user =>(
    $.ajax({
        url: `/apo/session`,
        method: 'POST',
        data: { user }
    })
);

export const deleteSession = () =>(
    $.ajax({
        url: `/apo/session`,
        method: 'DELETE'
    })
);
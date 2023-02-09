/// Return the user display name from session
export function UserDisplayName(req){
    if(req.user){
        return req.user.displayName;
    }

    return ''
}


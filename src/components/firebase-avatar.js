import React from 'react'
import { Avatar } from '@mui/material'
import { useAuthState } from '../utils/firebase'
import stringAvatar from '../utils/string-avatar'

export default function FirebaseAvatar({ avatarSize = 32 }) {
    const { user } = useAuthState()

    return (
        <>
            {user.photoURL ?
                <Avatar
                    alt={user.displayName}
                    src={user.photoURL}
                    sx={{ width: avatarSize, height: avatarSize }}
                />
                :
                <Avatar
                    alt={user.displayName}
                    {...stringAvatar(user.displayName, avatarSize)}
                />
            }
        </>
    )
}

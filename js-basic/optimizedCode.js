const getUserTips = (userType, status) => {
    const obj = {
        1: {
            1:'normal user',
            2:'frozen user',
            get [expr]() { return 'unknown user'; }
        },
        2: {
            1:'normal vip user',
            2:'vip user forever',
            get [expr]() { return 'unknown vip user'; }
        },
        get [expr]() { return 'unknown status user'; }
    };
    return obj[userType][status]
    // normal user
    if(userType === 1) {
        if(status === 1) {
            return 'normal user'
        } else if(status === 2) {
            return 'frozen user'
        } else {
            return 'unknown user'
        }
    } else if(userType === 2) {
    // vip user 
        if(status === 1) {
            return 'normal vip user'
        } else if(status === 2) {
            return 'vip user forever'
        } else {
            return 'unknown vip user'
        }
    } else {
        return 'unknown status user'
    }
}
console.log(getUserTips(1,2))
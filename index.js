const superbowlWin = collection => {
    for (const item of collection) {
        if (item.result==='W') {
            return item.year
        }    
    }
}


record.find(superbowlWin)
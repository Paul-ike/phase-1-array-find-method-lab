function superbowlWin(collection) {
    for (const oneRecord of collection) {
        if (oneRecord.result==='W') {
            return oneRecord.year
        }    
    }
}


array.prototype.find(superbowlWin(record))
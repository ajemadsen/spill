class Day {
    currentUser; 
    constructor() {
        
        this.setDate(); 
        this.updateStreak(); 
        currentUser = getCurrentUser();
        console.log(currentUser.name);
    }
    
    setDate() {
        const todayDateEl = document.querySelector('#todayDate');
        let todayDate = new Date(); 
        let date = todayDate.getDate(); 
        let month = todayDate.toLocaleString('default', { month: 'long' })
        let year = todayDate.getFullYear(); 
        let currentDate = month + " " + date + ", " + year;
        todayDateEl.textContent = currentDate;
    }

    updateStreak() {
        const updateStreakEl = document.querySelector('#updateStreak');
        let update;
        let streak = 6;
        if (streak === 0) {
            update = "Save an entry to start a streak!";
        } else if (streak === 1) {
            update = "You have journaled once!";
        } else {
            update = "You have journaled " + streak + " days in a row!";
        }
        updateStreakEl.textContent = update;
    }
    
    
    // journaled = localStorage.getItem('journaled');
        // entry = null;  
        // if (!journaled) {
        //     journaled = false; 
        //     entry = new Entry(); 
        // } else {
        //     const community = localStorage.getItem('community'); 
        //     if (community) {
        //         loadScores.JSON.parse(community); 
        //     }

        //     if (community.length) {
        //         for (const [person] of community.entries()) {
        //             if (person.userName === this.getUserName())  {
        //                 entry = person.entry; 
        //             }
        //         }
        //     }
        // }
    
    // save(content) {
    //     content = document.querySelector('#content');
    //     userName = this.getUserName(); 
    //     date = new Date().toLocaleDateString();

    //     // journaled = localStorage.getItem('journaled');
    //     // if (!journaled) {
    //     //     journaled = false; 
    //     //     journal = true; 
    //     //     streak = localStorage.getItem.streak;
    //     // } else {

    //     const newEntry = {date: date, userName: userName, content: content };
    // }
    
}

class Entry {
    constructor() {
        this.text = " "; 
        this.date = new Date().toLocaleDateString(); 
    }
}

class User {
    name;
    streak;
    entries;
    journaled;
    
    constructor (name) {
        let entries; 
        let newUser = {name: name, streak: 0, entries: JSON.stringify(entries), journaled: false };
        let users = JSON.parse(localStorage.getItem("users") || "[]");
        users.push(newUser); 
        localStorage.setItem("users", JSON.stringify(users));
    }

    getCurrentUser() {
        let users = JSON.parse(localStorage.getItem("users") || "[]");
        let entries;

        if (users.length) {
            for (const [user] of users.entries) {
                if (user.name === this.getUserName()) {
                    return user;   
                }
            }
        }
        let newUser = {name: this.getUserName, streak:0, entries: JSON.stringify(entries), journaled: false };
        users.push(newUser); 
        localStorage.setItem("users", JSON.stringify(users));

        return newUser; 
    }
    
    getUserName() {
        return localStorage.getItem('userName') ?? 'Anonymous '; 
    }


}

new Day(); 


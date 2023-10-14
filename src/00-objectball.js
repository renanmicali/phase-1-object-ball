const gameObject = () => {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 20,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 11,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }

            }
        }
    }
}

const homeTeamName = () => {
    let object = gameObject();
    return object.home.players["Alan Anderson"]
}

function numPointsScored (players) {
    let object = gameObject();
    for (let keyTeam in object){
        
        let playersSelected = object[keyTeam].players
        if (players in playersSelected )
        console.log(`${players} score is : ${playersSelected[players].points}`)       
        
    } 
    
}

console.log(numPointsScored(["Brendan Haywood"]))

function shoeSize (players) {
    let object = gameObject()
    for (let gameKey in object) {
        let team = object[gameKey].players
        if (players in team){
            console.log(team[players].shoe)
            
        }
    }
}

console.log(shoeSize(["Brendan Haywood"]))

function teamColor(x) {
    for (let gameTeam in gameObject()){
        let team = gameObject()[gameTeam].teamName
        console.log(team)
        if (x === team){
            console.log(gameObject()[gameTeam].colors)
        }
        
        
    }
}

console.log(teamColor("Charlotte Hornets"))

function teamNames() {  
    let teams = []
    for (let gameTeam in gameObject()){
        let playing = gameObject()[gameTeam].teamName
        console.log(playing)
        teams.push(playing)
    }
   return teams;
    
}

console.log(teamNames())


function playerNumbers(teamName){
    let numArr = []
    let object = gameObject()


    for (let team in object){
        let nameTeam = object[team].teamName
        let p = object[team].players
        if(teamName == nameTeam){
        for (let jersey in p){
            jersey = p[jersey].number
            numArr.push(jersey)
            
        }
    }   
}

   
    return `${teamName} players numbers are: ${numArr}`
}

console.log(playerNumbers("Charlotte Hornets"))


function playerStats(name){
    // let player = []
    let object = gameObject()
    for (team in object){
        let listPlayer = object[team].players
        if (name in listPlayer){
            return listPlayer[name]
            
        }
       
    }
    // return player
}


console.log(playerStats("Ben Gordon"))

function bigShoeRebounds (){
    let object = gameObject()
    let biggestShoe = 0
    let reboundsNumber = 0
    for (let key in object){
        let listPlayer = object[key].players
        for (let shoeKey in listPlayer){
            let shoeSize = listPlayer[shoeKey].shoe
            if(shoeSize > biggestShoe ) {
                biggestShoe = shoeSize
                reboundsNumber = listPlayer[shoeKey].rebounds
                debugger
            }

            debugger
        }
    }
    return reboundsNumber
    
}

console.log(bigShoeRebounds())


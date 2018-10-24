var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

// find user by id
function findUserById(userId) {
  return data[userId];
}
//console.log(findUserById("f06"));

// User follows
function userFollows(userId) {
  let follows = data[userId].follows;
  return follows.map(id => findUserById(id).name);
}
//console.log(userFollows("f04"));

// find who user follows by userId;

function whoFollowsUser(userId) {
  let userFollowers = [];
  for (let user in data) {
    let follows = data[user].follows;
    if (follows.includes(userId)) {
      userFollowers.push(data[user].name);
    }
  }
  return userFollowers;
}

//console.log(whoFollowsUser("f04"));

// 1  > List everyone and for each of them, list the names of who they follow and who follows them

function printUsersNetwork() {
  for (let user in data) {
    let followers = whoFollowsUser(user);
    let follows = userFollows(user);
    console.info({
      user,
      follows,
      followers
    });
  }
}

//console.dir(printUsersNetwork());

// 2 > Identify who follows the most people

function followsMost() {
  let max = -Infinity;
  let maxUser = "";

  for (let user in data) {
    if (data[user].follows.length > max) {
      max = data[user].follows.length;
      //console.log(data[user].follows.length);
      maxUser = data[user].name;
      //console.log(data[user].name);
      console.log(max, maxUser);
    }
    console.log(max, user);
  }
  console.log(max, maxUser);
  return maxUser;
}

console.log(followsMost());

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
  return (follows = data[userId].follows);
}
//console.log(userFollows("f04"));

// find who user follows by userId;
function whoFollowsUser(userId) {
  let userFollowers = [];
  for (let user in data) {
    let follows = data[user].follows;
    if (follows.includes(userId)) {
      userFollowers.push(user);
    }
  }
  return userFollowers;
}

//console.log(whoFollowsUser("f04"));

// 1  > List everyone and for each of them, list the names of who they follow and who follows them

function printUsersNetwork() {
  let network = [];
  for (let user in data) {
    let name = data[user].name;
    let followers = whoFollowsUser(user);
    let follows = userFollows(user);
    network.push({
      id: user,
      name,
      follows,
      followers
    });
  }
  return network;
}

console.dir(printUsersNetwork());

// 2 > Identify who follows the most people

function followsMost() {
  let max = -Infinity;
  let maxUser = {};
  for (let user in data) {
    let count = data[user].follows.length;
    let name = data[user].name;
    console.log(count, name);
    maxUser[count] ? maxUser[count].push(name) : (maxUser[count] = [name]);
  }
  let maxCount = Object.keys(maxUser).reduce((acc, cur) => {
    return acc < cur ? cur : acc;
  });

  return maxUser[maxCount];
}

//console.log(followsMost());

// 3 > Identify who has the most followers

function hasMostFollowers() {
  let maxUser = {};
  for (let user in data) {
    let count = whoFollowsUser(user).length;
    let name = data[user].name;
    maxUser[count] ? maxUser[count].push(name) : (maxUser[count] = [name]);
  }

  let maxCount = Object.keys(maxUser).reduce((acc, cur) => {
    return acc < cur ? cur : acc;
  });

  return maxUser[`${maxCount}`];
}
// needs logic to output ---
//console.log(hasMostFollowers());

// 4 > Identify who has the most followers over 30

function followsUser(userId, age) {
  let userFollowers = [];
  let over30 = {};
  for (let user in data) {
    let follows = data[user].follows;
    if (follows.includes(userId) && data[user].age > age) {
      userFollowers.push(data[user].name);
    }
  }
  return userFollowers;
}
//console.log(followsUser("f04", 30));

function maxFollowersOver30() {
  let over30 = {};
  for (let user in data) {
    //over30[user] = followsUser(user, 30).length;
    over30[followsUser(user, 30).length]
      ? over30[followsUser(user, 30).length].push(data[user].name)
      : (over30[followsUser(user, 30).length] = [data[user].name]);
  }
  let maxCount = Object.keys(over30).reduce((acc, cur) => {
    return acc < cur ? cur : acc;
  });
  return over30[maxCount];
}

//console.log(maxFollowersOver30());

// 5 > Identify who follows the most people over 30

//loop over each user and access followers
// loopover followers and filter who are over 30;
// add to object

function followsMaxOver(age) {
  let over30 = {};
  for (let user in data) {
    let follows = data[user].follows;
    let filtered = follows.filter(follower => data[follower].age > age);
    //console.log(filtered);
    over30[filtered.length]
      ? over30[filtered.length].push(data[user].name)
      : (over30[filtered.length] = [data[user].name]);
  }
  let maxCount = Object.keys(over30).reduce((acc, cur) => {
    return acc < cur ? cur : acc;
  });
  return over30[maxCount];
}

//console.log(followsMaxOver(30));

// helper function to match 2 arrays

const areSameArray = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  const arr1Map = {};
  const arr2Map = {};

  for (let val of arr1) {
    arr1Map[val] = (arr1Map[val] || 0) + 1;
  }
  for (let val of arr2) {
    arr2Map[val] = (arr2Map[val] || 0) + 1;
  }
  for (let key in arr1Map) {
    if (arr1Map[key] !== arr2Map[key]) return false;
  }
  return true;
};

//6 > List those who follow someone that doesn't follow them back

function followsButNotFollowed() {
  let notFollwedBack = [];
  let details = printUsersNetwork();
  details.forEach(user => {
    if (!areSameArray(user.follows, user.followers)) {
      notFollwedBack.push(user.name);
    }
  });
  return notFollwedBack;
}

console.log(followsButNotFollowed());

// 7 > List everyone and their reach (sum of # of followers and # of followers of followers)

// Helper function to
function count(userId) {
  let directFollowers = whoFollowsUser(userId);
  let alreadyCounted = [...directFollowers];
  alreadyCounted.map(user => {
    let fol = whoFollowsUser(user);
    alreadyCounted = alreadyCounted.concat(fol);
  });
  return alreadyCounted.length;
}

console.log(count("f04"));

function printReach() {
  for (let user in data) {
    console.log(
      `${user} : ${data[user].name} has ${count(user)} followers !!!`
    );
  }
}

console.log(printReach());

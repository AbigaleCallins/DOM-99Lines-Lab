let friends = ["Micheal", "Kendra", "Paula", "Brad", "Josie"];
//loop to use each friend counting down

//wanted to recreate this lab using the format we are learning now in class

for (let i = 0; i < friends.length; i++) {
  console.log(friends[i].toUpperCase);
  //for every friend loop, the countD loop must run 100x.
  // -- sub 1; index --> j
  for (let countD = 99; countD > 0; countD--) {
    if (countD > 1) {
      console.log(
        countD +
          " line of code in the file, " +
          countD +
          " line of code, " +
          friends[i] +
          " strikes one out, clears it all out, no more lines of code in the file."
      );
    } else if (i === 2) {
      let oneLess = countD - 1;
      console.log(
        countD +
          " lines of code in the file, " +
          countD +
          " lines of code, " +
          friends[i] +
          " strikes one out, clears it all out, " +
          oneLess +
          " line of code in the file, "
      );
    } else {
      let oneLess = oneLeft - 1;
      console.log(
        countD +
          " lines of code in the file, " +
          oneLeft +
          " lines of code, " +
          friends[i] +
          " strikes one out, clears it all out, " +
          oneLess +
          " lines of code in the file."
      );
    }
  }
}

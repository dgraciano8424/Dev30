const raceNumber = Math.floor(Math.random() * 1000);

const earlyRegistration = 1;

const runnerAge = 1;

if (runnerAge >= 18 && earlyRegistration) {
  console.log(
    `Your race will begin @ 9:30! Your number is ${raceNumber + 1000}`,
  );
} else if (runnerAge >= 18 && !earlyRegistration) {
  console.log(
    `Your race will begin @ 11:00 am! Your race number is ${raceNumber}`,
  );
} else {
  console.log(`Your race will begin at 12:30 PM! Your number is ${raceNumber}`);
}

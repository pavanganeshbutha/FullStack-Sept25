function checkAge(data) {
  if (data === { age: 18 }) {
    console.log('You are an adult!');
  } else if (data == { age: 18 }) {
    console.log('You are still an adult');
  } else {
    console.log(`Hmm.. You don't have an age I guess`);
  }
}

// ref : xxxxafbc1234

//data : xxxxafbc1234

// ref1: sdhfjdk24678

checkAge({ age: 18 });

// 1. You are an adult!
// 2. You are still an adult.
// 3. Hmm.. You don't have an age I guess



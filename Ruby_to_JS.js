/*
Convert the following pieces of Ruby code to JavaScript.

apples = 14
puts apples

puts "I have #{apples} apples." */
var apples = 14;
console.log(apples);
console.log("I have " + apples + " apples.");

/*
materials = ['wood', 'metal', 'stone']
words = {
  'elephant' => "The world's largest land mammal.",
  'school' => 'A place of learning.',
  'ice cream' => 'A delicious milk-based dessert.',
} */

var materials = ['wood', 'metal', 'stone'];
var words = {
  'elephant': "The world's largest land mammal.",
  'school': 'A place of learning.',
  'ice cream': 'A delicious milk-based dessert.',
};
console.log(words);

/*
num = 16
if num > 10
  puts "#{num} is greater than 10."
elsif num == 10
  puts "#{num} is exactly 10."
else
  puts "#{num} must be less than 10."
end */
var num = 16;
if (num > 10) {
  console.log(num + " is greater than 10.");
} else if (num === 10) {
  console.log(num + " is exactly 10.");
} else {
console.log(num + " must be less than 10.");
}

/*
10.times do
  puts "Doing the same thing over and over."
end */

for (var index = 0; index < 10; index ++) {
  var message = "Doing the same thing over and over."
  console.log(message);
}

/*
base = 5
20.times do |num|
  puts num + base
end */
var base = 5;
for (var index = 0; index < 20; index ++) {
  console.log(base + index);
}

/* total = 0
100.times do |num|
  total += num
end
puts total */
var total = 0;
for (var num = 0; num < 100; num ++) {
  total += num
}
console.log(total);

/* (3..15).each do |height|
  if height > 9
    puts "You can get on the rollercoaster!"
  else
    puts "You are too short to ride this rollercoaster."
  end
end */

for (var num = 3; num <= 15; num ++) {
  if (num > 9) {
    console.log("You can get on the rollercoaster!");
  } else {
    console.log("You are too short to ride this rollercoaster.");
  }
}

/*
containers = ['purse', 'wallet', 'backback']
containers.each do |container|
  puts container
end */
var containers = ['purse', 'wallet', 'backback']

for (var index = 0; index < containers.length; index ++) {
  var item = containers[index];
  console.log(item);
}

/*
def hello_world
  puts "Hello world!"
end

hello_world */

function helloWorld() {
  var myString = "Hello World!";
  console.log(myString);
}
helloWorld();
// Different option
function helloMom() {
  console.log("Hello Mom!");
}
helloMom();

/* def add(first_num, second_num)
  first_num + second_num
end

amount = add(5, 7)
puts amount */

function add(number1, number2) {
  return number1 + number2
}
var ammount = add(5,7);
console.log(ammount);
console.log(add(5,7));// this will also work

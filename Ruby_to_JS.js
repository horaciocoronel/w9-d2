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

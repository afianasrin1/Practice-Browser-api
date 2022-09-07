//১. setTimeout এর ভিতরে একটা কিছু কনসোল লগ করবে যেটা সাড়ে তিন সেকেন্ড পরে আউটপুট দেখাবে। ,
console.log("i");
setTimeout(() => {
  console.log("am");
}, 3500);

console.log("comming");

//২. prompt দিয়ে ইউজারের কাছ থেকে একটা সংখ্যা নাও। সেটার সাথে ২০০যোগ করো। যোগ করতে গেলে parse করা লাগলে সেটা করো। তারপর সেই রেজাল্টকে alert দিয়ে আউটপুট দেখাও

const promtGetNumber = () => {
  const add = prompt("get and adding number show");
  const number = Number(add);
  if (number > 0) {
    alert(`your Number is: ${number + 200}`);
  } else {
    alert("please input your number");
  }
};

// reduce เป็น method ของ array ซึ่งจะ รับค่าเป็น function หรือ call back function โดยภายใน function  เเละ 2 คือ ค่าตั้งต้นหรือ currentvalue เเรก
// ภายใน callback จะรับ parameter หลักๆ จะ เป็น 2 ค่า เเต่มีตัวช่วยเพิ่ม มาอีก 2 ค่า โดยจะ loop โดย จำนวนใน array เป็น length - 1 (ถ้า ไม่ใส่ currentvalue (parameter ที่2))
// 1. prev คือ เริ่มต้น จะ ส่งผ่านไปเป็น ค่า prev ใน loop ต่อไป
// 2. current คือ ค่า ปัจจุบัน ที่ loop นั้น กำลังชี้ออยู่
// 3. currentIndex คือ จำนวน loop ที่ทำไปเเล้ว
// 4. array คือ array เดิมที่ใช้
// เเล้ว return ค่า prev สุดท้ายที่ได้รับมา

// การใช้งาน ส่วนมากใช้ในการ run operator เพื่อหาค่าใดค่าหนึ่ง ภายใน array เป็นต้น ที่อาศัยการเช็คเป็นลำดับชั้นนั่นเอง

const example = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// การบวก เลข โดยจะ รันค่าหาผลลัพธ์ไปทีละ ค่าเป็น current ในเเต่ละ callback จะเก็บ เป็น prev ในก่อนหน้า โดย prev เเรก จะใช้เป็น index ตัวที่ 0 ของ array เเต่
// ถ้า เรา มี paremeter ที่ 2 จะใช้ ตัวนั้น เป็น prev เเรก

// กรณี prev เริ่ม ที่ index เเรก คือ 1 loop 9 รอบ เพราะ ไม่นับ index เเรก
console.log('----------testReduce');
const testReduce = example.reduce((prev, current, currentIndex, array) => {
  console.log(
    'prev:',
    prev,
    'current:',
    current,
    'currentIndex:',
    currentIndex
  );
  return prev + current;
});

//กรณี prev เริ่ม ที่ ค่า 10 เเล้ว loop 10 รอบ ตามจำนวน length.
console.log('----------testReduce2');
const testReduce2 = example.reduce((prev, current, currentIndex, array) => {
  console.log(
    'prev:',
    prev,
    'current:',
    current,
    'currentIndex:',
    currentIndex
  );
  return prev + current;
}, 10);

// ประยุกต์ หารผลรวม ค่า mod 2 ของ ทุก value ภายใน array
const testArray = [1];

const mathFunction = (prev, current) => (prev += current % 2);

const testReduce3 = example.reduce(mathFunction, 0);

// callback
const test = (callback, arg1) => {
  const x = 100;
  return callback(arg1, x * 50);
};

const test2 = (x, y) => {
  return x + y;
};

console.log('----------result');
console.log({ testReduce });
console.log({ testReduce2 });
console.log({ testReduce3 });
console.log('----------callback');
console.log(test(test2, 5));

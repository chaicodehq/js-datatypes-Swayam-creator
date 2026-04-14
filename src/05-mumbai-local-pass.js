/**
 * 🚂 Mumbai Local Train Pass Generator
 *
 * Aaj se tu Mumbai local ka digital pass system bana raha hai! Passenger
 * ka data milega aur tujhe ek formatted pass string generate karni hai.
 * Pass mein sab details honi chahiye ek specific format mein.
 *
 * Rules:
 *   - passenger object mein required fields: name, from, to, classType
 *   - classType must be "first" ya "second" (case-insensitive check)
 *   - Pass ID generate karo:
 *     classType ka first char uppercase + from ke pehle 3 letters uppercase
 *     + to ke pehle 3 letters uppercase
 *     Example: "first", "dadar", "andheri" => "F" + "DAD" + "AND" = "FDADAND"
 *   - Output format using template literal:
 *     Line 1: "MUMBAI LOCAL PASS"
 *     Line 2: "---"
 *     Line 3: "Name: <NAME IN UPPERCASE>"
 *     Line 4: "From: <From in Title Case>"
 *     Line 5: "To: <To in Title Case>"
 *     Line 6: "Class: <FIRST or SECOND>"
 *     Line 7: "Pass ID: <PASSID>"
 *   - Title Case = first letter uppercase, rest lowercase
 *   - Lines are separated by \n (newline)
 *   - Hint: Use template literals, slice(), toUpperCase(), toLowerCase(),
 *     charAt(), typeof
 *
 * Validation:
 *   - Agar passenger object nahi hai ya null hai, return "INVALID PASS"
 *   - Agar koi required field (name, from, to, classType) missing hai
 *     ya empty string hai, return "INVALID PASS"
 *   - Agar classType "first" ya "second" nahi hai, return "INVALID PASS"
 *
 * @param {{ name: string, from: string, to: string, classType: string }} passenger
 * @returns {string} Formatted pass or "INVALID PASS"
 *
 * @example
 *   generateLocalPass({ name: "rahul sharma", from: "dadar", to: "andheri", classType: "first" })
 *   // => "MUMBAI LOCAL PASS\n---\nName: RAHUL SHARMA\nFrom: Dadar\nTo: Andheri\nClass: FIRST\nPass ID: FDADAND"
 *
 *   generateLocalPass(null)
 *   // => "INVALID PASS"
 */
 const classes=["first","second"];
 const reqField=["name","from","to","classType"];
export function generateLocalPass(passenger) {
  if(typeof passenger!=="object" || passenger===null) return "INVALID PASS";
  if(!classes.includes(passenger.classType.toLowerCase())) return "INVALID PASS";
  if(!reqField.every(f=>passenger.hasOwnProperty(f))) return "INVALID PASS";
  if(Object.entries(passenger).some(([k,v])=>typeof v!=="string"||v.trim()==="")) return "INVALID PASS";
  let custName=passenger.name.toUpperCase();
  let custFrom=passenger.from.toLowerCase();
  let custTo=passenger.to.toLowerCase();
  let custClass=passenger.classType.toUpperCase();
  custFrom=custFrom.charAt(0).toUpperCase() + custFrom.slice(1);
  custTo=custTo.charAt(0).toUpperCase() + custTo.slice(1);
  let passId=custClass.charAt(0).toUpperCase() + custFrom.slice(0,3).toUpperCase() + custTo.slice(0,3).toUpperCase();

 let res = `MUMBAI LOCAL PASS
---
Name: ${custName}
From: ${custFrom}
To: ${custTo}
Class: ${custClass}
Pass ID: ${passId}`;

  return res;
}

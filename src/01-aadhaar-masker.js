/**
 * 🪪 Aadhaar Number Masker
 *
 * Sharma uncle ka beta naya app bana raha hai jisme Aadhaar number dikhana hai,
 * lekin privacy maintain karni hai. Toh last 4 digits dikhao, baaki sab mask
 * karo "X" se. Format mein dashes bhi hone chahiye: XXXX-XXXX-1234
 *
 * Rules:
 *   - Input ek string honi chahiye exactly 12 digits ki (no spaces, no dashes)
 *   - Pehle 8 digits ko "X" se replace karo
 *   - Last 4 digits as-is rakho
 *   - Output format: "XXXX-XXXX-1234" (dashes after every 4 characters)
 *   - Hint: Use string methods like slice(), repeat(), and length
 *
 * Validation:
 *   - Agar input string nahi hai, return "INVALID"
 *   - Agar string ki length exactly 12 nahi hai, return "INVALID"
 *   - Agar string mein koi non-digit character hai, return "INVALID"
 *
 * @param {string} aadhaarNumber - 12-digit Aadhaar number as string
 * @returns {string} Masked Aadhaar in format "XXXX-XXXX-1234" or "INVALID"
 *
 * @example
 *   maskAadhaar("123456781234")
 *   // => "XXXX-XXXX-1234"
 *
 *   maskAadhaar("9876")
 *   // => "INVALID"
 */
export function maskAadhaar(aadhaarNumber) {
  // Your code here
  if(typeof aadhaarNumber!=="string" || !aadhaarNumber instanceof String ) return "INVALID";
  if(aadhaarNumber.length>12 || aadhaarNumber.length < 12) return "INVALID";
  const hasDigit=aadhaarNumber.split('').some((d)=>isNaN(d) && d!=='');
  if(hasDigit) return "INVALID";

  let mask1=aadhaarNumber.slice(0,4);
  let mask2=aadhaarNumber.slice(4,8);
  let noMask=aadhaarNumber.slice(8,12);

  mask1=mask1.replace(mask1,"X").repeat(4);
  mask2=mask2.replace(mask2,"X").repeat(4);

  let result= mask1 + '-' + mask2 + '-'+ noMask;

 return result;
}


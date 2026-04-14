/**
 * 🎬 Bollywood Movie Title Fixer
 *
 * Pappu ne ek movie database banaya hai lekin usne saare titles galat type
 * kar diye - kuch ALL CAPS mein, kuch all lowercase mein, kuch mein extra
 * spaces hain. Tu fix kar de titles ko proper Title Case mein!
 *
 * Rules:
 *   - Extra spaces hatao: leading, trailing, aur beech ke multiple spaces ko
 *     single space banao
 *   - Har word ka pehla letter uppercase, baaki lowercase (Title Case)
 *   - EXCEPTION: Chhote words jo Title Case mein lowercase rehte hain:
 *     "ka", "ki", "ke", "se", "aur", "ya", "the", "of", "in", "a", "an"
 *     LEKIN agar word title ka PEHLA word hai toh capitalize karo
 *   - Hint: Use trim(), split(), map(), join(), charAt(), toUpperCase(),
 *     toLowerCase(), slice()
 *
 * Validation:
 *   - Agar input string nahi hai, return ""
 *   - Agar string trim karne ke baad empty hai, return ""
 *
 * @param {string} title - Messy Bollywood movie title
 * @returns {string} Cleaned up Title Case title
 *
 * @example
 *   fixBollywoodTitle("  DILWALE   DULHANIA   LE   JAYENGE  ")
 *   // => "Dilwale Dulhania Le Jayenge"
 *
 *   fixBollywoodTitle("dil ka kya kare")
 *   // => "Dil ka Kya Kare"
 */
export function fixBollywoodTitle(title) {
  // Your code here
  const exceptions= ["ka", "ki", "ke", "se", "aur", "ya", "the", "of", "in", "a", "an"];
  if(noString(title)) return "";

  let trimmedString=trimString(title);

  let splitWords=getSpiltWords(trimmedString);

  let forMattedString=splitWords.map((str,idx)=>{
    let lower=str.toLowerCase();
    if(idx!==0 && exceptions.includes(lower)) return lower

    return lower.charAt(0).toUpperCase() + lower.slice(1).toLowerCase()
  }).join(" ");

  return forMattedString;
}

function noString(title){

if(typeof title!=="string" || !title instanceof String || title.trim()==="") return true};

function trimString(title){
 return title.trim();
}
function getSpiltWords(trimmedString){
return trimmedString.split(/\s+/);
}


